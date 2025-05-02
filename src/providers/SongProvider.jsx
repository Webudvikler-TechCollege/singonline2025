import { createContext, useContext, useEffect, useState } from "react";
import { fetchApi } from "../utils/api"; // Fetch-wrapper til API-kald
import { useAuth } from "./AuthProvider";

const SongContext = createContext();

const SongProvider = ({ children }) => {
	const [apiData, setApiData] = useState([]);
	const { loginData } = useAuth();

	// Funktion til at hente sanglisten med token
	const getData = async () => {
		if (!loginData?.access_token) return; // Stop hvis der ikke er en token

		try {
			const data = await fetchApi("/songs", "GET", null, loginData.access_token);
			setApiData(data.response); // Opdater state med sange
		} catch (error) {
			console.error("Fejl ved hentning af sange:", error);
		}
	};

	// Hent sanglisten, når loginData ændres
	useEffect(() => {
		getData();
	}, [loginData]);

	return (
		<SongContext.Provider value={{ songs: apiData, setSongs: setApiData }}>
			{children}
		</SongContext.Provider>
	);
};

// Custom hook til at bruge SongContext
const useSongs = () => useContext(SongContext);

export { SongProvider, useSongs };
