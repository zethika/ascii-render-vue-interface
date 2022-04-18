<script setup lang="ts">
import {RGBALiteral} from "@/index";
import {computed} from "vue";
import {useControlsStore} from "@/stores/controls";
import mapValue from "@/helpers/mapValue";

const controlStore = useControlsStore();

const props = defineProps<{
    pixelArray: Array<RGBALiteral>,
    width: number
}>()

const asciiString = computed(() => {
    let string = '';

    props.pixelArray.forEach((rgba,index) => {
        const average = (rgba.r+rgba.g+rgba.b)/3;
        const charIndex = mapValue(average,0,255,0,controlStore.charactersLength);
        const char = controlStore.characters.charAt(charIndex);
        string += char === ' ' ? '&nbsp;' : char;
        if(index !== 0 && index % props.width === 0)
            string += "<br />";
    })

    return string;
})

</script>

<template>
    <div class="relative h-full w-full overflow-scroll">
        <p v-html="asciiString" class="absolute top-0 left-0" style="font-family: 'Courier'"></p>
    </div>

</template>
