# FieldValidationError

> When you've messed something up

[![Dependency Status](https://david-dm.org/fatfisz/field-validation-error.svg)](https://david-dm.org/fatfisz/field-validation-error)
[![devDependency Status](https://david-dm.org/fatfisz/field-validation-error/dev-status.svg)](https://david-dm.org/fatfisz/field-validation-error#info=devDependencies)

An exception for use in certain situations (e.g. to signal that some fields didn't pass validation).
Created because of a need for a cross-package standard exception.

## Getting started

Install the package with this command:
```shell
npm install field-validation-error --save
```

## Usage

```js
// Import ES6-style
import FieldValidationError from 'field-validation-error';

// Or CommonJS-style
const FieldValidationError = require('field-validation-error');

// Then just use like this:
throw new FieldValidationError({ name: 'Name is missing' });

// You can get access to the fields on a thrown exception using the `fields` property:
try {
  ...
} catch (err) {
  if (err instanceof FieldValidationError) {
    console.error('Invalid fields:', err.fields);
  }
}
```

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.

## License

Copyright (c) 2016 Rafał Ruciński. Licensed under the WTFPL license.
