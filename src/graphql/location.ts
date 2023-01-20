import { Character } from "../types.ts";

export const Location = {
    residents: async (parent: any): Promise<Character[]|undefined> => {
        const urls = parent.residents;
        const characters=urls.map(async (url:string) => {
            const response = await fetch(
                url
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
    },
}