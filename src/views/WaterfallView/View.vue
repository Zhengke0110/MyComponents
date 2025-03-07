<template>
  <div class="max-w-[1200px] mx-auto p-5">
    <h1 class="text-2xl font-bold mb-6">瀑布流组件示例</h1>
    
    <!-- 基本用法示例 -->
    <section class="mb-[120px] relative pb-10 border-b border-dashed border-gray-200">
      <h2 class="text-xl font-semibold mb-4">基本用法</h2>
      <div class="flex items-center mb-4">
        <span class="mr-2">列数：</span>
        <button 
          v-for="col in [2, 3, 4]" 
          :key="col"
          @click="basicColumn = col"
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2 transition-colors"
          :class="{ 'bg-gray-800': basicColumn === col }"
        >
          {{ col }}列
        </button>
      </div>
      
      <div class="relative min-h-[750px] border border-gray-100 p-[1px] mb-5">
        <Waterfall
          :data="basicItems"
          nodeKey="id"
          :column="basicColumn"
          :columnSpacing="16"
          :rowSpacing="16"
        >
          <template #default="{ item, width }">
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <img :src="item.image" :alt="item.title" class="w-full block" />
              <div class="p-4">
                <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
                <p class="text-sm text-gray-600 leading-relaxed">{{ item.description }}</p>
              </div>
            </div>
          </template>
        </Waterfall>
      </div>
    </section>
    
    <!-- 图片预加载示例 -->
    <section class="mb-[120px] relative pb-10 border-b border-dashed border-gray-200">
      <h2 class="text-xl font-semibold mb-4">图片预加载</h2>
      <div class="flex gap-4 mb-4">
        <button @click="togglePreReading" 
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
          {{ preReading ? '关闭' : '开启' }}图片预加载
        </button>
        <button @click="resetPreReading" 
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
          重置布局
        </button>
      </div>
      
      <div class="relative min-h-[650px] border border-gray-100 p-[1px] mb-5">
        <Waterfall
          ref="preReadingWaterfall"
          :data="imageItems"
          nodeKey="id"
          :column="3"
          :picturePreReading="preReading"
        >
          <template #default="{ item, width }">
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div :style="`height: ${item.height}px;`">
                <img :src="item.image" :alt="item.title" class="w-full block" />
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold">{{ item.title }}</h3>
              </div>
            </div>
          </template>
        </Waterfall>
      </div>
    </section>
    
    <!-- 动态加载示例 -->
    <section class="mb-[120px] relative pb-10 border-b border-dashed border-gray-200">
      <h2 class="text-xl font-semibold mb-4">动态加载数据</h2>
      <div class="flex gap-4 mb-4">
        <button @click="loadMoreItems" 
          class="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded transition-colors"
          :disabled="loading">
          {{ loading ? '加载中...' : '加载更多' }}
        </button>
        <div v-if="page > 1" class="text-sm text-gray-500 self-center">
          已加载 {{ dynamicItems.length }} 项数据
        </div>
      </div>
      
      <div class="relative min-h-[800px] border border-gray-100 p-[1px] mb-5">
        <Waterfall
          ref="dynamicWaterfall"
          :data="dynamicItems"
          nodeKey="id"
          :column="3"
        >
          <template #default="{ item, width, index }">
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div class="relative">
                <img :src="item.image" :alt="item.title" class="w-full block" />
                <div class="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-xs">
                  #{{ index + 1 }}
                </div>
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
                <p class="text-sm text-gray-600 leading-relaxed">{{ item.description }}</p>
                <div class="flex justify-between text-xs text-gray-500 mt-3">
                  <span>{{ item.date }}</span>
                  <span>{{ item.views }} 浏览</span>
                </div>
              </div>
            </div>
          </template>
        </Waterfall>
      </div>
    </section>
    
    <!-- 自定义样式示例 -->
    <section class="mb-[60px] relative pb-10">
      <h2 class="text-xl font-semibold mb-4">自定义样式</h2>
      
      <div class="relative min-h-[700px] border border-gray-100 p-[1px] mb-5">
        <Waterfall
          :data="styledItems"
          nodeKey="id"
          :column="2"
        >
          <template #default="{ item, width }">
            <div :class="[
              'rounded-lg overflow-hidden p-5 shadow-md transition-all duration-300',
              item.theme === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-700' : '',
              item.theme === 'green' ? 'bg-gradient-to-br from-green-500 to-green-700' : '',
              item.theme === 'orange' ? 'bg-gradient-to-br from-orange-500 to-orange-700' : '',
              item.theme === 'purple' ? 'bg-gradient-to-br from-purple-500 to-purple-700' : '',
              'text-white'
            ]">
              <div class="mb-4 border-b border-white/20 pb-2.5">
                <h3 class="text-xl font-bold">{{ item.title }}</h3>
              </div>
              <div class="mb-4 leading-relaxed">
                <p>{{ item.content }}</p>
              </div>
              <div class="flex justify-between items-center mt-5">
                <div class="flex items-center">
                  <img :src="item.avatar" alt="avatar" class="w-[30px] h-[30px] rounded-full mr-2 border-2 border-white/60" />
                  <span>{{ item.author }}</span>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  <span v-for="(tag, i) in item.tags" :key="i" class="bg-white/20 px-2 py-1 rounded text-xs">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </template>
        </Waterfall>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Waterfall from '../../components/Waterfall/index';

