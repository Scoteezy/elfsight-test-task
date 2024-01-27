const BASE_URL = "https://rickandmortyapi.com/api";

export const ALL_CHARACTERS = BASE_URL + "/character";

export const searchByName = (name:string) => BASE_URL + "/?name=" + name;