import Joi from 'joi';
import moment from 'moment-timezone';

module.exports = {
  base: Joi.string(),
  name: 'string',
  language: { timezone: 'timezone failure'},
  rules: [{
    name: 'timezone',
    validate(params, value, state, options) {
      // todo add validation in here
      if (true) {
        return this.createError('string.timezone', { v: value }, state, options);
      }

      return value;
    }
  }]
};
