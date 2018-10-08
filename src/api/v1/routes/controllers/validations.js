export default (req, res, next) => {
  console.log("Validations");
  res.json({ message: "Welcome to the CBS v1 API Validations endpoint" });
};
