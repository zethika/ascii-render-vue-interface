import {defineStore} from "pinia";

export const useControlsStore = defineStore({
    id: 'controls',
    state: () => ({
        file: null as null|File,
        width: 10,
        height: 10,
        characters: 'Ñ@#W$9876543210?!abc;:+=-,._ '
    }),
    getters: {
        charactersLength: (state) => state.characters.length
    },
    actions: {
    }
})
