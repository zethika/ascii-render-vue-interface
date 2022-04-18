<script setup lang="ts">
import {useControlsStore} from "@/stores/controls";
import SubTitle from "@/components/text/SubTitle.vue";
import RegularInput from "@/components/inputs/RegularInput.vue";

const controlsStore = useControlsStore();

</script>

<template>
    <div>
        <SubTitle>Data</SubTitle>
        <div class="grid gap-2 grid-cols-2">
            <RegularInput v-model="controlsStore.width" label="Width" type="number" />
            <RegularInput v-model="controlsStore.height" label="Height" type="number" />
            <RegularInput class="col-span-2" v-model="controlsStore.characters" label="Charcter set" type="text" />
            <RegularInput v-model="controlsStore.lineHeight" label="Line height" type="number" />
            <RegularInput v-model="controlsStore.fontSize" label="Font size" type="number" />
        </div>
    </div>
</template>
