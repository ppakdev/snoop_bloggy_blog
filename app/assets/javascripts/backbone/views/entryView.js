App.EntryView = Backbone.View.extend({
  className: 'entry',
  initialize: function(){
    console.log('single entry view');
    this.template = HandlebarsTemplates['entries/entry'];
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.render);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  events: {
    'click span.destroy': 'destroyEntry',
  }

});
