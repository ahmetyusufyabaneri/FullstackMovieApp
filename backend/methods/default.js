const defaultRequest = (res) => {
  res.statusCode = 404;

  res.write(JSON.stringify({ message: "Undefined" }));

  res.end();
};

module.exports = defaultRequest;
