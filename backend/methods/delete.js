const fs = require("fs");

const deleteRequest = (req, res) => {
  const path = req.url.substring(0, req.url.lastIndexOf("/"));

  const id = req.url.split("/")[3];

  if (path === "/api/movies" && id) {
    const movies = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

    const foundMovie = movies.find((movie) => movie.id === id);

    if (!foundMovie) {
      res.writeHead(404);
      return res.end("Movie not found");
    }

    const filteredMovies = movies.filter((movie) => movie.id !== id);

    fs.writeFileSync("./data/movies.json", JSON.stringify(filteredMovies));

    res.writeHead(204);

    return res.end();
  }
};

module.exports = deleteRequest;
