import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Card from "../components/Card";
import Hero from "../components/Hero";

const MainPage = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["movies"],
    queryFn: () =>
      api
        .get("/api/movies")
        .then((res) => res.data)
        .catch((err) => console.log(err)),
  });

  return (
    <div className="">
      <Hero />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error} refetch={refetch} />
      ) : (
        <div
          className="grid grid-cols-1 mt-8 sm:grid-cols-2 lg:grid-cols-3 
        gap-10 p-5 md:px-10"
        >
          {data.map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MainPage;
