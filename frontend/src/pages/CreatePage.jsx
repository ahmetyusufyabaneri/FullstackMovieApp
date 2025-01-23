import InputField from "../components/InputField";
import { inputs } from "../constants/inputs";
import { api } from "../utils/api";

const CreatePage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const movieData = Object.fromEntries(formData.entries());

    movieData.genre = movieData.genre.split(",");
    movieData.cast = movieData.cast.split(",");
    console.log(movieData);

    api
      .post("/api/movies", movieData)
      .then(() => console.log("Success!"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-yellow-500 min-h-screen grid place-items-center px-4 py-8">
      <div className="bg-white w-full max-w-[1000px] p-10 rounded shadow-lg">
        <h1 className="text-2xl text-center font-semibold mb-8">
          Create New Movie
        </h1>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {inputs.map((props, index) => (
            <InputField key={index} {...props} />
          ))}
          <button
            className="border py-3 rounded-lg shadow hover:shadow-md 
          hover:bg-gray-200 duration-200"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
