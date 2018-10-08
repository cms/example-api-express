import SchemaObject from "schema-object";

const ResponseValidations = new SchemaObject({
  validationResult: { type: Boolean, required: true }
});

export default ResponseValidations;
