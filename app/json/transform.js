import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    return JSON.stringify(serialized);
  },

  serialize(deserialized) {
    if (deserialized) {
      return JSON.parse(deserialized);
    }
    return null;
  }
});
