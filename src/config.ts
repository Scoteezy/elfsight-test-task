const BASE_URL = "https://rickandmortyapi.com/api";

export const ALL_CHARACTERS = BASE_URL + "/character";

export const GET_ONE_BY_ID = (id:number|string) => BASE_URL + "/character/" + id;