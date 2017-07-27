import Ember from 'ember';

export function isNone(params/*, hash*/) {
  return Ember.isNone(params);
}

export default Ember.Helper.helper(isNone);
