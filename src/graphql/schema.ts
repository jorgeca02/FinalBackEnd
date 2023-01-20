import { gql } from 'https://deno.land/x/graphql_tag@0.0.1/mod.ts'

export const typeDefs =gql`
type Character {
    id: Int!
    name: String!
    status: String!
    species: String!
    type: String!
    gender: String!
    origin: Location!
    location: Location!
    image: String!
    episode: [Episode]!
    url: String!
    created: String!
}
type Location {
    id:Int
    name:String!
    type:String
    dimension:String
    residents:[Character]
    created:String
    url:String!
}
type Episode {
    id:Int!
    name:String!
    air_date:String!
    episode: String!
    characters:[Character]
    url:String!
    created:String!
}
type Query {
    character(id: ID!): Character 
    charactersByIds(ids: [ID!]!): [Character] 
} 
`;