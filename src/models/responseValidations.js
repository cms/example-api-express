import SchemaObject from "schema-object";

const ResponseValidations = new SchemaObject({
  description: String,
  validationResult: { type: Boolean, required: true }
});

export default ResponseValidations;
