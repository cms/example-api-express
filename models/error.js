import SchemaObject from 'schema-object';

const Error = new SchemaObject({
    errorType: { type: NotEmptyString, enum: ['COM', 'NEG', 'MSJ'] },
    code: String,
    description: String
});

export default Error;