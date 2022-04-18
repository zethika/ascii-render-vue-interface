<script setup lang="ts">
import Renderer from "@/components/Renderer.vue";
import Controls from "@/components/structural/Controls.vue";
</script>

<template>
    <div class="flex flex-col h-screen w-screen">
        <Renderer class="flex-grow"/>
        <Controls />
    </div>
</template>

<style>

</style>
