import Ember from 'ember';

export function lte(params/*, hash*/) {
  if(params[2] == null){
    return parseFloat(params[0]) <= parseFloat(params[1]);
  }else if(params[2] == "string"){
    return params[0] <= params[1];
  }

}

export default Ember.Helper.helper(lte);
