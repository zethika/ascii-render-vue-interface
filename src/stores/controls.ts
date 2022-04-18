import {defineStore} from "pinia";

export const useControlsStore = defineStore({
    id: 'controls',
    state: () => ({
        file: null as null|File,
        width: 100,
        height: 100,
        characters: 'Ñ@#W$9876543210?!abc;:+=-,._ ',
        lineHeight: 16,
        fontSize: 16
    }),
    getters: {
        charactersLength: (state) => state.characters.length
    },
    actions: {
    }
})
