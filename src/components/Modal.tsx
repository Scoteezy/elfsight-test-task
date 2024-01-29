import { useEffect,useState } from "react";

import axios from "axios";
import styled from "styled-components";

import { GET_ONE_BY_ID } from "../config";
import { Character,status as statusType} from "../types/types";
interface ModalProps { 
    id: number | string;
    modal: boolean
	setModal: (modal:boolean)=>void;
}
interface ModalStyleProps {
	modal: boolean;
}
interface ModalTitleProps { 
	status: statusType | undefined;
}
const ModalContainer = styled.div<ModalStyleProps>`
   top: ${({modal})=>modal ? "50%": " -500%"};
   position: fixed;
   /* top: ;      */
   left: 50%;      
   width: 100%;
   height: 100%;        
   transform: translate(-50%, -50%); 
   box-shadow:var(--shadow);
   background: var(--color-bg);
   border-radius: var(--radii);
   transition: all .4s linear;
    img{ 
	border-radius: var(--radii) var(--radii) 0 0;
	width:100%;
   }
   @media (min-width: 555px){
       width: 400px;
	   height: auto;
    }
	@media (min-width: 767px){
		bottom: ${({modal})=>modal ? "0": " -500%"};
		top: auto;
		right: 0;
		left: auto;
		transform: none;
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
	cursor: pointer;
	position: absolute;
	right: 15px;
	top:10px;
	font-size: 30px;
`;
const Modal = ({id,modal,setModal} : ModalProps) => {
	const [character, setCharacter] = useState<Character>();

	useEffect(() => {
		if(character?.id!==id){
			setModal(false);
			setTimeout(()=>{
				axios.get(`${GET_ONE_BY_ID(id)}`).then(
					({data})=> {
						setModal(true);
						setCharacter(data);
					}
				);
			},100);
			
		}
	}, [id]);

	return (
		<ModalContainer modal={modal}>
			<ModalExit onClick={()=>setModal(false)}>&times;</ModalExit>
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