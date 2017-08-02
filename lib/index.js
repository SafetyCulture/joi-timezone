import Joi from 'joi';
import moment from 'moment-timezone';

module.exports = {
  base: Joi.string(),
  name: 'string',
  language: { timezone: 'timezone failure'},
  rules: [{
    name: 'timezone',
    params: {
      q: Joi.object().keys({
        returnMoment: Joi.boolean()
      })
    },
    validate(params, value, state, options) {
      if (!moment.tz.zone(value)) {
        return this.createError('string.timezone', { v: value }, state, options);
      }
      return params.q ? moment.tz(value) : value;
    }
  }]
};
