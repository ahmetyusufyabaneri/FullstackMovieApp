const crypto = require("crypto");
const fs = require("fs");
const bodyParser = require("../utils/bodyParser");
const keys = require("../constants/keys");

const postRequest = async (req, res) => {
  if (req.url === "/api/movies") {
    const body = await bodyParser(req);
    console.log("body:", body);

    if (
      keys.some((key) => !body[key]) ||
      !body.genre.length > 0 ||
      !body.cast.length > 0
    ) {
      return res.end("Please complete the required fields");
    }

    body.id = crypto.randomUUID();

    const data = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

    data.push(body);

    fs.writeFileSync("./data/movies.json", JSON.stringify(data));

    res.writeHead(201);

    res.end(JSON.stringify(body));
  } else {
    res.writeHead(404);

    res.end("Request thrown on invalid road");
  }
};

module.exports = postRequest;
