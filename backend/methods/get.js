const fs = require("fs");

const getRequest = (req, res) => {
  const path = req.url.slice(0, 11);

  const id = req.url.split("/")[3];

  const param = req.url.split("=").pop().toLowerCase().trim();

  console.log(param);

  if (path === "/api/movies") {
    const movies = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

    if (param && param !== "/api/movies") {
      const filtered = movies.filter((movie) => movie.title.includes(param));

      return res.end(JSON.stringify(filtered));
    }

    return res.end(JSON.stringify(movies));
  }

  if (path === "/api/movies" && id) {
    const data = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

    const movie = data.find((item) => item.id === id);

    if (movie) {
      return res.end(JSON.stringify(movie));
    }

    res.writeHead(404);

    return res.end(JSON.stringify({ message: "Movie not found" }));
  }

  return res.end(JSON.stringify({ message: "No Path Found" }));
};

module.exports = getRequest;
