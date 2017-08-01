import BaseJoi from 'joi';
import {assert} from 'chai';

import JoiTimezone from '../lib';

const Joi = BaseJoi.extend(JoiTimezone);

describe('string', () => {
  describe('Timezone()', () => {
    it('validates strings with a valid timezone', () => {
      assert.equal(true, false, 'should output the input value');
    });
  });
});
