<script setup lang="ts">
import Renderer from "@/components/Renderer.vue";
import Controls from "@/components/structural/Controls.vue";

</script>

<template>
    <div class="flex flex-row h-screen w-screen">
        <Renderer class="flex-grow h-full"/>
        <Controls />
    </div>
</template>

<style>

:root{
    /* Colors */
    --bg: #f4f8f9;

    --blue-lightest: #5686EA;
    --blue-lighter: #457AE8;
    --blue: #316ae0;
    --blue-darker: #2D63D1;
    --blue-darkest: #295ABE;

    --grey-lighterest: #b0b0b0;
    --grey-lightest: #AAAAAA;
    --grey-light-dark: #707070;
    --grey-lighter: #777777;
    --grey: #444444;
    --grey-darker: #222222;

    --green-lightest: #33EB3F;
    --green-lighter: #24E031;
    --green: #15D422;
    --green-darker: #14C720;
    --green-darkest: #12BA1E;

    --red-lightest: #ff3351;
    --red-lighter: #f5314f;
    --red: #E63250;

    --black-20p: rgba(0, 0, 0, 0.2);

    /* Sizes */
    --header-height: 55px;
}

</style>
