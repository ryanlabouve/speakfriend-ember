import Ember from 'ember';
import _ from 'lodash';

export default Ember.Component.extend({
  selectedLangs: null,
  availibleLangs: Ember.computed('content', function() {
    let langs =
      this.get('content')
      .toArray()
      .map(i => i.get('contentJSON'))
      .map(i => Object.keys(i));
    langs = _.flatten(langs);
    langs = _.uniqBy(langs, l => l);
    return langs;
  }),

  init() {
    this._super(...arguments);
    this.set('selectedLangs', this.get('availibleLangs'));
  }
});
