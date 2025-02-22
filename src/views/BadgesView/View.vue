<template>
    <div class="p-8">
        <DemoBlock title="基础用法" description="Badge 支持多种颜色方案">
            <template #default>
                <div class="flex flex-wrap gap-2">
                    <Badge v-for="color in colors" :key="color" :text="color" :color="color" />
                </div>
            </template>
            <template #code>{{ `
                <Badge v-for="color in colors" :key="color" :text="color" :color="color" />

                const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo',
                'purple', 'gray']; ` }}
            </template>
        </DemoBlock>

        <DemoBlock title="变体样式" description="支持 solid、soft 和 outline 三种变体">
            <template #default>
                <div class="space-y-4">
                    <div v-for="variant in variants" :key="variant" class="flex flex-wrap gap-2">
                        <Badge v-for="color in colors" :key="color" :text="color" :color="color" :variant="variant" />
                    </div>
                </div>
            </template>
            <template #code>{{ `
                <Badge v-for="color in colors" :key="color" :text="color" :color="color" :variant="variant" />

                const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo',
                'purple', 'gray']; const variants = ['soft', 'solid', 'outline']; ` }}
            </template>
        </DemoBlock>

        <DemoBlock title="尺寸" description="支持 sm、md 和 lg 三种尺寸">
            <template #default>
                <div class="flex flex-wrap items-center gap-2">
                    <Badge v-for="size in sizes" :key="size" :text="size" :size="size" />
                </div>
            </template>
            <template #code>{{ `
                <Badge v-for="size in sizes" :key="size" :text="size" :size="size" />

                const sizes = ['sm', 'md', 'lg']; ` }}
            </template>
        </DemoBlock>

        <DemoBlock title="圆角" description="支持不同程度的圆角">
            <template #default>
                <div class="flex flex-wrap gap-2">
                    <Badge v-for="rounded in roundedTypes" :key="rounded" :text="rounded" :rounded="rounded" />
                </div>
            </template>
            <template #code>{{ `
                <Badge v-for="rounded in roundedTypes" :key="rounded" :text="rounded" :rounded="rounded" />

                const roundedTypes = ['sm', 'md', 'lg', 'full']; ` }}
            </template>
        </DemoBlock>

        <DemoBlock title="可点击" description="添加点击交互">
            <template #default>
                <div class="flex gap-2">
                    <Badge text="可点击的徽章" clickable @click="handleBadgeClick" />
                </div>
            </template>
            <template #code>{{ `
                <Badge text="可点击的徽章" clickable @click="handleBadgeClick" />
                ` }}
            </template>
        </DemoBlock>

        <DemoBlock title="带图标" description="支持前缀和后缀插槽">
            <template #default>
                <div class="flex gap-2">
                    <Badge text="带图标">
                        <template #prefix>
                            <div class="icon-[solar--star-bold] mr-1 h-4 w-4" />
                        </template>
                    </Badge>
                    <Badge text="带图标" variant="solid">
                        <template #suffix>
                            <div class="icon-[solar--star-bold] ml-1 h-4 w-4" />
                        </template>
                    </Badge>
                </div>
            </template>
            <template #code>{{ `
                <Badge text="带图标">
                    <template #prefix>
                        <div class="icon-[solar--star-bold] mr-1 h-4 w-4" />
                    </template>
                </Badge>
                <Badge text="带图标" variant="solid">
                    <template #suffix>
                        <div class="icon-[solar--star-bold] ml-1 h-4 w-4" />
                    </template>
                </Badge>
                ` }}
            </template>
        </DemoBlock>
    </div>
</template>

<script setup lang="ts">
import { Badge } from "../../components/Badges";
import { DemoBlock } from "../../components/DemoBlock";

const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "gray",
];
const variants = ["soft", "solid", "outline"];
const sizes = ["sm", "md", "lg"];
const roundedTypes = ["sm", "md", "lg", "full"];

const handleBadgeClick = (text: string) => {
    alert(`点击了: ${text}`);
};
</script>

<style scoped></style>
