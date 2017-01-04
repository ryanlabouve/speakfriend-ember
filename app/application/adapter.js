import DS from 'ember-data';
import config from 'speakfriend-ember/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.API.host
});
