import {IoSearch} from "react-icons/io5";
import styled from "styled-components";

const InputCointainer = styled.label`
background-color: var(--colors-ui-base);
padding: 1rem 2rem;
display:flex;
align-items: center;

border-radius: var(--radii);
box-shadow: var(--shadow);
width:100%;
margin-bottom: 1rem;

@media (min-width:767px ){
    margin-bottom: 0;
    width: 280px;

}
`;
const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country",

})`

  margin-left: 2rem;
  border: none;
  outline:none;
  background-color: var(--colors-ui-base);
  color: var(--color-text);
`;

interface SearchProps { 
    search:string;
    setSearch: (text:string)=>void
}
export const Search=({search,setSearch}:SearchProps)=>{
  return(
    <InputCointainer>
      <IoSearch/>
      <Input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearch(e.target.value);
      }} value={search}/>
    </InputCointainer>
  );
};