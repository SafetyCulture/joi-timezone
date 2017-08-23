# joi-timezone

Provides a Joi rule to validate IANA timezone strings using moment-timezone

[![Build Status](https://travis-ci.org/SafetyCulture/joi-timezone.svg?branch=master)](https://travis-ci.org/SafetyCulture/joi-timezone)
[![Coverage Status](https://coveralls.io/repos/github/SafetyCulture/joi-timezone/badge.svg)](https://coveralls.io/github/SafetyCulture/joi-timezone)

## Usage

Note: **requires** Joi version >= 9

```js
import BaseJoi from 'joi';
import JoiTimezone from 'joi-timezone';

const Joi = BaseJoi.extend(JoiTimezone);

// Create a joi schema using the timezone validator;
const schema = Joi.string().timezone();
```

Results with valid timezone:
```js
Joi.validate("Melbourne/Australia", Joi.string().timezone());
/*
  {
    error: null,
    value: "Melbourne/Australia"
  }
 */
```

Results with valid timezone returning a moment object:
```js
Joi.validate("Melbourne/Australia", Joi.string().timezone({returnMoment: true}));
/*
  {
    error: null,
    value: {
      ...moment object
    }
  }
 */
```

Results with invalid timezone:
```js
Joi.validate("Some rubbish", Joi.string().timezone());
/*
{ error: {
    [ValidationError: "value" timezone failure]
    isJoi: true,
    name: 'ValidationError',
    details: [{
      message: '"value" timezone failure',
      path: 'value',
      type: 'string.timezone',
      context: { v: 'Some rubbish', key: 'value' }
    }],
    ...
  },
  value: 'Some rubbish'
}
 */
```


