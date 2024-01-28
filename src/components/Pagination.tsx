import styled from "styled-components";
interface PaginationProps {
    totalPages: number;
    currentPage: number;
    setPage: (page:number)=>void;   
}
const ButtonContainer = styled.div`
    display:flex;
    justify-content:space-between;
    font-size: var(--fs-md);
    font-weight: var(--fw-bold);
`;
const PageButton = styled.button`
    cursor: ${({ disabled }) => !disabled ? "pointer" : ""};;
    width:150px;
    height:30px;
    box-shadow: var(--shadow);
    border: var(--colors-ui-base);
    border-radius:var(--radii);
    outline:none;
    background-color: ${({ disabled }) => !disabled ? "var(--colors-ui-base)" : "var(--color-disabled)"};
    color: var(--color-text);
`;
const Pagination = ({totalPages=42, currentPage, setPage}:PaginationProps) => {
	return (
		<ButtonContainer>
			{currentPage>1? <PageButton onClick={()=>{
				setPage(currentPage-1);
			}}>Prev</PageButton>: <PageButton disabled>Prev</PageButton>}
			{currentPage}
			{currentPage<=totalPages? <PageButton onClick={()=>{
				setPage(currentPage+1);
			}} >Next</PageButton>: <PageButton disabled>Next</PageButton>}
		</ButtonContainer>
	);
};

export default Pagination;