import {defineStore} from "pinia";

export const useControlsStore = defineStore({
    id: 'controls',
    state: () => ({
        file: null as null|File
    }),
    getters: {
    },
    actions: {
    }
})
