import Select from "react-select";

import styled from "styled-components";

import { Option } from "../types/types";
interface CustomSelectProps {
    onChange: (option:Option)=>void
}

export const CustomSelect = styled(Select).attrs({
	styles: {
		control: (provided)=>({
			...provided,
			backgroundColor: "var(--colors-ui-base)",
			color: "var(--colors-text)",
			borderRadius: "var(--radii)",
			border: "none",
			boxShadow: "var(--shadow)",
			height: "50px"
		}),
		option: (provided,state)=>({
			...provided,
			cursor: "pointer",
			color:"var(--colors-text)",
			backgroundColor : state.isSelected ? "var(--color-bg)": "var(--colors-ui-base)",
		})
	}
})<CustomSelectProps>`
    width: 200px;
    border-radius: var(--radii);
    font-family: var(--family);
    border: none;

    & > * {
        box-shadow: var(--shadow);
    }
    & input { 
        padding-left: 0.25rem;
    }
    & * {
        color: var(--colors-text) !important;
    }
    & > div[id] { 
        background-color: var(--colors-ui-base); 
    }
`;