
import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import HomePage from "./pages/HomePage";
import { Character } from "./types/types";
function App () {
	const [characters,setCharacters] = useState<Character[]>([]);

	return (
		<>
			<Header />
			<Main>
				<HomePage characters={characters} setCharacters={setCharacters}/>
			</Main>
		</>
	);
}
export default App;































