import { Character } from "../types.ts";
export const Query = {
    character: async (_:unknown, args: { id: number }): Promise<Character|undefined> => {
        const response = await fetch(
            `https://rickandmortyapi.com/api/character/${args.id}`
        );
        const data = await response.json();
        if(!data.name) return undefined;
        const character:Character ={
            id: data.id,
            name: data.name,
            status: data.status,
            species: data.species,
            type: data.type,
            gender: data.gender,
            image: data.image,
            episode: data.episode,
            url: data.url,
            created: data.created,
            origin:data.origin,
            location:data.location,
        }
        return character;
    },
    charactersByIds: async (_:unknown, args: { ids: number[] }): Promise<(Character|undefined)[]> => {
        const characters=args.ids.map(async (id:number) => {
            const response = await fetch(
                `https://rickandmortyapi.com/api/character/${id}`
            );
            const data = await response.json();
            if(!data.name) return undefined;
            const character:Character ={
                id: data.id,
                name: data.name,
                status: data.status,
                species: data.species,
                type: data.type,
                gender: data.gender,
                image: data.image,
                episode: data.episode,
                url: data.url,
                created: data.created,
                origin:data.origin,
                location:data.location,
            }
            return character;
        })
        return characters;
    }
}
