import { defineComponent, ref, reactive, PropType, computed } from 'vue';

export type UploadFileStatus = 'ready' | 'uploading' | 'done' | 'error';

export interface UploadFile {
    uid: string;
    name: string;
    status?: UploadFileStatus;
    response?: any;
    url?: string;
    size: number;
    type: string;
    percent?: number;
}

export interface HttpRequestOptions {
    action: string;
    data?: Record<string, any>;
    file: File;
    filename?: string;
    headers?: Record<string, string>;
    onProgress?: (e: ProgressEvent) => void;
    onSuccess?: (response: any) => void;
    onError?: (err: any) => void;
    withCredentials?: boolean;
}

export default defineComponent({
    name: 'Upload',
    props: {
        // 上传的地址
        action: {
            type: String,
            required: true
        },
        // 默认已上传的文件列表
        fileList: {
            type: Array as PropType<UploadFile[]>,
            default: () => []
        },
        // 接受上传的文件类型
        accept: {
            type: String,
            default: ''
        },
        // 是否支持多选文件
        multiple: {
            type: Boolean,
            default: false
        },
        // 上传请求的 headers
        headers: {
            type: Object,
            default: () => ({})
        },
        // 上传文件之前的钩子
        beforeUpload: {
            type: Function as PropType<(file: File, fileList: File[]) => boolean | Promise<File | Blob | boolean>>,
            default: () => true
        },
        // 限制上传文件大小（bytes）
        maxSize: {
            type: Number,
            default: 0
        },
        // 是否禁用
        disabled: {
            type: Boolean,
            default: false
        },
        // 是否拖拽上传模式
        drag: {
            type: Boolean,
            default: false
        },
        // 上传所需额外参数
        data: {
            type: Object,
            default: () => ({})
        },
        // 设置上传的请求头部
        withCredentials: {
            type: Boolean,
            default: false
        },
        // 自定义上传方法
        customRequest: {
            type: Function as PropType<(options: HttpRequestOptions) => void>,
            default: undefined
        }
    },
    emits: ['change', 'success', 'error', 'progress', 'exceed-size', 'remove'],
    setup(props, { emit, slots }) {
        const fileInputRef = ref<HTMLInputElement | null>(null);
        const dragOver = ref(false);
        const uploadingFiles = reactive<UploadFile[]>([...props.fileList]);

        // 默认的请求上传方法
        const defaultRequest = (options: HttpRequestOptions) => {
            const xhr = new XMLHttpRequest();
            const formData = new FormData();

            formData.append(options.filename || 'file', options.file);

            if (options.data) {
                Object.keys(options.data).forEach(key => {
                    formData.append(key, options.data![key]);
                });
            }

            xhr.upload.addEventListener('progress', e => {
                if (e.lengthComputable && options.onProgress) {
                    options.onProgress(e);
                }
            });

            xhr.addEventListener('load', () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    const response = xhr.responseText || xhr.response;
                    options.onSuccess && options.onSuccess(JSON.parse(response));
                } else {
                    options.onError && options.onError(new Error('Upload failed'));
                }
            });

            xhr.addEventListener('error', () => {
                options.onError && options.onError(new Error('Upload request failed'));
            });

            xhr.open('POST', options.action, true);

            if (options.withCredentials && 'withCredentials' in xhr) {
                xhr.withCredentials = true;
            }

            if (options.headers) {
                Object.keys(options.headers).forEach(key => {
                    xhr.setRequestHeader(key, options.headers![key]);
                });
            }

            xhr.send(formData);

            return xhr;
        };

        // 触发文件选择
        const handleClick = () => {
            if (props.disabled) return;
            if (fileInputRef.value) {
                fileInputRef.value.value = '';
                fileInputRef.value.click();
            }
        };

        // 处理文件改变事件
        const handleFileChange = async (e: Event) => {
            const target = e.target as HTMLInputElement;
            const files = Array.from(target.files || []);
            if (!files.length) return;

            await uploadFiles(files);
        };

        // 处理拖拽事件
        const handleDrop = async (e: DragEvent) => {
            e.preventDefault();
            if (props.disabled) return;

            dragOver.value = false;
            const files = Array.from(e.dataTransfer?.files || []);
            if (!files.length) return;

            await uploadFiles(files);
        };

        // 处理文件拖拽入区域
        const handleDragover = (e: DragEvent) => {
            e.preventDefault();
            if (props.disabled) return;
            dragOver.value = true;
        };

        // 处理文件拖拽离开区域
        const handleDragleave = (e: DragEvent) => {
            e.preventDefault();
            dragOver.value = false;
        };

        // 上传文件
        const uploadFiles = async (files: File[]) => {
            for (const file of files) {
                if (props.maxSize && file.size > props.maxSize) {
                    emit('exceed-size', file);
                    continue;
                }

                let shouldUpload = true;
                if (props.beforeUpload) {
                    const result = await props.beforeUpload(file, files);
                    if (result === false) {
                        shouldUpload = false;
                    } else if (result instanceof File || result instanceof Blob) {
                        shouldUpload = true;
                        // 使用转换后的文件
                        // file = result as File;
                    }
                }

                if (shouldUpload) {
                    const uploadFile: UploadFile = {
                        uid: Date.now() + '-' + Math.random().toString(36).substr(2),
                        name: file.name,
                        size: file.size,
                        type: file.type,
                        status: 'ready',
                        percent: 0
                    };

                    uploadingFiles.push(uploadFile);
                    emit('change', { file: uploadFile, fileList: [...uploadingFiles] });

                    // 开始上传
                    uploadFile.status = 'uploading';

                    const options: HttpRequestOptions = {
                        action: props.action,
                        file,
                        filename: 'file',
                        headers: props.headers,
                        data: props.data,
                        withCredentials: props.withCredentials,
                        onProgress: (e: ProgressEvent) => {
                            if (e.lengthComputable) {
                                uploadFile.percent = Math.round((e.loaded * 100) / e.total);
                                emit('progress', {
                                    percent: uploadFile.percent,
                                    file: uploadFile,
                                    fileList: [...uploadingFiles]
                                });
                            }
                        },
                        onSuccess: (res) => {
                            uploadFile.status = 'done';
                            uploadFile.response = res;
                            emit('success', { response: res, file: uploadFile, fileList: [...uploadingFiles] });
                            emit('change', { file: uploadFile, fileList: [...uploadingFiles] });
                        },
                        onError: (err) => {
                            uploadFile.status = 'error';
                            emit('error', { error: err, file: uploadFile, fileList: [...uploadingFiles] });
                            emit('change', { file: uploadFile, fileList: [...uploadingFiles] });
                        }
                    };

                    if (props.customRequest) {
                        props.customRequest(options);
                    } else {
                        defaultRequest(options);
                    }
                }
            }
        };

        // 移除文件
        const handleRemove = (file: UploadFile) => {
            const index = uploadingFiles.findIndex(item => item.uid === file.uid);
            if (index !== -1) {
                const removedFile = uploadingFiles.splice(index, 1)[0];
                emit('remove', removedFile);
                emit('change', { file: removedFile, fileList: [...uploadingFiles] });
            }
        };

        // 拖拽区域样式
        const dragClasses = computed(() => {
            return [
                'border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ease-in-out',
                dragOver.value ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-300 hover:border-blue-400 dark:border-gray-600 dark:hover:border-blue-500',
                props.disabled ? 'opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-800' : 'cursor-pointer'
            ].join(' ');
        });

        // 上传按钮样式
        const buttonClasses = computed(() => {
            return [
                'flex items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
                props.disabled
                    ? 'opacity-50 cursor-not-allowed bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                    : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:border-gray-600'
            ].join(' ');
        });

        // 文件列表项样式
        const fileItemClasses = computed(() => {
            return [
                'flex items-center justify-between p-3 my-2 border rounded-md transition-colors',
                'dark:border-gray-700 dark:bg-gray-800'
            ].join(' ');
        });

        return () => (
            <div class="upload-component">
                <input
                    ref={fileInputRef}
                    type="file"
                    class="hidden"
                    accept={props.accept}
                    multiple={props.multiple}
                    onChange={handleFileChange}
                />

                {props.drag ? (
                    <div
                        class={dragClasses.value}
                        onClick={handleClick}
                        onDrop={handleDrop}
                        onDragover={handleDragover}
                        onDragleave={handleDragleave}
                    >
                        <div class="text-center">
                            <p class="text-5xl text-gray-400 dark:text-gray-500 mb-2">
                                <i class={"icon-[line-md--text-box-multiple-twotone] size-6"}> </i>
                            </p>
                            <p class="text-gray-600 dark:text-gray-300 mb-1">
                                点击或拖拽文件到此区域上传
                            </p>
                            <p class="text-xs text-gray-400 dark:text-gray-500">
                                {props.accept && `支持的文件类型: ${props.accept}`}
                            </p>
                        </div>
                        {slots.drag && slots.drag()}
                    </div>
                ) : (
                    <button
                        type="button"
                        onClick={handleClick}
                        disabled={props.disabled}
                        class={buttonClasses.value}
                    >
                        <i class={"icon-[line-md--upload-loop] size-8 mr-2"}></i>
                        <span>上传文件</span>
                        {slots.default && slots.default()}
                    </button>
                )}

                {/* 文件列表 */}
                {uploadingFiles.length > 0 && (
                    <div class="file-list mt-4">
                        {uploadingFiles.map(file => (
                            <div key={file.uid} class={fileItemClasses.value}>
                                <div class="flex items-center overflow-hidden">
                                    <i class={"icon-[line-md--link] size-6 text-gray-400 mr-2"}></i>
                                    <span class="truncate flex-1 text-gray-700 dark:text-gray-300">{file.name}</span>
                                </div>

                                <div class="flex items-center ml-2">
                                    {file.status === 'uploading' && (
                                        <div class="flex items-center">
                                            <i class={"icon-[line-md--loading-alt-loop] size-6 text-blue-500 mr-2"}></i>
                                            <span class="text-blue-500 text-xs mr-2">{file.percent}%</span>
                                        </div>
                                    )}

                                    {file.status === 'done' && (
                                        <i class={"icon-[line-md--check-all] size-6 text-green-500 mr-2"}></i>
                                    )}

                                    {file.status === 'error' && (
                                        <i class={"icon-[line-md--close-circle] size-6 text-red-500 mr-2"}></i>
                                    )}

                                    <button
                                        type="button"
                                        onClick={() => handleRemove(file)}
                                        class="text-gray-400 hover:text-red-500 transition-colors focus:outline-none dark:text-gray-500 dark:hover:text-red-400"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
});
