import { Location, Episode } from "../types.ts";

export const Character = {
    origin: async (parent: any): Promise<Location|undefined> => {
        if(parent.origin.name=="unknown")
            return {name:"unknown",url:""}
        const response = await fetch(
            parent.origin.url
        );
        const data = await response.json(); 
        if(!data.name) return undefined;
        return data;
    },
    location: async (parent: any): Promise<Location|undefined> => {
        if(parent.location.name=="unknown")
            return {name:"unknown",url:""}
        const response = await fetch(
            parent.location.url
        );
        const data = await response.json(); 
        if(!data.name) return undefined;
        return data;
    },
    episode: async (parent: any): Promise<Episode[]|undefined> => {
        const urls = parent.episode;
        const episodes=urls.map(async (url:string) => {
            const response = await fetch(
                url
            );
            const data = await response.json();
            if(!data.name) return undefined;
            const episode:Episode ={
                id: data.id,
                name: data.name,
                air_date: data.air_date,
                episode: data.episode,
                characters: data.characters,
                url: data.url,
                created: data.created
            }
            return episode;
        })
        return episodes;
    },
}