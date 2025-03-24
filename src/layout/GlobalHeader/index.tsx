import { defineComponent, ref, computed, onMounted, onUnmounted, watch, Transition } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import {
    isDark,
    toggleDark,
    preferredDark,
    themeMode,
    useSystemTheme,
    setLightTheme,
    setDarkTheme
} from '../../utils/theme';

export default defineComponent({
    name: 'GlobalHeader',
    props: {
        showFullToggle: {
            type: Boolean,
            default: true
        }
    },
    setup(props) {
        const route = useRoute();
        const isMenuOpen = ref(false);
        const scrollY = ref(0);
        const lastScrollY = ref(0);
        const scrollDirection = ref<'up' | 'down' | null>(null);
        const isHeaderVisible = ref(true);
        const headerRef = ref<HTMLElement | null>(null);
        const mousePosition = ref({ x: 0, y: 0 });
        const isHovering = ref(false);
        const logoHovered = ref(false);

        // 生成装饰粒子
        const particles = ref(Array.from({ length: 8 }, () => ({
            x: Math.random() * 100,
            y: Math.random() * 60,
            size: 2 + Math.random() * 4,
            opacity: 0.1 + Math.random() * 0.3,
            speed: 0.2 + Math.random() * 0.8
        })));

        // 当前主题模式名称
        const currentThemeModeName = computed(() => {
            switch (themeMode.value) {
                case 'light': return '亮色';
                case 'dark': return '暗色';
                case 'system': return '跟随系统';
                default: return '未知';
            }
        });

        // 跟踪鼠标位置以实现光晕效果
        const trackMouse = (e: MouseEvent) => {
            if (headerRef.value) {
                const rect = headerRef.value.getBoundingClientRect();
                mousePosition.value = {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                };
            }
        };

        // 处理滚动事件，控制Header显示/隐藏
        const handleScroll = () => {
            scrollY.value = window.scrollY;

            // 确定滚动方向
            if (scrollY.value > lastScrollY.value) {
                scrollDirection.value = 'down';
            } else if (scrollY.value < lastScrollY.value) {
                scrollDirection.value = 'up';
            }

            // 根据滚动方向和位置决定Header是否显示
            // 顶部始终显示，向上滚动时显示，向下滚动超过100px开始隐藏
            if (scrollY.value <= 10 || scrollDirection.value === 'up') {
                isHeaderVisible.value = true;
            } else if (scrollDirection.value === 'down' && scrollY.value > 100) {
                isHeaderVisible.value = false;
                // 关闭菜单，如果打开的话
                if (isMenuOpen.value) {
                    isMenuOpen.value = false;
                }
            }

            lastScrollY.value = scrollY.value;
        };

        const toggleMenu = () => {
            isMenuOpen.value = !isMenuOpen.value;
        };

        // 计算背景模糊度和透明度 - 根据滚动位置动态变化
        const headerStyle = computed(() => {
            const baseOpacity = 0.8;
            const scrollOpacity = Math.min(scrollY.value / 200, 0.18);
            const blurValue = 8 + Math.min(scrollY.value / 100, 8);

            return {
                backdropFilter: `blur(${blurValue}px)`,
                background: isDark.value
                    ? `rgba(15, 23, 42, ${baseOpacity + scrollOpacity})`
                    : `rgba(255, 255, 255, ${baseOpacity + scrollOpacity})`,
                transform: `translateY(${isHeaderVisible.value ? '0' : '-100%'})`,
                boxShadow: scrollY.value > 20 ? (
                    isDark.value
                        ? '0 10px 25px -5px rgba(0, 0, 0, 0.2)'
                        : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                ) : 'none'
            };
        });

        // 监听路由变化关闭菜单
        watch(() => route.path, () => {
            if (isMenuOpen.value) {
                isMenuOpen.value = false;
            }
        });

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // 初始化滚动状态
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return () => (
            <header
                ref={headerRef}
                class="fixed top-0 left-0 z-50 w-full transition-all duration-300"
                style={headerStyle.value}
                onMousemove={trackMouse}
                onMouseenter={() => isHovering.value = true}
                onMouseleave={() => isHovering.value = false}
            >
                {/* 顶部装饰边条 - 渐变效果 */}
                <div class="absolute top-0 left-0 h-[2px] w-full overflow-hidden">
                    <div class="h-full w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                </div>

                {/* 装饰元素 - 发光粒子 */}
                <div class="absolute inset-0 overflow-hidden">
                    {/* 随滚动变化的粒子 */}
                    {particles.value.map((particle, idx) => (
                        <div
                            key={idx}
                            class="absolute rounded-full bg-white dark:bg-blue-400"
                            style={{
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                                left: `${particle.x}%`,
                                top: `${particle.y}px`,
                                opacity: particle.opacity * (isHovering.value ? 1.5 : 1),
                                transform: `translateY(${scrollY.value * particle.speed * 0.05}px)`,
                                transition: 'opacity 0.5s ease'
                            }}
                        ></div>
                    ))}

                    {/* 动态模糊光晕效果 - 跟随鼠标 */}
                    <div
                        class="pointer-events-none absolute opacity-50 transition-opacity duration-500"
                        style={{
                            background: `radial-gradient(600px circle at ${mousePosition.value.x}px ${mousePosition.value.y}px, ${isDark.value ? 'rgba(56, 189, 248, 0.05)' : 'rgba(56, 189, 248, 0.1)'}, transparent 40%)`,
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            opacity: isHovering.value ? 1 : 0
                        }}
                    ></div>
                </div>

                {/* 主容器 */}
                <div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex h-16 items-center justify-between">
                        {/* Logo区域 - 创新样式 */}
                        <div class="flex items-center">
                            <div
                                class="group relative px-1"
                                onMouseenter={() => { logoHovered.value = true }}
                                onMouseleave={() => { logoHovered.value = false }}
                            >
                                <div class={[
                                    'absolute -inset-3 rounded-xl transition-all duration-300',
                                    logoHovered.value ? 'bg-blue-50/50 dark:bg-blue-900/20' : 'bg-transparent'
                                ]}></div>

                                <RouterLink to="/" class="relative flex items-center">
                                    <span class={[
                                        'mr-1 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 transition-all duration-300',
                                        logoHovered.value ? 'transform scale-110' : ''
                                    ]}>UI</span>
                                    <span class="text-xl font-semibold text-gray-900 dark:text-white">组件库</span>

                                    {/* 动态装饰点 */}
                                    <span class={[
                                        'absolute -right-2.5 -top-1 h-2 w-2 rounded-full bg-blue-500 transition-all duration-300',
                                        logoHovered.value ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                                    ]}></span>
                                </RouterLink>
                            </div>

                            {/* 导航链接 - 优雅下划线效果 */}
                            <nav class="hidden md:ml-8 md:flex md:space-x-6">
                                <RouterLink
                                    to="/"
                                    class={({ isActive }: { isActive: boolean }) => [
                                        'relative px-3 py-2 text-sm font-medium transition-all duration-200',
                                        'hover:text-blue-600 dark:hover:text-blue-400',
                                        isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                                    ].join(' ')}
                                >
                                    {/* 优雅下划线动画 */}
                                    <span class={[
                                        'absolute bottom-0 left-0 h-0.5 w-full origin-left transform scale-x-0 rounded-full bg-blue-600 transition-transform duration-300 dark:bg-blue-400',
                                        ({ isActive }: { isActive: boolean }) => isActive ? 'scale-x-100' : ''
                                    ].join(' ')}></span>
                                    首页
                                </RouterLink>

                                <RouterLink
                                    to="/guide"
                                    class={({ isActive }: { isActive: boolean }) => [
                                        'relative px-3 py-2 text-sm font-medium transition-all duration-200',
                                        'hover:text-blue-600 dark:hover:text-blue-400',
                                        isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                                    ].join(' ')}
                                >
                                    <span class={[
                                        'absolute bottom-0 left-0 h-0.5 w-full origin-left transform scale-x-0 rounded-full bg-blue-600 transition-transform duration-300 dark:bg-blue-400',
                                        ({ isActive }: { isActive: boolean }) => isActive ? 'scale-x-100' : ''
                                    ].join(' ')}></span>
                                    指南
                                </RouterLink>
                            </nav>
                        </div>

                        {/* 右侧工具栏 */}
                        <div class="flex items-center gap-2">
                            {/* 主题切换按钮 - 创新动画效果 */}
                            <div class="hidden md:flex md:items-center md:space-x-3">
                                <button
                                    onClick={toggleDark}
                                    class="group relative flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-gray-100/70 dark:hover:bg-gray-800/70"
                                >
                                    <span class="absolute -inset-0.5 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
                                        background: isDark.value
                                            ? "linear-gradient(rgba(30, 41, 59, 0), rgba(30, 41, 59, 0) 5px, rgba(30, 41, 59, 0.03))"
                                            : "linear-gradient(rgba(219, 234, 254, 0), rgba(219, 234, 254, 0) 5px, rgba(219, 234, 254, 0.4))"
                                    }}></span>

                                    <Transition
                                        enterActiveClass="transition-all duration-300 transform"
                                        enterFromClass="opacity-0 rotate-90 scale-50"
                                        enterToClass="opacity-100 rotate-0 scale-100"
                                        leaveActiveClass="transition-all duration-300 transform"
                                        leaveFromClass="opacity-100 rotate-0 scale-100"
                                        leaveToClass="opacity-0 -rotate-90 scale-50"
                                        mode="out-in"
                                    >
                                        {isDark.value ? (
                                            <span key="sun" class="icon-[material-symbols--wb-sunny-outline-rounded] h-5 w-5 text-amber-500"></span>
                                        ) : (
                                            <span key="moon" class="icon-[material-symbols--dark-mode-outline-rounded] h-5 w-5 text-blue-600 dark:text-blue-400"></span>
                                        )}
                                    </Transition>
                                </button>

                                {/* 主题模式文本 */}
                                <span class="hidden text-sm font-medium text-gray-600 dark:text-gray-300 lg:block">
                                    {currentThemeModeName.value}模式
                                </span>

                                {/* GitHub链接 */}
                                <a
                                    href="https://github.com/Zhengke0110"
                                    target="_blank"
                                    class="group relative flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-gray-100/70 dark:hover:bg-gray-800/70"
                                >
                                    <span class="icon-[mdi--github] h-5 w-5 text-gray-600 transition-transform duration-300 group-hover:scale-110 dark:text-gray-400"></span>
                                </a>

                                {/* 全功能主题控制 */}
                                {props.showFullToggle && (
                                    <div class="ml-2 hidden lg:flex lg:space-x-2">
                                        <button
                                            onClick={setLightTheme}
                                            class={[
                                                'flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-all',
                                                themeMode.value === 'light'
                                                    ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-700/20 dark:bg-blue-900/20 dark:text-blue-400 dark:ring-blue-400/20'
                                                    : 'text-gray-600 hover:bg-gray-100/70 dark:text-gray-400 dark:hover:bg-gray-800/70'
                                            ]}
                                        >
                                            <span class="icon-[material-symbols--light-mode-outline-rounded] h-4 w-4"></span>
                                            亮色
                                        </button>

                                        <button
                                            onClick={useSystemTheme}
                                            class={[
                                                'flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-all',
                                                themeMode.value === 'system'
                                                    ? 'bg-gray-100 text-gray-800 ring-1 ring-gray-900/10 dark:bg-gray-800 dark:text-gray-200 dark:ring-gray-200/10'
                                                    : 'text-gray-600 hover:bg-gray-100/70 dark:text-gray-400 dark:hover:bg-gray-800/70'
                                            ]}
                                        >
                                            <span class="icon-[material-symbols--computer-outline-rounded] h-4 w-4"></span>
                                            系统
                                        </button>

                                        <button
                                            onClick={setDarkTheme}
                                            class={[
                                                'flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-all',
                                                themeMode.value === 'dark'
                                                    ? 'bg-indigo-50 text-indigo-700 ring-1 ring-indigo-700/20 dark:bg-indigo-900/20 dark:text-indigo-400 dark:ring-indigo-400/20'
                                                    : 'text-gray-600 hover:bg-gray-100/70 dark:text-gray-400 dark:hover:bg-gray-800/70'
                                            ]}
                                        >
                                            <span class="icon-[material-symbols--dark-mode-outline-rounded] h-4 w-4"></span>
                                            暗色
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* 移动版主题切换按钮 */}
                            <button
                                onClick={toggleDark}
                                class="md:hidden flex h-9 w-9 items-center justify-center rounded-full"
                            >
                                {isDark.value ? (
                                    <span class="icon-[material-symbols--wb-sunny-outline-rounded] h-5 w-5 text-amber-500"></span>
                                ) : (
                                    <span class="icon-[material-symbols--dark-mode-outline-rounded] h-5 w-5 text-blue-600"></span>
                                )}
                            </button>

                            {/* 移动版菜单按钮 - 动画汉堡图标 */}
                            <button
                                onClick={toggleMenu}
                                class="md:hidden group relative flex h-10 w-10 items-center justify-center"
                            >
                                <div class="flex h-5 w-6 flex-col items-center justify-center space-y-1">
                                    <span class={[
                                        'h-0.5 w-6 rounded-full bg-gray-600 transition-all duration-300 dark:bg-gray-300',
                                        isMenuOpen.value ? 'translate-y-[4px] rotate-45' : ''
                                    ]}></span>
                                    <span class={[
                                        'h-0.5 rounded-full bg-gray-600 transition-all duration-300 dark:bg-gray-300',
                                        isMenuOpen.value ? 'w-0 opacity-0' : 'w-6 opacity-100'
                                    ]}></span>
                                    <span class={[
                                        'h-0.5 w-6 rounded-full bg-gray-600 transition-all duration-300 dark:bg-gray-300',
                                        isMenuOpen.value ? 'translate-y-[-4px] -rotate-45' : ''
                                    ]}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* 移动版下拉菜单 */}
                <Transition
                    enterActiveClass="transition-all ease-out duration-300"
                    enterFromClass="opacity-0 max-h-0"
                    enterToClass="opacity-100 max-h-[500px]"
                    leaveActiveClass="transition-all ease-in duration-200"
                    leaveFromClass="opacity-100 max-h-[500px]"
                    leaveToClass="opacity-0 max-h-0"
                >
                    {isMenuOpen.value && (
                        <div class="md:hidden overflow-hidden border-t border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-700 dark:bg-gray-800/90">
                            <nav class="space-y-1 px-4 py-3">
                                <RouterLink
                                    to="/"
                                    class={({ isActive }: { isActive: boolean }) => [
                                        'block rounded-lg px-3 py-2 font-medium transition-colors',
                                        isActive
                                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                                            : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/30'
                                    ].join(' ')}
                                >
                                    首页
                                </RouterLink>

                                <RouterLink
                                    to="/guide"
                                    class={({ isActive }: { isActive: boolean }) => [
                                        'block rounded-lg px-3 py-2 font-medium transition-colors',
                                        isActive
                                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                                            : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/30'
                                    ].join(' ')}
                                >
                                    指南
                                </RouterLink>
                            </nav>

                            {/* 主题设置 */}
                            <div class="border-t border-gray-200 px-4 py-4 dark:border-gray-700">
                                <h3 class="mb-3 px-3 text-sm font-medium text-gray-500 dark:text-gray-400">主题设置</h3>

                                <div class="grid grid-cols-3 gap-2">
                                    <button
                                        class={[
                                            "flex flex-col items-center justify-center rounded-lg p-3 transition-all",
                                            themeMode.value === 'light'
                                                ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                                                : "bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                                        ]}
                                        onClick={setLightTheme}
                                    >
                                        <span class="icon-[material-symbols--light-mode-rounded] h-5 w-5 mb-1"></span>
                                        <span class="text-xs font-medium">亮色</span>
                                    </button>

                                    <button
                                        class={[
                                            "flex flex-col items-center justify-center rounded-lg p-3 transition-all",
                                            themeMode.value === 'system'
                                                ? "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                                                : "bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                                        ]}
                                        onClick={useSystemTheme}
                                    >
                                        <span class="icon-[material-symbols--computer-rounded] h-5 w-5 mb-1"></span>
                                        <span class="text-xs font-medium">系统</span>
                                    </button>

                                    <button
                                        class={[
                                            "flex flex-col items-center justify-center rounded-lg p-3 transition-all",
                                            themeMode.value === 'dark'
                                                ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-400"
                                                : "bg-gray-50 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                                        ]}
                                        onClick={setDarkTheme}
                                    >
                                        <span class="icon-[material-symbols--dark-mode-rounded] h-5 w-5 mb-1"></span>
                                        <span class="text-xs font-medium">暗色</span>
                                    </button>
                                </div>

                                <div class="mt-3 flex items-center justify-between px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800/60">
                                    <span class="text-sm text-gray-600 dark:text-gray-400">系统偏好:</span>
                                    <span class="text-xs font-medium rounded-full bg-gray-100 px-2 py-0.5 dark:bg-gray-700 dark:text-white">
                                        {preferredDark.value ? '暗色' : '亮色'}
                                    </span>
                                </div>
                            </div>

                            {/* 底部链接 */}
                            <div class="border-t border-gray-200 px-4 py-3 dark:border-gray-700">
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    class="flex items-center rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/30"
                                >
                                    <span class="icon-[mdi--github] mr-3 h-5 w-5"></span>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    )}
                </Transition>
            </header>
        );
    }
});
