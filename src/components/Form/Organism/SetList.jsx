import { useEffect, useState } from "react"
import { fetchApi } from "../../../utils/api";
import { useAuth } from "../../../providers/AuthProvider";

export const SetList = () => {
    const { loginData } = useAuth()
    const [ apiData, setApiData ] = useState([])

    const getData = async () => {
        if (!loginData?.access_token) return; // Stop hvis der ikke er en token

        try {
            const data = await fetchApi("/sets", "GET", null, loginData.access_token);
            setApiData(data.response); 
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData()
    }, [loginData, setApiData])

    console.log(apiData);
    

  return (
    <div>SetList</div>
  )
}
