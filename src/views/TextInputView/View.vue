<template>
  <div class="p-6 space-y-10">
    <h1 class="text-2xl font-bold mb-6">TextInput 文本输入框组件</h1>
    
    <!-- 基础用法 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold mb-4">基础用法</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput
          v-model="basic"
          id="basic"
          label="用户名"
          placeholder="请输入用户名"
        />
        <TextInput
          v-model="password"
          id="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
        />
        <TextInput
          v-model="number"
          id="number"
          type="number"
          label="数字"
          placeholder="请输入数字"
        />
        <div class="flex items-end">
          <p class="text-sm text-gray-500">当前输入值: {{ basic || '(空)' }}</p>
        </div>
      </div>
    </section>
    
    <!-- 不同尺寸 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold mb-4">不同尺寸</h2>
      <div class="space-y-6">
        <TextInput
          v-model="sizes.sm"
          id="size-sm"
          size="sm"
          label="小尺寸 (sm)"
          placeholder="小尺寸输入框"
        />
        <TextInput
          v-model="sizes.md"
          id="size-md"
          size="md"
          label="中尺寸 (md)"
          placeholder="中尺寸输入框"
        />
        <TextInput
          v-model="sizes.lg"
          id="size-lg"
          size="lg"
          label="大尺寸 (lg)"
          placeholder="大尺寸输入框"
        />
      </div>
    </section>
    
    <!-- 主题颜色 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold mb-4">主题颜色</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TextInput
          v-model="colors.blue"
          id="color-blue"
          color="blue"
          label="蓝色主题"
          placeholder="蓝色输入框"
        />
        <TextInput
          v-model="colors.emerald"
          id="color-emerald"
          color="emerald"
          label="翠绿主题"
          placeholder="翠绿输入框"
        />
        <TextInput
          v-model="colors.purple"
          id="color-purple"
          color="purple"
          label="紫色主题"
          placeholder="紫色输入框"
        />
        <TextInput
          v-model="colors.rose"
          id="color-rose"
          color="rose"
          label="玫瑰主题"
          placeholder="玫瑰输入框"
        />
        <TextInput
          v-model="colors.amber"
          id="color-amber"
          color="amber"
          label="琥珀主题"
          placeholder="琥珀输入框"
        />
        <TextInput
          v-model="colors.teal"
          id="color-teal"
          color="teal"
          label="青色主题"
          placeholder="青色输入框"
        />
      </div>
    </section>
    
    <!-- 带图标 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold mb-4">带图标</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput
          v-model="icons.search"
          id="icon-search"
          label="搜索"
          placeholder="搜索关键词"
        >
          <template #prefix>
            <svg
              class="size-5 animate-pulse"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </template>
        </TextInput>
        
        <TextInput
          v-model="icons.link"
          id="icon-link"
          color="sky"
          label="链接"
          placeholder="输入链接地址"
        >
          <template #suffix>
            <svg
              class="size-5 transition-transform duration-300 hover:rotate-45"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </template>
        </TextInput>
        
        <TextInput
          v-model="icons.both"
          id="icon-both"
          color="violet"
          label="双图标"
          placeholder="前后都有图标"
        >
          <template #prefix>
            <svg
              class="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </template>
          <template #suffix>
            <div class="animate-bounce">
              <svg
                class="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </div>
          </template>
        </TextInput>
      </div>
    </section>
    
    <!-- 状态展示 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold mb-4">状态展示</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput
          v-model="states.disabled"
          id="state-disabled"
          disabled
          label="禁用状态"
          placeholder="禁用的输入框"
        />
        <TextInput
          v-model="states.error"
          id="state-error"
          error="此字段不能为空，请输入有效信息"
          label="错误状态"
          placeholder="错误状态的输入框"
        />
        <TextInput
          v-model="states.description"
          id="state-description"
          description="这是一段帮助说明文本，可以提供额外的指导"
          label="带描述信息"
          placeholder="带描述的输入框"
        />
        <TextInput
          v-model="states.required"
          id="state-required"
          required
          label="必填字段"
          placeholder="这是一个必填字段"
          :error="showRequiredError ? '此字段为必填项' : undefined"
        />
      </div>
      <div class="flex justify-end mt-2">
        <button 
          @click="toggleRequiredError"
          class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          {{ showRequiredError ? '隐藏' : '显示' }}错误信息
        </button>
      </div>
    </section>
    
    <!-- 输入过渡动画演示 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold mb-4">动画效果演示</h2>
      <div class="grid grid-cols-1 gap-6">
        <TextInput
          v-model="animatedInput"
          id="animated-input"
          color="fuchsia"
          label="输入文字查看动画效果"
          placeholder="开始输入..."
        >
          <template #suffix>
            <div v-if="animatedInput" class="transition-all duration-500 ease-in-out transform">
              <svg
                class="size-5 text-fuchsia-500 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle 
                  class="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  stroke-width="4"
                ></circle>
                <path 
                  class="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          </template>
        </TextInput>
        <div class="h-8 overflow-hidden">
          <p 
            v-if="animatedInput" 
            class="text-sm text-fuchsia-500 animate__animated animate__fadeInUp"
          >
            当前输入: {{ animatedInput }}
          </p>
        </div>
      </div>
    </section>
    
    <!-- 多行文本 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold mb-4">多行文本</h2>
      <div class="grid grid-cols-1 gap-6">
        <TextInput
          v-model="multiline"
          id="multiline"
          multiline
          label="备注"
          placeholder="请输入备注信息"
          :rows="4"
        />
      </div>
    </section>

    <!-- 表单验证 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold mb-4">表单验证</h2>
      <div class="grid grid-cols-1 gap-6 max-w-md">
        <TextInput
          v-model="form.email"
          id="form-email"
          type="email"
          label="邮箱"
          placeholder="请输入邮箱地址"
          :error="formErrors.email"
        >
          <template #suffix>
            <svg
              v-if="isValidEmail"
              class="size-5 text-green-500 animate__animated animate__bounceIn"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M5 13l4 4L19 7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </template>
        </TextInput>
        
        <TextInput
          v-model="form.password"
          id="form-password"
          type="password"
          label="密码"
          placeholder="请输入密码（至少8位）"
          :error="formErrors.password"
        />
        
        <TextInput
          v-model="form.confirmPassword"
          id="form-confirm-password"
          type="password"
          label="确认密码"
          placeholder="请再次输入密码"
          :error="formErrors.confirmPassword"
        />
        
        <div class="flex justify-end">
          <button 
            @click="validateForm"
            class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors active:scale-95 transform duration-200"
          >
            提交表单
          </button>
        </div>
      </div>
    </section>

    <!-- 实时输入反馈 -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold mb-4">实时输入反馈</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <TextInput
            v-model="liveInput"
            id="live-input"
            label="实时输入"
            placeholder="输入内容查看实时反馈"
            color="emerald"
          />
          <div class="mt-3 bg-gray-50 rounded-lg p-4 h-36 overflow-auto transition-all duration-300">
            <div v-if="liveInput.length > 0" class="animate__animated animate__fadeIn">
              <div class="text-sm text-gray-500 mb-2">实时输入内容：</div>
              <div class="text-emerald-600 font-medium">{{ liveInput }}</div>
              <div class="text-xs text-gray-400 mt-3">
                字符数：<span class="text-emerald-500 font-medium">{{ liveInput.length }}</span>
              </div>
              <div class="text-xs text-gray-400">
                单词数：<span class="text-emerald-500 font-medium">{{ countWords(liveInput) }}</span>
              </div>
            </div>
            <div v-else class="h-full flex items-center justify-center text-gray-400 text-sm italic">
              等待输入...
            </div>
          </div>
        </div>

        <div>
          <TextInput
            v-model="colorPickerInput"
            id="color-picker-input"
            label="颜色代码"
            placeholder="输入HEX颜色代码 (例如: #3366ff)"
          />
          <div 
            class="mt-3 h-36 rounded-lg border border-gray-200 transition-all duration-500" 
            :style="{ backgroundColor: isValidColor(colorPickerInput) ? colorPickerInput : '#ffffff' }"
          >
            <div class="h-full flex items-center justify-center">
              <span class="px-3 py-1 bg-white bg-opacity-70 rounded text-sm shadow-sm">
                {{ isValidColor(colorPickerInput) ? colorPickerInput : '无效的颜色代码' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { TextInput } from '../../components/TextInput'

// 基础用法
const basic = ref('')
const password = ref('')
const number = ref('')

// 不同尺寸
const sizes = ref({
  sm: '',
  md: '',
  lg: ''
})

// 主题颜色
const colors = ref({
  blue: '',
  emerald: '',
  purple: '',
  rose: '',
  amber: '',
  teal: ''
})

// 带图标
const icons = ref({
  search: '',
  link: '',
  both: ''
})

// 状态展示
const states = ref({
  disabled: '禁用状态输入框',
  error: '',
  description: '',
  required: ''
})

const showRequiredError = ref(false)
const toggleRequiredError = () => {
  showRequiredError.value = !showRequiredError.value
}

// 动画输入演示
const animatedInput = ref('')

// 多行文本
const multiline = ref('')

// 表单验证
const form = ref({
  email: '',
  password: '',
  confirmPassword: ''
})

const formErrors = ref({
  email: '',
  password: '',
  confirmPassword: ''
})

// 校验邮箱格式
const isValidEmail = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return form.value.email.length > 0 && emailRegex.test(form.value.email)
})

