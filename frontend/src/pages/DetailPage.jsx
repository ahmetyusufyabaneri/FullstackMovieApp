import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { FaTrash } from "react-icons/fa";
import RatingField from "../components/RatingField";
import Field from "../components/Field";
import ListFields from "../components/ListFields";

const DetailPage = () => {
  const { id } = useParams();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["movie"],
    queryFn: () => api.get(`/api/movies/${id}`).then((res) => res.data),
  });

  if (isLoading) return <Loader />;

  if (error) return <Error info={error} refetch={refetch} />;

  return (
    <div className="p-10">
      <div className="flex justify-end">
        <button className="bg-red-500 text-white p-2 rounded-sm duration-100 hover:bg-red-400">
          <FaTrash />
        </button>
      </div>
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <div>
          <img
            src={`https://picsum.photos/seed/${id}/300/400`}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold">{data.title}</h1>
            <p>{data.description}</p>
          </div>
          <RatingField
            label={"Audience Score:"}
            value={Number(data.rating).toFixed(1)}
            data={data}
          />
          <ListFields label={"Genre"} array={data.genre} />@
          <Field label={"Language:"} value={data.language} />
          <Field label={"Duration:"} value={data.duration} />
          <Field label={"Year:"} value={data.year} />
          <Field label={"Director:"} value={data.director} />
          <ListFields label={"Cast"} array={data.cast} />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
