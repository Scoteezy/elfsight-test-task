export type status = "Alive" | "Dead" | "unknown"
export type gender = "Female" | "Genderless" | "Male" | "unknown"
export type Character = { 
    id: number| string;
    name: string;
    status: status;
    species: string;
    type: string;
    gender: gender;
    origin:{ 
        name : string,
        url: string
    },
    image: string,
    episode: string[]
    url: string
    created: string
}
export type Info = Pick<Character, "gender" | "image" | "name" | "status">
export interface Option{ 
    value: string;
    label: string
}