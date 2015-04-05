import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    filterStr: {
      refreshModel: true
    },
  },
  model: function(params) {
    this.set('filterStr', params.filterStr);
    return  this.store.find('contact', { filterStr: params.filterStr})
  }
});
