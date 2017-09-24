import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        title: this.get('title') ? this.get('title') : "whts the distance between mombasa and nirobi?",
        author: this.get('author') ? this.get('author') : "juma",
        body: this.get('body') ? this.get('body') : "",
      };
    this.sendAction('saveQuestion', params);
  }
}

});
