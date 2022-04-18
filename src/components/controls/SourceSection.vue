<script setup lang="ts">
import SubTitle from "@/components/text/SubTitle.vue";
import FileUpload from 'primevue/fileupload';
import {reactive} from "vue";
import InputFilePreview from "@/components/image/InputFilePreview.vue";

const state = reactive({
    file: null as File|null,
})

function select(e: any)
{
    let file = null;
    if(typeof e.files !== 'undefined' && typeof e.files[0] !== 'undefined' && e.files[0] instanceof File)
        file = e.files[0];

    state.file = file;
}

</script>

<template>
    <div>
        <SubTitle>Source</SubTitle>
        <FileUpload mode="basic" name="demo[]"  accept="image/*" :maxFileSize="100000000" @upload="() => null" @select="select" />
        <InputFilePreview v-if="state.file !== null" :file="state.file" class="max-w-full mt-4" />
    </div>
</template>
