const fs = require("fs");

const getRequest = (req, res) => {
  const path = req.url.substring(0, req.url.lastIndexOf("/"));

  const id = req.url.split("/")[3];

  if (req.url === "/api/movies") {
    const movies = fs.readFileSync("./data/movies.json", "utf-8");

    return res.end(movies);
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
