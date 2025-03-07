<template>
    <div class="p-6">
        <h2 class="text-2xl font-bold mb-6">Round Progress Component</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Basic usage -->
            <div class="p-4 border rounded-lg">
                <h3 class="text-lg font-semibold mb-3">Basic</h3>
                <div class="flex space-x-4">
                    <RoundProgress :progress="75" />
                    <RoundProgress :progress="45" />
                    <RoundProgress :progress="90" />
                </div>
            </div>
            
            <!-- Custom sizes -->
            <div class="p-4 border rounded-lg">
                <h3 class="text-lg font-semibold mb-3">Custom Sizes</h3>
                <div class="flex items-center space-x-4">
                    <RoundProgress :progress="60" :size="40" />
                    <RoundProgress :progress="60" :size="64" :stroke-width="5" />
                    <RoundProgress :progress="60" :size="80" :stroke-width="7" />
                </div>
            </div>
            
            <!-- Custom colors -->
            <div class="p-4 border rounded-lg">
                <h3 class="text-lg font-semibold mb-3">Custom Colors</h3>
                <div class="flex space-x-4">
                    <RoundProgress 
                        :progress="80" 
                        start-color="#10B981" 
                        end-color="#059669"
                    />
                    <RoundProgress 
                        :progress="80" 
                        start-color="#F59E0B" 
                        end-color="#D97706"
                    />
                    <RoundProgress 
                        :progress="80" 
                        start-color="#EF4444" 
                        end-color="#DC2626"
                    />
                </div>
            </div>

            <!-- With decoration -->
            <div class="p-4 border rounded-lg">
                <h3 class="text-lg font-semibold mb-3">With Decoration</h3>
                <div class="flex space-x-4">
                    <RoundProgress 
                        :progress="70" 
                        :show-decoration="true"
                        :size="64"
                    />
                    <RoundProgress 
                        :progress="70" 
                        :show-decoration="true"
                        :size="64"
                        start-color="#10B981" 
                        end-color="#059669"
                    />
                </div>
            </div>
            
            <!-- Custom content slot -->
            <div class="p-4 border rounded-lg">
                <h3 class="text-lg font-semibold mb-3">Custom Content</h3>
                <div class="flex space-x-4">
                    <RoundProgress :progress="88" :size="64">
                        <template #center="{ progress }">
                            <div class="text-center">
                                <div class="text-sm font-bold text-indigo-600">{{ progress }}</div>
                                <div class="text-[10px] text-indigo-400">Points</div>
                            </div>
                        </template>
                    </RoundProgress>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import RoundProgress from '../../components/RoundProgress';
</script>

<style scoped>

</style>