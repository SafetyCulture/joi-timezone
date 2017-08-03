import BaseJoi from 'joi';
import {assert} from 'chai';

import JoiTimezone from '../lib';

const Joi = BaseJoi.extend(JoiTimezone);

describe('string', () => {
  describe('timezone()', () => {
    it('return error for invalid timezone', () => {
      const testValue = Joi.validate('Blah', Joi.string().timezone());
      assert.isOk(testValue.error, 'should produce an error');
      assert.isOk(testValue.error.name, 'should produce a ValidationError');
    });

    it('return error if timzone is not a string', () => {
      const testValue = Joi.validate(2, Joi.string().timezone());
      assert.isOk(testValue.error, 'should produce an error');
      assert.equal(testValue.error.details[0].message, '"value" must be a string', 'should produce a string error');
    });

    it('validates strings with a valid timezone', () => {
      const testZone = 'Australia/Melbourne';
      const testValue = Joi.validate(testZone, Joi.string().timezone());
      assert.isNotOk(testValue.error, 'should not produce an error');
      assert.equal(testValue.value, testZone);
    });

    it('validates and returns a moment object when returnMoment is set', () => {
      const testZone = 'Australia/Melbourne';
      const testValue = Joi.validate(testZone, Joi.string().timezone({returnMoment: true}));
      assert.isNotOk(testValue.error, 'should not produce an error');
      assert.isOk(testValue.value._isAMomentObject, 'should produce a moment object');
    });
  });
});
