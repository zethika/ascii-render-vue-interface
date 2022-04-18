<script setup lang="ts">
import {computed, ref} from "vue";
import {useUniqueNumber} from "@/composables/uniqueNumber";
const {uniqueNumber} = useUniqueNumber();
const id = computed(() => 'w-input-'+uniqueNumber.value)

const props = defineProps<{
    modelValue: boolean,
    label?: string,
    error?: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', v:boolean): void
}>()

const hasError = computed(() => typeof props.error !== 'undefined' && props.error !== '')

const inputRef = ref<HTMLInputElement|null>(null)
function updateValue(e: InputEvent)
{
    if(inputRef.value === null)
        return;

    emit('update:modelValue',!props.modelValue)
}

</script>

<template>
    <div :class="{'text-red': hasError}">
        <input ref="inputRef" type="checkbox" :id="id" :checked="modelValue === true" @change="updateValue">
        <label :for="id" class="pl-2">{{label}}</label>
        <div v-if="hasError" class="italic">{{error}}</div>
    </div>
</template>
