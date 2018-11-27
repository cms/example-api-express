import queryString from "query-string";

export default (req, res, next) => {
  const { authorization } = req.headers;
  const {
    query: { customerId, customerIdType, endPoint }
  } = queryString.parseUrl(req.url);

  console.log(customerId, customerIdType, endPoint);
  console.log(authorization);
  console.log("Validations");

  res.json({ message: "Welcome to the CBS v1 API Validations endpoint" });
};
