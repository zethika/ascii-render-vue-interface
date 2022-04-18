<script setup lang="ts">
import {useMediaCanvas} from "@/composables/mediaCanvas";
import AsciiRenderer from "@/components/renderers/AsciiRenderer.vue";
import {useControlsStore} from "@/stores/controls";
import { onMounted, ref, watch} from "vue";
import {RGBALiteral} from "@/index";

const controlStore = useControlsStore();
const {mediaCanvas} = useMediaCanvas();

const pixelArray = ref<Array<RGBALiteral>>([]);
const width = ref(0);

function updateFromFile()
{
    if(controlStore.file === null){
        pixelArray.value = [];
        width.value = 0;
        return;
    }

    mediaCanvas.width = controlStore.width;
    mediaCanvas.height = controlStore.height;
    mediaCanvas.loadImageFromFile(controlStore.file)
        .then(() => {
            if(mediaCanvas.pixelsArray !== null)
            {
                pixelArray.value = mediaCanvas.pixelsArray
                width.value = mediaCanvas.width;
            }
        })
}

onMounted(() => updateFromFile())
watch([() => controlStore.file,() => controlStore.width,() => controlStore.height,() => controlStore.characters], () => updateFromFile())

</script>

<template>
    <AsciiRenderer :pixel-array="pixelArray" :width="width" />
</template>
