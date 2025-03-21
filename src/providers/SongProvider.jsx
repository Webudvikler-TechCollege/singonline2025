import { createContext, useContext, useEffect, useState } from "react";
import { fetchApi } from "../utils/api"; // Fetch-wrapper til API-kald
import { useAuth } from "./AuthProvider";

const SongContext = createContext();

const SongProvider = ({ children }) => {
	const [songList, setSongList] = useState([]);
	const { loginData } = useAuth();

	// Funktion til at hente sanglisten med token
	const getSongList = async () => {
		if (!loginData?.access_token) return; // Stop hvis der ikke er en token

		try {
			const data = await fetchApi("/songs", "GET", null, loginData.access_token);
			
			setSongList(data.response); // Opdater state med sange
		} catch (error) {
			console.error("Fejl ved hentning af sange:", error);
		}
	};

	// Hent sanglisten, når loginData ændres
	useEffect(() => {
		getSongList();
	}, [loginData]);

	return (
		<SongContext.Provider value={{ songList, setSongList }}>
			{children}
		</SongContext.Provider>
	);
};

// Custom hook til at bruge SongContext
const useSongs = () => useContext(SongContext);

export { SongProvider, useSongs };
