import DS from 'ember-data';
import Ember from 'ember';

const {
  computed
} = Ember;

export default DS.Model.extend({
  slug: DS.attr('string'),

  name: computed('slug', function() {
    return Ember.String.capitalize(this.get('slug'));
  }),

  content: DS.attr(),

  contentJSON: Ember.computed('content', function() {
    if (this.get('content')) {
      return JSON.parse(this.get('content'));
    }
  })
});
