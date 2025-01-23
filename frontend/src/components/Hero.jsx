const Hero = () => {
  return (
    <div
      className="bg-[linear-gradient(#00000079,#00000080),url('hero.jpg')] 
    bg-center bg-no-repeat bg-cover px-10 py-20 lg:px-20 text-white"
    >
      <h1 className="text-4xl md:text-5xl font-bold">Welcome</h1>
      <h2 className="text-2xl md:text-3xl font-semibold">
        Discover Millions of Movies, Series and Actors
      </h2>
      <form className="rounded-full overflow-hidden flex mt-5">
        <input
          type="text"
          placeholder="Search.."
          className="w-full py-2 px-4 text-black border-none outline-none"
        />
        <button
          className="bg-blue-500 px-5 font-semibold duration-300 
        hover:bg-blue-600"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Hero;
