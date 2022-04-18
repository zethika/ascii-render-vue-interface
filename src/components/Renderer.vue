<script setup lang="ts">
import {useControlsStore} from "@/stores/controls";
import ImageRenderer from "@/components/renderers/ImageRenderer.vue";
import CenteredElement from "@/components/structural/CenteredElement.vue";

const controlStore = useControlsStore();
</script>

<template>
    <CenteredElement v-if="controlStore.file === null" class="h-full"><p >Select a source to the right</p></CenteredElement>
    <ImageRenderer v-else-if="controlStore.file.type.indexOf('image/') !== -1" />
    <CenteredElement v-else class="h-full"><p >No renderer found for file type "{{controlStore.file.type}}"</p></CenteredElement>
</template>
