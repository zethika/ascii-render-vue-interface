<script setup lang="ts">
import SubTitle from "@/components/text/SubTitle.vue";
import InputFilePreview from "@/components/image/InputFilePreview.vue";
import {useControlsStore} from "@/stores/controls";
import {ref} from "vue";

const controlStore = useControlsStore()

const inputRef = ref<HTMLInputElement|null>(null)

function select()
{
    let file = null;
    if(inputRef.value !== null && inputRef.value.files !== null && typeof inputRef.value.files[0] !== 'undefined' && inputRef.value.files[0] instanceof File)
        file = inputRef.value.files[0];

    controlStore.file = file;
}

</script>

<template>
    <div>
        <SubTitle>Source</SubTitle>
        <input ref="inputRef" type="file" accept="image/*" maxlength="100000000" @change="select">
        <InputFilePreview v-if="controlStore.file !== null" :file="controlStore.file" class="max-w-full max-h-[50px] mt-4" />
    </div>
</template>
