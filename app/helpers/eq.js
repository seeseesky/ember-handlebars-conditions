import Ember from 'ember';

export function eq(params) {
  if(params[2] === "obj"){
    return JSON.stringify(params[0]) === JSON.stringify(params[1]) ;
  }
  return params[0] == params[1];
}

export default Ember.Helper.helper(eq);
