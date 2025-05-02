import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContentWrapper } from "../../../components/ContentWrapper/ContentWrapper";
import { SongForm } from "../../../components/Form/Organism/SongForm";
import { useAuth } from "../../../providers/AuthProvider";
import { fetchApi } from "../../../utils/api";
import { useForm } from "react-hook-form";

export const SongUpdate = () => {
  const { id } = useParams();
  const { loginData } = useAuth();
  const { reset } = useForm();
  const [loading, setLoading] = useState(true);
  const [songData, setSongData] = useState(null);

  useEffect(() => {
    const getSong = async () => {
      if (!loginData?.access_token) return;

      try {
        const data = await fetchApi(`/songs/${id}`, "GET", null, loginData.access_token);
        setSongData(data.response);
        reset({
          title: data.response.title,
          content: data.response.content,
          artist_id: data.response.artist_id,
        });
      } catch (error) {
        console.error(`Error fetching song: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    getSong();
  }, [id, loginData, reset]);

  if (loading) {
    return (
      <ContentWrapper title="Loading...">
        <p>Loading song details...</p>
      </ContentWrapper>
    );
  }

  if (!songData) {
    return (
      <ContentWrapper title="Error">
        <p>Song not found.</p>
      </ContentWrapper>
    );
  }

  return (
    <ContentWrapper title={`Update song: ${songData.title}`}>
      <SongForm mode="update" defaultValues={songData} />
    </ContentWrapper>
  );
};
