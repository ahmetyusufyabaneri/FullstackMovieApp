const optionsRequest = (req, res) => {
  res.end("optionsRequest");

  res.setHeader(
    "Access-Control-Allow-Origin",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );

  res.setHeader("Access-Control-Allow-Origin", "Content-Type");
};

module.exports = optionsRequest;
