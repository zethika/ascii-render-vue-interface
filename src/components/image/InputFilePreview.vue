<script setup lang="ts">

import {computed} from "vue";

const props = defineProps<{
    file: File
}>()

const blob = computed(() => URL.createObjectURL(props.file))

</script>

<template>
    <img v-if="props.file.type.indexOf('video/') === -1" :src="blob" alt="preview of selected media" />
    <video v-else :src="blob" autoplay loop>
        Your browser does not support the video tag.
    </video>
</template>
