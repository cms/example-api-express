import SchemaObject from 'schema-object';

const ResponseValidations = new SchemaObject({
    description: String,
    validationResult: Boolean
});

export default ResponseValidations;