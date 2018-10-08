import SchemaObject from "schema-object";
const NotEmptyString = { type: String, minLength: 1 };

const Error = new SchemaObject({
  errorType: { type: NotEmptyString, enum: ["COM", "SEG", "MSJ"] },
  code: String,
  description: String
});

export default Error;
