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

    const fromMax = 255;
    const fromMin = 0;

    props.pixelArray.forEach((rgba,index) => {
        if(index !== 0 && index % props.width === 0)
            string += "<br />";

        const average = (rgba.a === 0) ? 255 : (rgba.r+rgba.g+rgba.b)/3;
        let charIndex: number;
        if(average <= fromMin)
        {
            charIndex = fromMin;
        }
        else if(average >= fromMax)
        {
            charIndex = fromMax;
        }
        else
        {
            charIndex = Math.floor(mapValue(average,fromMin,fromMax,0,controlStore.charactersLength));
        }

        let char = controlStore.characters.charAt(charIndex);
        string += char === ' ' || char === '' ? '&nbsp;' : char;
    })

    return string;
})

</script>

<template>
    <div class="relative h-full w-full overflow-scroll">
        <p v-html="asciiString" class="absolute top-0 left-0" :style="'font-family: \'Courier\'; line-height: '+controlStore.lineHeight+'px'"></p>
    </div>

</template>
