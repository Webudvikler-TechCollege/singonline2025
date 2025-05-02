import { createContext, useContext, useEffect, useState } from "react";
import { fetchApi } from "../utils/api"; // Fetch-wrapper til API-kald
import { useAuth } from "./AuthProvider";

const ArtistContext = createContext();

const ArtistProvider = ({ children }) => {
	const [apiData, setApiData] = useState([]);
	const { loginData } = useAuth();

	// Funktion til at hente sanglisten med token
	const getData = async () => {
		if (!loginData?.access_token) return; // Stop hvis der ikke er en token

		try {
			const data = await fetchApi("/artists", "GET", null, loginData.access_token);
			
			setApiData(data.response); // Opdater state med sange
		} catch (error) {
			console.error("Fejl ved hentning af sange:", error);
		}
	};

	// Get data, when loginData change
	useEffect(() => {
		getData();
	}, [loginData]);

	return (
		<ArtistContext.Provider value={{ artists: apiData, setArtists: setApiData }}>
			{children}
		</ArtistContext.Provider>
	);
};

// Custom hook til at bruge SongContext
const useArtists = () => useContext(ArtistContext);

export { ArtistProvider, useArtists };
