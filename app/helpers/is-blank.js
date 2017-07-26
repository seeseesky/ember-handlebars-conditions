import Ember from 'ember';

export function isBlank(params/*, hash*/) {
  return Ember.isBlank(params[0]);
}

export default Ember.Helper.helper(isBlank);
