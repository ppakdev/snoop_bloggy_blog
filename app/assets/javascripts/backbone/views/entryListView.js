App.EntryListView = Backbone.View.extend({
  el: '#entries-container',
  initialize: function(){
    console.log('entry list view');
    this.listenTo(this.collection, 'add', this.addOne);
    this.listenTo(this.collection, 'reset', this.addAll);
  },

  addOne: function(entry) {
    var entryView = new App.EntryView({model: entry})
    entryView.$el.insertAfter(this.$('hr'));
  },

  addAll: function() {
    this.collection.each(function(entry){
      this.addOne(entry);
    }, this)
  },

  events: {
    'click span.new': 'showForm'
  },

  showForm: function() {
    App.router.navigate('entries/new');
    $('#entry-form').slideDown();
  }
});
