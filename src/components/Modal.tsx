import { useEffect,useState } from "react";

import axios from "axios";
import styled from "styled-components";

import { GET_ONE_BY_ID } from "../config";
import { Character,status as statusType} from "../types/types";
interface ModalProps { 
    id: number | string;
    modal: boolean
}
interface ModalStyleProps {
	modal: boolean;
}
interface ModalTitleProps { 
	status: statusType | undefined;
}
const ModalContainer = styled.div<ModalStyleProps>`
   display: ${({modal})=>modal ? "block": " none"};
   position: fixed;
   top: 50%;     
   left: 50%;                    
   transform: translate(-50%, -50%); 
   box-shadow:var(--shadow);
   background: var(--color-bg);
   border-radius: var(--radii);
    img{ 
	border-radius: var(--radii) var(--radii) 0 0;
   }
`;
const ModalTitle = styled.h2<ModalTitleProps>`
	padding: 0;
	margin: 0;
	margin-left: 5px;
	span{
		font-size: var(--fs-md);
		margin-left:5px;
		background: green;
		padding: 5px;
        background: ${({status})=> status=="Alive" ? "green" : "red"};
        border-radius: 4px;
	}
`;
const ModalP = styled.p`	
	margin-left: 5px;
	font-size: var(--fs-md);
	font-weight: var(--fw-bold);
	span{
		font-weight: var(--fw-ligth);
	}
`;
const ModalExit = styled.span`
	
`;
const Modal = ({id,modal} : ModalProps) => {
	const [character, setCharacter] = useState<Character>();

	useEffect(() => {
		if(character?.id!==id){
			axios.get(`${GET_ONE_BY_ID(id)}`).then(
				({data})=> {
					setCharacter(data);
				}
			);
		}
	}, [id]);
  
	return (
		<ModalContainer modal={modal}>
			<ModalExit>&times;</ModalExit>
			<img alt={character?.name} src={character?.image} />
			<ModalTitle 
				status={character?.status}
			>
				{character?.name} 
				<span>{character?.status}</span>
			</ModalTitle>
			<ModalP>Species: <span>{character?.species}</span></ModalP>
			<ModalP>Gender: <span> {character?.gender}</span></ModalP>
			<ModalP>Status: <span>{character?.status}</span></ModalP>
			<ModalP>Origin: <span>{character?.origin.name}</span></ModalP>
			<ModalP>Type: <span>{character?.type}</span></ModalP>
			<ModalP>Last seen at: <span>{character?.location.name}</span></ModalP>
		</ModalContainer>
	);
};

export default Modal;