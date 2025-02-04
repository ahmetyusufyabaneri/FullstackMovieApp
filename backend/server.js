const http = require("http");
const getRequest = require("./methods/get");
const postRequest = require("./methods/post");
const deleteRequest = require("./methods/delete");
const defaultRequest = require("./methods/default");
const optionsRequest = require("./methods/options");

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "application/json");

  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");

  console.log(req.method);

  switch (req.method) {
    case "GET":
      return getRequest(req, res);

    case "POST":
      return postRequest(req, res);

    case "DELETE":
      return deleteRequest(req, res);

    case "OPTIONS":
      return optionsRequest(res);

    default:
      return defaultRequest(res);
  }
});

const port = 4080;

server.listen(port, () => {
  console.log("Listening..");
});
