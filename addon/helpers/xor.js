import Ember from 'ember';

export function xor(params/*, hash*/) {
  return (params[0] && !params[1] || !params[0] && params[1]);
}

export default Ember.Helper.helper(xor);
