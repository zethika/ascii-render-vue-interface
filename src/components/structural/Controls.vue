<script setup lang="ts">
import SubTitle from "@/components/text/SubTitle.vue";
import SourceSection from "@/components/controls/SourceSection.vue";
import DataSection from "@/components/controls/DataSection.vue";
</script>

<template>
    <div class="w-[300px] bg-gray-200 p-2">
        <SourceSection class="border-b border-blue-600 pb-4 mb-3" />
        <DataSection class="border-b border-blue-600 pb-4 mb-3" />
        <SubTitle>Colors</SubTitle>
    </div>
</template>
