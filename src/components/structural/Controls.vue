<script setup lang="ts">
import Slider from 'primevue/slider';
import InputText from 'primevue/inputtext';
import {ref} from "vue";
import SubTitle from "@/components/text/SubTitle.vue";
import SourceSection from "@/components/controls/SourceSection.vue";

const value = ref(0)

</script>

<template>
    <div class="w-[300px] bg-gray-200 p-2">
        <SourceSection class="border-b border-blue-600 pb-4 mb-3" />
        <SubTitle>Data</SubTitle>
        <SubTitle>Colors</SubTitle>

<!--        <Slider v-model="value" />
        <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText type="text" v-model="value" placeholder="Search" />
        </span>-->

    </div>
</template>
