import SchemaObject from "schema-object";
const NotEmptyString = { type: String, minLength: 1 };

const Error = new SchemaObject({
  errorType: {
    type: String,
    enum: ["COM", "SEG", "MSJ"],
    required: true
  },
  code: { type: NotEmptyString, required: true },
  description: { type: NotEmptyString, required: true }
});

export default Error;
