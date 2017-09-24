import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        title: this.get('title') ? this.get('title') : "How do I write a question?",
        author: this.get('author') ? this.get('author') : "Anonymous",
        body: this.get('body') ? this.get('body') : "",
      };
    this.sendAction('saveQuestion', params);
  }
}

});
