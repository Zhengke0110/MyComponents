import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { 
  usePreferredDark, 
  useLocalStorage, 
  useEventListener,
  useMutationObserver,
  useMediaQuery
} from '@vueuse/core';

// 主题模式类型
export type ThemeMode = 'light' | 'dark' | 'system';

// 当前主题模式 - 使用useLocalStorage自动同步到本地存储
export const themeMode = useLocalStorage<ThemeMode>(
  'theme', 
  'system',
  { listenToStorageChanges: true }
);

// 系统是否偏好暗色模式
export const preferredDark = usePreferredDark();

// 媒体查询增强 - 检测系统颜色方案变化，增加可靠性
export const systemDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

// 是否处于暗色模式 (根据当前主题模式和系统偏好计算)
export const isDark = computed<boolean>(() => {
  switch (themeMode.value) {
    case 'dark':
      return true;
    case 'light':
      return false;
    default:
      return preferredDark.value;
  }
});

// 切换暗色/亮色模式 (不再直接修改isDark)
export function toggleDark(): void {
  themeMode.value = isDark.value ? 'light' : 'dark';
}

// 更新 HTML 类名
const updateHTMLClass = (): void => {
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.style.colorScheme = 'light';
  }
};

// 设置主题模式
export function setTheme(mode: ThemeMode): void {
  themeMode.value = mode;
}

// 使用系统偏好
export function useSystemTheme(): void {
  setTheme('system');
}

// 设置亮色模式
export function setLightTheme(): void {
  setTheme('light');
}

// 设置暗色模式
export function setDarkTheme(): void {
  setTheme('dark');
}

// 初始化主题 (通常在应用启动时调用)
export function initTheme(): void {
  updateHTMLClass();
  
  // 页面加载后移除初始化类，允许过渡效果生效
  window.setTimeout(() => {
    document.documentElement.classList.remove('theme-initializing');
    document.body.classList.remove('theme-initializing');
  }, 100);
}

// 监视主题变化，自动更新类名
watch([isDark, themeMode], () => {
  updateHTMLClass();
}, { immediate: true });

// 在每个组件中可以使用这些钩子来确保主题正确应用
export function useTheme() {
  onMounted(() => {
    updateHTMLClass();
    
    // 使用 MutationObserver 监听 class 变化
    // 这有助于在其他代码可能修改了 class 的情况下保持一致性
    const stopObserver = useMutationObserver(
      document.documentElement,
      (mutations) => {
        for (const mutation of mutations) {
          if (mutation.attributeName === 'class') {
            // 确保 dark 类与 isDark 状态保持一致
            const hasDarkClass = document.documentElement.classList.contains('dark');
            if (hasDarkClass !== isDark.value) {
              updateHTMLClass();
            }
          }
        }
      },
      { attributes: true }
    );
    
    onUnmounted(() => {
      stopObserver.stop();
    });
  });
  
  return {
    isDark,
    themeMode,
    preferredDark,
    systemDarkMode,
    toggleDark,
    setTheme,
    useSystemTheme,
    setLightTheme,
    setDarkTheme
  };
}

// 这个代码片段更新为包含theme-initializing类
export const themeScript = `
  (function() {
    try {
      document.documentElement.classList.add('theme-initializing');
      document.body.classList.add('theme-initializing');
      
      var theme = localStorage.getItem('theme');
      if (theme === 'dark' || (theme === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        document.documentElement.style.colorScheme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
      }
    } catch (e) {}
  })();
`;

// 导出默认对象，方便一次性导入所有功能
export default {
  isDark,
  themeMode,
  preferredDark,
  systemDarkMode,
  toggleDark,
  setTheme,
  useSystemTheme,
  setLightTheme,
  setDarkTheme,
  initTheme,
  useTheme,
  themeScript
};
