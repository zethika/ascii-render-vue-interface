<script setup lang="ts">
import {useMediaCanvas} from "@/composables/mediaCanvas";
import AsciiRenderer from "@/components/renderers/AsciiRenderer.vue";
import {useControlsStore} from "@/stores/controls";
import {nextTick, onBeforeUnmount, onMounted, ref, watch} from "vue";
import {RGBALiteral} from "@/index";
import PixelMediaCanvas from "@/classes/PixelMediaCanvas";

const controlStore = useControlsStore();
const {mediaCanvas} = useMediaCanvas();

const pixelArray = ref<Array<RGBALiteral>>([]);

let hasDefinedSize = false;
let sizeParam = 'width';
let isAutoChange = false;

function triggerChange()
{
    mediaCanvas.stopWebcam();
    mediaCanvas.width = controlStore.width;
    mediaCanvas.height = controlStore.height;

    mediaCanvas.startWebcam((video: HTMLVideoElement) => {
        const aspectRatio = video.videoWidth/video.videoHeight;
        if(hasDefinedSize)
        {
            if(sizeParam === 'width')
            {
                controlStore.height = controlStore.width/aspectRatio;
            }
            else
            {
                controlStore.width = controlStore.height * aspectRatio;
            }
        }
        else
        {

            const base = 100;
            isAutoChange = true;
            controlStore.width = Math.floor(aspectRatio < 1 ? base : base*aspectRatio);
            controlStore.height = Math.floor(aspectRatio > 1 ? base : base*aspectRatio);
            nextTick(() => {
                isAutoChange = false;
            })
        }




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

watch([() => controlStore.width,() => controlStore.height], ([newW,newH],[prevW,prevH]) => {
    if(!isAutoChange)
    {
        hasDefinedSize = true;
        sizeParam = newW !== prevW ? 'width' : 'height'
    }
});


</script>

<template>
    <AsciiRenderer :pixel-array="pixelArray" :width="controlStore.width" />
</template>
