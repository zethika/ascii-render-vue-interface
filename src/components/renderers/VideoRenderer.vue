<script setup lang="ts">
import {useMediaCanvas} from "@/composables/mediaCanvas";
import AsciiRenderer from "@/components/renderers/AsciiRenderer.vue";
import {useControlsStore} from "@/stores/controls";
import {onBeforeUnmount, onMounted, ref, watch} from "vue";
import {RGBALiteral} from "@/index";
import PixelMediaCanvas from "@/classes/PixelMediaCanvas";

const controlStore = useControlsStore();
const {mediaCanvas} = useMediaCanvas();

const pixelArray = ref<Array<RGBALiteral>>([]);

function triggerChange()
{
    mediaCanvas.stopWebcam();
    mediaCanvas.width = controlStore.width;
    mediaCanvas.height = controlStore.height;

    mediaCanvas.startWebcam((video: HTMLVideoElement) => {
        const aspectRatio = video.videoWidth/video.videoHeight;

        controlStore.width = Math.floor(aspectRatio < 1 ? 100 : 100*aspectRatio);
        controlStore.height = Math.floor(aspectRatio > 1 ? 100 : 100*aspectRatio);

        mediaCanvas.width = controlStore.width;
        mediaCanvas.height = controlStore.height;
    }, (canvas: PixelMediaCanvas) => {
        pixelArray.value = mediaCanvas.calculatePixelsArray();
    })
}

onBeforeUnmount(() => {
    mediaCanvas.stopWebcam();
})

onMounted(() => triggerChange())
watch([() => controlStore.width,() => controlStore.height,() => controlStore.characters], () => triggerChange())

</script>

<template>
    <AsciiRenderer :pixel-array="pixelArray" :width="controlStore.width" />
</template>