// 表单验证方法
const validateForm = () => {
  // 重置错误
  formErrors.value = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  let hasError = false

  // 验证邮箱
  if (!form.value.email) {
    formErrors.value.email = '请输入邮箱地址'
    hasError = true
  } else if (!isValidEmail.value) {
    formErrors.value.email = '请输入有效的邮箱地址'
    hasError = true
  }

  // 验证密码
  if (!form.value.password) {
    formErrors.value.password = '请输入密码'
    hasError = true
  } else if (form.value.password.length < 8) {
    formErrors.value.password = '密码长度不能少于8位'
    hasError = true
  }

  // 验证确认密码
  if (!form.value.confirmPassword) {
    formErrors.value.confirmPassword = '请再次输入密码'
    hasError = true
  } else if (form.value.confirmPassword !== form.value.password) {
    formErrors.value.confirmPassword = '两次输入的密码不一致'
    hasError = true
  }

  // 如果表单验证通过
  if (!hasError) {
    alert('表单验证通过！模拟提交成功')
    // 清空表单
    form.value = {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
}

// 实时输入反馈
const liveInput = ref('')
const colorPickerInput = ref('')

// 计算单词数
const countWords = (text: string) => {
  return text.trim().split(/\s+/).filter(word => word.length > 0).length
}

// 验证颜色代码
const isValidColor = (color: string) => {
  const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  return color && hexColorRegex.test(color)
}
</script>

<style>
.animate__animated {
  animation-duration: 0.5s;
}

.animate__fadeInUp {
  animation-name: fadeInUp;
}

.animate__fadeIn {
  animation-name: fadeIn;
}

.animate__bounceIn {
  animation-name: bounceIn;
  animation-duration: 0.75s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes bounceIn {
  from, 20%, 40%, 60%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }
  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }
  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}

/* 添加淡入淡出过渡效果 */
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>