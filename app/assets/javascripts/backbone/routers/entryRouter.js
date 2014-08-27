App.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'entries/new': 'newEntry',
    'entries/:id/edit': 'editEntry'
  },

  initialize: function() {
    console.log('app router');
    App.Collections.entries = new App.EntryCollection();
    App.Views.entryListView = new App.EntryListView({
      collection: App.Collections.entries
    });
    App.Views.entryFormView = new App.EntryFormView({
      collection: App.Collections.entries
    });
  },

  index: function() {
    console.log('index page');
    App.Collections.entries.fetch({reset: true});
    $('#new-entry-form').hide();
  },

  newEntry: function() {
    console.log('new entry form');
    App.Collections.entries.fetch({reset: true});
    $('#new-entry-form').slideDown();
  }


});
