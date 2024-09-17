import { create } from 'zustand'
import { World, Character } from '../interfaces';

type Store = {
    characters: Character[],
    worlds: World[],
    filters: { [key: string]: string | undefined },
    asc: number,
    orderBy: string,

    applyFilter: (newState: Character[]) => void,

    setCharacters: (characters: Character[]) => void
    setWorlds: (worlds: World[]) => void

    setFilters: (newFilters: { [key: string]: string | undefined }) => void,
    setAsc: (asc: number) => void
    setOrderBy: (order: string) => void
}


export const useStore = create<Store>((set) => {
    return ({
        characters: [],
        worlds: [],
        filters: {},
        asc: 1,
        orderBy: 'race',

        applyFilter: (characters) => set({ characters }),

        setCharacters: (characters) => set({ characters }),
        setWorlds: (worlds) => set({ worlds }),

        setAsc: ((asc) => set({ asc: asc * -1 })),
        setFilters: (filters) => set({ filters }),
        setOrderBy: (orderBy) => set({ orderBy }),
    });
})
