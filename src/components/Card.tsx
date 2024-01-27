import styled from "styled-components";

import { status as statusType } from "../types/types";
const Wrapper = styled.article`
    border-radius: var(--radii);
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    cursor: pointer;
    overflow: hidden;
`;

const CardImage = styled.img`
    display: block;
    width: 100%;
    height: 150px;
    object-fit: cover;
    object-position: center;
    box-shadow: var(--shadow);
`;

const CardBody = styled.div`
    padding: 1rem 1.5rem 2rem;


`;

const CardTitle = styled.h3`
    margin: 0;
    font-size: var(--fs-md);
    font-weight: var(--fw-bold);

`;

const CardList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 1rem 0 0;

`;

interface CardListItemProps {
    status: statusType
}
const CardListItem = styled.li<CardListItemProps> `
    font-size: var(--fs-sm);
    line-height: 1.5;
    font-weight: var(--fw-light);

    & > b {
        font-weight: var(--fw-bold);
    }
    & > span {
        padding: 5px;
        background: ${({status})=> status=="Alive" ? "green" : "red"};
        border-radius: 4px;
       
    }
`;

interface CardProps { 
    name: string;
    status:statusType;
    gender: string;
    image: string;
    id: number | string;
    onClick:()=>void;
}
const Card = ({status,image,gender,id,name, onClick}:CardProps) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage alt={name} src={image}/>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          <CardListItem status={status}><b>{gender}</b></CardListItem>
          <CardListItem status={status}><span>{status}</span></CardListItem>
        </CardList>
      </CardBody>
    </Wrapper>
  );
};

export default Card;