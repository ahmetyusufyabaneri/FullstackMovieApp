import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const rating = Number(movie.rating);
  const color =
    rating > 9
      ? "#0079FF"
      : rating > 7.5
      ? "#77B254"
      : rating > 5
      ? "#DF9755"
      : rating > 3
      ? "#FF7D29"
      : "#FF0001";

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="p-3 border rounded-sm cursor-pointer duration-150 
      hover:bg-gray-100 flex flex-col max-sm:flex-row max-sm:gap-5"
    >
      <div className="relative">
        <img
          src={`https://picsum.photos/seed/${movie.id}/200/300`}
          className="w-full object-cover rounded-sm max-h-64 
          max-sm:max-h-36"
        />
        <span
          style={{ backgroundColor: color }}
          className="absolute -top-2 -right-2 text-white
        font-semibold p-1 sm:p-2 rounded-full"
        >
          {Number(movie.rating).toFixed(1)}
        </span>
      </div>
      <div className="flex flex-col justify-between">
        <h3 className="text-xl font-semibold md:mt-4 line-clamp-2">
          {movie.title}
        </h3>
        <div>
          <p className="my-2 font-light">{movie.year}</p>
          <p className="flex items-center gap-3">
            {movie.genre.map((genre, index) => (
              <span key={index} className="bg-slate-300 p-1 rounded-lg">
                {genre}
              </span>
            ))}
          </p>
          <p className="bg-[#FF8080] py-1 px-2 w-fit rounded-lg mt-3">
            {movie.language}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
