import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContentWrapper } from "../../../components/ContentWrapper/ContentWrapper";
import { SetForm } from "../../../components/Form/Organism/SetForm";
import { useAuth } from "../../../providers/AuthProvider";
import { fetchApi } from "../../../utils/api";
import { useForm } from "react-hook-form";

export const SetUpdate = () => {
  const { id } = useParams();
  const { loginData } = useAuth();
  const { reset } = useForm();
  const [loading, setLoading] = useState(true);
  const [setData, setSetData] = useState(null);

  useEffect(() => {
    const getSet = async () => {
      if (!loginData?.access_token) return;

      try {
        const data = await fetchApi(`/sets/${id}`, "GET", null, loginData.access_token);
        setSetData(data.response);
        reset({
          title: data.response.title,
          description: data.response.description
        });
      } catch (error) {
        console.error(`Error fetching set: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    getSet();
  }, [id, loginData, reset]);

  if (loading) {
    return (
      <ContentWrapper title="Loading...">
        <p>Loading set details...</p>
      </ContentWrapper>
    );
  }

  if (!setData) {
    return (
      <ContentWrapper title="Error">
        <p>Set not found.</p>
      </ContentWrapper>
    );
  }

  return (
    <ContentWrapper title={`Update set: ${setData.title}`}>
      <SetForm mode="update" defaultValues={setData} />
    </ContentWrapper>
  );
};
