import {useEffect, useState} from "react";

import axios from "axios";

import Card from "../components/Card";
import Controls from "../components/Controls";
import List from "../components/List";
import Pagination from "../components/Pagination";
import { ALL_CHARACTERS } from "../config";
import { Character,Info } from "../types/types";
interface HomePageProps{
    characters: Character[];
    setCharacters: (data: Character[])=> void;
}
const HomePage = ({characters,setCharacters}:HomePageProps) => {
  const [filteredCharacters, setFilteredCharacters] = useState(characters);
  const [pages,setPages] = useState(0);
  const [currentPage,setCurrentPage] = useState(1);

  
  const handleSearch = (search?:string, species?:string,status?:string, gender?: string, type?: string)=>{ 
    let data = [...characters];

    console.log(data);
    if(status){
      data = data.filter(char => char.status.toLowerCase().includes(status.toLowerCase()));
    }
    if(gender){
      data = data.filter(char => char.gender.toLowerCase()===gender.toLowerCase());
    }
    
    if(species){
      data = data.filter(char=>char.species.toLowerCase().includes(species.toLowerCase()));
    }
    if(type){
      data = data.filter(char=>char.type.toLowerCase().includes(type.toLowerCase()));
    }
    if(search) { 
      data = data.filter(char=>char.name.toLowerCase().includes(search.toLowerCase()));
    }
    setFilteredCharacters(data);
  };

  useEffect(()=>{
    axios.get(`${ALL_CHARACTERS}/?page=${currentPage}`).then(
      ({data})=> {
        setCharacters(data.results);
        setPages(data.info.pages);
      }
    );
  },[currentPage]);

  useEffect(()=>{
    handleSearch();
  },[characters]);
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
            <Card id={char.id} key={char.id} onClick={()=>console.log("asd")} {...characterInfo}/>
          );
        }
        )}
      </List>
      <Pagination currentPage={currentPage} setPage={setCurrentPage} totalPages={pages}/>
    </>
  );
};

export default HomePage;