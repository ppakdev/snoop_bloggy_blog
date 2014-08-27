App.EntryCollection = Backbone.Collection.extend({
  model: App.EntryModel,
  url: '/grumbles',
  initialize: function() {
    console.log('blog pound');
  },
  save: function(){
    this.each(function(model) {
      if (!model.has('id') || model.hasChanged()) { model.save(); }
    }, this)
  }
});
