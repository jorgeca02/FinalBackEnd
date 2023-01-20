export type Location = {
    id?:number;
    name: string;
    type?:string;
    dimension?:string;
    residents?:Character[];
    created?:string;
    url:string
  };
  
  export type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: string;
    location?: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
  };

  export type Episode = {
    id:number;
    name:string;
    air_date:string;
    episode:string;
    characters:Character[];
    url:string;
    created:string;
  }