import {useEffect, useState} from "react";

import axios from "axios";

import Card from "../components/Card";
import Controls from "../components/Controls";
import List from "../components/List";
import { ALL_CHARACTERS } from "../config";
import { Character,Info } from "../types/types";
interface HomePageProps{
    characters: Character[];
    setCharacters: (data: Character[])=> void;
}
const page = 1;
const HomePage = ({characters,setCharacters}:HomePageProps) => {
  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  console.log(filteredCharacters);
  
  const handleSearch = (search?:string, species?:string,status?:string, gender?: string, type?: string)=>{ 
    let data = [...characters];

    if(status){
      data = data.filter(char => char.status.toLowerCase().includes(status.toLowerCase()));
    }
    if(gender){
      data = data.filter(char => char.gender.toLowerCase()===gender.toLowerCase());
    }
    if(search) { 
      data = data.filter(char=>char.name.toLowerCase().includes(search.toLowerCase()));
    }
    if(species){
      data = data.filter(char=>char.species.toLowerCase().includes(species.toLowerCase()));
    }
    if(type){
      data = data.filter(char=>char.type.toLowerCase().includes(type.toLowerCase()));
    }
    setFilteredCharacters(data);
  };

  useEffect(()=>{
    if(!characters.length){
      axios.get(ALL_CHARACTERS).then(
        ({data})=> setCharacters(data.results)
      );
    }

    //eslint-disable-next-line
},[]);
  useEffect(()=>{
    handleSearch();
    
  //eslint-disable-next-line
  },[characters])
  return (
    <>
      <Controls onSearch={handleSearch}/>
      <List>
        {filteredCharacters.map((char)=>{
          const characterInfo: Info = {
            gender: char.gender,
            name: char.name,
            status: char.status,
            image: char.image
          };

          return ( 
            <Card id={char.id} key={char.name} onClick={()=>console.log("asd")} {...characterInfo}/>
          );
        }
        )}
      </List>
    </>
  );
};

export default HomePage;