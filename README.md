# joi-timezone

Provides a Joi rule to validate and transform deprecated IANA timezone strings

## Usage

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


