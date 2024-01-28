import {useEffect, useState} from "react";

import styled from "styled-components";

import { Option } from "../types/types";
import { CustomSelect } from "./CustomSelect";
import { Search } from "./Search";
const optionsForGender:Option[] = [
  {value: "Male", label: "Male"},
  {value: "Female", label: "Female"},
  {value: "unknown", label: "unknown"},
  {value: "Genderless", label: "Genderless"}
] ;
const optionsForSpecies:Option[] = [
    
  {value: "Human", label: "Human"},
  {value: "Alien", label: "Alien"},
  {value: "Humanoid", label: "Humanoid"},
  {value: "Animal", label: "Animal"},
  {value: "Mythological Creature", label: "Mythological Creature"},
  {value: "Poopybutthole", label: "Poopybutthole"},
] ;
const optionsForStatus:Option[] = [
    
  {value: "Alive", label: "Alive"},
  {value: "Dead", label: "Dead"},
  {value: "unknown", label: "unknown"},
] ;
const optionsForType:Option[] = [
    
  {value: "Genetic experiment", label: "Genetic experiment"},
  {value: "Parasite", label: "Parasite"},
  {value: "unknown", label: "unknown"},
] ;
const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

@media (min-width: 767px) {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
`;

interface ControlsProps{ 
    onSearch: (search?:string, species?:string,status?:string, gender?: string, type?: string)=>void;
}


const Controls = ({onSearch}: ControlsProps) => {
  const [search, setSearch] = useState("");
  const [gender,setGender] = useState<Option>();
  const [species, setSpecies] = useState<Option>();
  const [status, setStatus] = useState<Option>();
  const [type, setType] = useState<Option>();

  useEffect(()=>{
    const genderValue = gender?.value || "";
    const speciesValue = species?.value || "";
    const statusValue = status?.value || "";
    const typeValue = type?.value || "";
    
    console.log(typeValue + " " + speciesValue + " " + statusValue + " " + genderValue);
    onSearch(search,speciesValue, statusValue,genderValue, typeValue);
  },[search,gender, species,status,type]);

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch}/>
      <CustomSelect
        isClearable
        isSearchable={false}
        onChange={setGender}
        options={optionsForGender}
        placeholder="Filter by Gender"
        value={gender}
      />
      <CustomSelect
        isClearable
        isSearchable={false}
        onChange={setStatus}
        options={optionsForStatus}
        placeholder="Filter by Status"
        value={status}
      />
      <CustomSelect
        isClearable
        isSearchable={false}
        onChange={setType}
        options={optionsForType}
        placeholder="Filter by Type"
        value={type}
      />
      <CustomSelect
        isClearable
        isSearchable={false}
        onChange={setSpecies}
        options={optionsForSpecies}
        placeholder="Filter by Species"
        value={species}
      />
    </Wrapper>
  );
};

export default Controls; 