// 基本用法示例数据
const basicColumn = ref(3);
const basicItems = ref([
  { 
    id: 1, 
    title: '瀑布流示例图片1',
    description: '这是一张示例图片的描述内容，展示瀑布流的基本布局效果。',
    image: 'https://picsum.photos/400/200?random=1'
  },
  { 
    id: 2, 
    title: '瀑布流示例图片2',
    description: '不同高度的卡片会自动排列，形成紧凑的视觉效果。',
    image: 'https://picsum.photos/400/300?random=2'
  },
  { 
    id: 3, 
    title: '瀑布流示例图片3',
    description: '瀑布流布局特别适合展示图片、商品或卡片内容。',
    image: 'https://picsum.photos/400/250?random=3'
  },
  { 
    id: 4, 
    title: '瀑布流示例图片4',
    description: '用户可以持续浏览内容，非常适合展示大量信息。',
    image: 'https://picsum.photos/400/280?random=4'
  },
  { 
    id: 5, 
    title: '瀑布流示例图片5',
    description: '可以根据屏幕大小动态调整列数，实现响应式布局。',
    image: 'https://picsum.photos/400/220?random=5'
  },
  { 
    id: 6, 
    title: '瀑布流示例图片6',
    description: '图片加载完成后会重新计算布局，确保排列整齐。',
    image: 'https://picsum.photos/400/320?random=6'
  },
]);

// 图片预加载示例
const preReadingWaterfall = ref<any>(null);
const preReading = ref(true);
const imageItems = ref([
  { id: 101, title: '图片1', height: 200, image: 'https://picsum.photos/400/200?random=101' },
  { id: 102, title: '图片2', height: 300, image: 'https://picsum.photos/400/300?random=102' },
  { id: 103, title: '图片3', height: 250, image: 'https://picsum.photos/400/250?random=103' },
  { id: 104, title: '图片4', height: 180, image: 'https://picsum.photos/400/180?random=104' },
  { id: 105, title: '图片5', height: 220, image: 'https://picsum.photos/400/220?random=105' },
  { id: 106, title: '图片6', height: 280, image: 'https://picsum.photos/400/280?random=106' },
]);

const togglePreReading = () => {
  preReading.value = !preReading.value;
};

const resetPreReading = () => {
  if (preReadingWaterfall.value) {
    preReadingWaterfall.value.reset();
  }
};

// 动态加载示例
const dynamicWaterfall = ref(null);
const dynamicItems = ref<{ id: number; title: string; description: string; image: string; date: string; views: number; }[]>([]);
const page = ref(0);
const loading = ref(false);

const generateItems = (pageNum: number, count: number) => {
  const items = [];
  const baseId = (pageNum - 1) * count + 201;
  
  for (let i = 0; i < count; i++) {
    const id = baseId + i;
    items.push({
      id,
      title: `动态加载项目 ${id - 200}`,
      description: `这是第${pageNum}页加载的内容，展示动态加载数据的能力。`,
      image: `https://picsum.photos/400/${200 + Math.floor(Math.random() * 150)}?random=${id}`,
      date: `2023-${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 28) + 1}`,
      views: Math.floor(Math.random() * 1000) + 100
    });
  }
  
  return items;
};

const loadMoreItems = async () => {
  if (loading.value) return;
  
  loading.value = true;
  
  // 模拟异步请求
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  page.value += 1;
  const newItems = generateItems(page.value, 6);
  dynamicItems.value = [...dynamicItems.value, ...newItems];
  
  loading.value = false;
};

// 自定义样式示例
const styledItems = ref([
  {
    id: 301,
    title: '卡片标题1',
    content: '这是一张自定义样式的卡片，采用了蓝色主题设计。瀑布流组件支持完全自定义卡片样式。',
    author: '张三',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    tags: ['设计', '前端'],
    theme: 'blue'
  },
  {
    id: 302,
    title: '卡片标题2',
    content: '这是一张较长内容的卡片示例，展示了不同高度的卡片如何在瀑布流中排列。自定义样式可以让您的应用更具个性化。',
    author: '李四',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    tags: ['开发', 'Vue', 'UI'],
    theme: 'green'
  },
  {
    id: 303,
    title: '卡片标题3',
    content: '瀑布流布局非常适合展示各种长度不一的内容。',
    author: '王五',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    tags: ['短文'],
    theme: 'orange'
  },
  {
    id: 304,
    title: '卡片标题4',
    content: '您可以为每个卡片应用不同的主题色彩，创造丰富的视觉体验。在此示例中，我们展示了如何通过自定义CSS类来实现不同的卡片样式。',
    author: '赵六',
    avatar: 'https://randomuser.me/api/portraits/women/24.jpg',
    tags: ['设计', '创意', '色彩'],
    theme: 'purple'
  }
]);

// 初始化加载动态数据
onMounted(() => {
  loadMoreItems();
});
</script>

<style scoped>
</style>