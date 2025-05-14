const BASE_URL = "https://singonline-api.onrender.com";

// Hent tokens fra localStorage
const getAccessToken = () => localStorage.getItem("access_token");
const getRefreshToken = () => localStorage.getItem("refresh_token");

// Gem nye tokens i localStorage
const saveTokens = (access, refresh) => {
    if (access) localStorage.setItem("access_token", access);
    if (refresh) localStorage.setItem("refresh_token", refresh);
};

// Hovedfunktion til at lave API-kald
export const fetchApi = async (endpoint, method = "GET", body = null) => {
    let accessToken = getAccessToken();

    // Sætter headers
    const headers = {
        "Content-Type": "application/json",
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    };

    // Deklarerer config objekt
    const config = {
        method,
        headers,
        ...(body ? { body: JSON.stringify(body) } : {}),
    };

    // Forsøger at kalde API endpoint
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, config);

        // Hvis vi får en 401 (Unauthorized) prøv at forny token
        if (response.status === 403) {
            console.warn("Access token expired, attempting to refresh...");
            const newAccessToken = await refreshAccessToken();

            if (newAccessToken) {
                return fetchApi(endpoint, method, body); // Prøv igen med nyt token
            } else {
                console.error("Failed to refresh token, logging out...");
                return null; // Afbryd hvis refresh fejler
            }
        }

        // Sikrer, at vi kun sender én response
        if (!response.ok) {
            console.error(`HTTP Error ${response.status}: ${response.statusText}`);
            return null;
        }

        // Undgå at parse JSON hvis API'et returnerer tom respons
        const contentType = response.headers.get("content-type");
        if (response.status !== 204 && contentType && contentType.includes("application/json")) {            
            return await response.json();
        } else {
            return null;
        }
    } catch (error) {
        console.error(`API error: ${error.message}`);
        return null; // Sikrer at vi aldrig prøver at sende to responses
    }
};

// Funktion til at forny access_token
const refreshAccessToken = async () => {
    const refreshToken = getRefreshToken();

    // Logger ud hvis refresh_token ikke eksisterer
    if (!refreshToken) {
        console.log("No refresh token available, logging out...");
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/login"; // Redirect til login
        return null;
    }

    try {
        // Fetcher refresh_token fra API
        const response = await fetch(`${BASE_URL}/refresh`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refresh_token: refreshToken }),
        });

        // Send til login hvis response fejler
        if (!response.ok) {
            console.error("Failed to refresh token, logging out...");
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            window.location.href = "/login"; // Redirect til login
            return null;
        }

        // Tjek om response er JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            saveTokens(data.access_token, data.refresh_token);
            return data.access_token;
        } else {
            console.error("Invalid token refresh response format");
            return null;
        }
    } catch (error) {
        console.error("Error refreshing token:", error);
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/login"; // Redirect til login
        return null;
    }
};
