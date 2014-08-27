App.EntryFormView = Backbone.View.extend({
  el: '#new-entry-form',
  initialize: function(){
    console.log('new form');
    this.template = HandlebarsTemplates['entries/form'],
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
  },

  events: {
    'click button.new-post': 'newEntry',
    'click span.cancel': 'cancel'
  },

  newEntry: function(){
    var data = {
      author: this.$("[name='author']").val(),
      avatar: this.$("[name='avatar']").val(),
      title: this.$("[name='title']").val(),
      content: this.$("[name='content']").val()
    };
    this.collection.create(data, {success: function() {
      $('input').val('');
      $('#new-entry-form').hide();
      App.router.navigate('');
    }});
  },

  cancel: function() {
    $('#new-entry-form').hide();
    App.router.navigate('');
  }
});
