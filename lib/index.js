export class FieldValidationError extends Error {
  constructor(fields) {
    if (!fields) {
      throw new TypeError('The `fields` argument is required');
    }

    super();

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.fields = fields;
  }
}

FieldValidationError.prototype.name = 'FieldValidationError';
FieldValidationError.prototype.message = '';
