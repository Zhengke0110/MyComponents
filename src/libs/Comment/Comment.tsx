import { defineComponent, PropType, ref, computed, h } from 'vue';
import type { CommentData } from './types';
import type { VNode } from 'vue';

/**
 * Comment 评论组件
 * 用于展示评论列表、回复功能和评论提交
 */
export default defineComponent({
    name: 'Comment',
    props: {
        // 评论数据
        comments: {
            type: Array as PropType<CommentData[]>,
            default: () => []
        },
        // 头像形状："circle" | "square"
        avatarShape: {
            type: String as PropType<'circle' | 'square'>,
            default: 'circle'
        },
        // 每层评论间距
        nested: {
            type: Boolean,
            default: true
        },
        // 是否允许回复
        allowReply: {
            type: Boolean,
            default: true
        },
        // 加载状态
        loading: {
            type: Boolean,
            default: false
        },
        // 自定义头像渲染函数
        renderAvatar: {
            type: Function as PropType<(comment: CommentData) => VNode>,
            default: undefined
        },
        // 自定义操作区域渲染函数
        renderActions: {
            type: Function as PropType<(comment: CommentData) => VNode[]>,
            default: undefined
        }
    },
    emits: [
        'reply', // 回复评论时触发
        'like',  // 点赞评论时触发
        'delete', // 删除评论时触发
        'submit' // 提交新评论时触发
    ],
    setup(props, { emit, slots }) {
        const commentInput = ref('');
        const replyingTo = ref<string | null>(null);

        const handleReply = (commentId: string) => {
            replyingTo.value = commentId;
            emit('reply', commentId);
        };

        const handleLike = (commentId: string) => {
            emit('like', commentId);
        };

        const handleDelete = (commentId: string) => {
            emit('delete', commentId);
        };

        const submitComment = () => {
            if (!commentInput.value.trim()) return;

            emit('submit', {
                content: commentInput.value,
                replyTo: replyingTo.value
            });

            commentInput.value = '';
            replyingTo.value = null;
        };

        const renderComment = (comment: CommentData): VNode => {
            const avatarClasses = computed(() => [
                'overflow-hidden flex-shrink-0',
                props.avatarShape === 'circle' ? 'rounded-full' : 'rounded-md',
                'transition-transform duration-200 hover:scale-105',
                'w-10 h-10' // 确保头像容器固定宽高比例为1:1
            ]);

            // 使用Vue的h函数创建VNode而不是使用JSX语法
            const createReplyButton = () => h('button', {
                key: 'reply',
                onClick: () => handleReply(comment.id),
                class: 'text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors'
            }, '回复');

            const createDeleteButton = () => h('button', {
                key: 'delete',
                onClick: () => handleDelete(comment.id),
                class: 'text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors ml-4'
            }, '删除');

            const defaultActions = [createReplyButton()];

            if (comment.allowDelete) {
                defaultActions.push(createDeleteButton());
            }

            const actions = props.renderActions
                ? props.renderActions(comment)
                : defaultActions;

            return h('div', {
                key: comment.id,
                class: 'comment-item transition-all duration-300 ease-in-out'
            }, [
                // 评论主体
                h('div', {
                    class: 'flex gap-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors'
                }, [
                    // 头像
                    h('div', {
                        class: avatarClasses.value
                    }, [
                        props.renderAvatar ? props.renderAvatar(comment) : h('img', {
                            src: comment.avatar,
                            alt: comment.author,
                            class: 'w-full h-full object-cover' // 确保图片完全填充容器
                        })
                    ]),

                    // 评论内容区域
                    h('div', {
                        class: 'flex-1 overflow-hidden'
                    }, [
                        // 作者信息
                        h('div', {
                            class: 'flex items-center gap-2 mb-1'
                        }, [
                            h('span', {
                                class: 'font-medium text-gray-900 dark:text-white'
                            }, comment.author),

                            comment.isAuthor ? h('span', {
                                class: 'text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-0.5 rounded'
                            }, '作者') : null,

                            h('span', {
                                class: 'text-sm text-gray-500 dark:text-gray-400'
                            }, comment.time)
                        ]),

                        // 评论内容
                        h('div', {
                            class: 'text-gray-700 dark:text-gray-300 mb-2 whitespace-pre-wrap break-words'
                        }, [
                            comment.replyTo ? h('span', {
                                class: 'text-blue-500 dark:text-blue-400 mr-1'
                            }, `@${comment.replyTo.author} `) : null,
                            comment.content
                        ]),

                        // 点赞和操作按钮
                        h('div', {
                            class: 'flex items-center text-sm'
                        }, [
                            h('div', {
                                class: 'flex space-x-4'
                            }, [
                                h('button', {
                                    onClick: () => handleLike(comment.id),
                                    class: `flex items-center gap-1 transition-colors ${comment.liked ? 'text-red-500 dark:text-red-400' : 'text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400'
                                        }`
                                }, [
                                    h('svg', {
                                        xmlns: 'http://www.w3.org/2000/svg',
                                        class: 'h-4 w-4',
                                        fill: comment.liked ? 'currentColor' : 'none',
                                        viewBox: '0 0 24 24',
                                        stroke: 'currentColor'
                                    }, [
                                        h('path', {
                                            'stroke-linecap': 'round',
                                            'stroke-linejoin': 'round',
                                            'stroke-width': '2',
                                            d: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                                        })
                                    ]),
                                    h('span', {}, comment.likes || 0)
                                ]),

                                props.allowReply ? actions : null
                            ])
                        ])
                    ])
                ]),

                // 回复框
                replyingTo.value === comment.id ? h('div', {
                    class: 'pl-12 mt-2 animate-fadeIn'
                }, [
                    h('div', {
                        class: 'flex gap-2'
                    }, [
                        h('textarea', {
                            value: commentInput.value,
                            onInput: (e: Event) => { commentInput.value = (e.target as HTMLTextAreaElement).value },
                            placeholder: `回复 ${comment.author}...`,
                            class: 'w-full p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all',
                            rows: 2
                        }),
                        h('div', {
                            class: 'flex flex-col gap-2'
                        }, [
                            h('button', {
                                onClick: submitComment,
                                class: 'px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors dark:bg-blue-600 dark:hover:bg-blue-500'
                            }, '发送'),
                            h('button', {
                                onClick: () => { replyingTo.value = null },
                                class: 'px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-md transition-colors'
                            }, '取消')
                        ])
                    ])
                ]) : null,

                // 子评论
                comment.children && comment.children.length > 0 ? h('div', {
                    class: `${props.nested ? 'pl-12' : 'mt-4'} space-y-4`
                }, comment.children.map(child => renderComment(child))) : null
            ]);
        };

        return () => h('div', { class: 'comment-container' }, [
            props.loading ?
                h('div', { class: 'flex justify-center items-center p-8' }, [
                    h('div', { class: 'animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 dark:border-blue-400' })
                ]) :
                h('div', { class: 'space-y-4' }, [
                    // 评论列表
                    ...props.comments.map(comment => renderComment(comment)),

                    // 评论输入区
                    slots.commentInput ? slots.commentInput() : h('div', { class: 'mt-6' }, [
                        h('h3', {
                            class: 'text-lg font-medium text-gray-900 dark:text-white mb-2'
                        }, '发表评论'),
                        h('div', { class: 'flex gap-2' }, [
                            h('textarea', {
                                value: commentInput.value,
                                onInput: (e: Event) => { commentInput.value = (e.target as HTMLTextAreaElement).value },
                                placeholder: '写下你的评论...',
                                class: 'w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all',
                                rows: 4
                            })
                        ]),
                        h('div', { class: 'flex justify-end mt-2' }, [
                            h('button', {
                                onClick: submitComment,
                                disabled: !commentInput.value.trim(),
                                class: 'px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-400 disabled:opacity-50 disabled:pointer-events-none'
                            }, '提交评论')
                        ])
                    ])
                ])
        ]);
    }
});
