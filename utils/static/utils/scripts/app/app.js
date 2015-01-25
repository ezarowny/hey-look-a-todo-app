define(['jquery', 'underscore', 'backbone', 'marionette', 'app/models', 'app/views'], function ($, _, Backbone, Marionette, models, views) {
    var initialize = function() {
        // var App = new Marionette.Application();
        // App.start();

        var toDoList = new models.ToDoList();
        toDoList.fetch({
            success: function(c) {
                (new views.ToDoListView({
                    collection: c,
                    el: '#put-list-here'
                })).render();
            }
        });
    };

    return {
        initialize: initialize
    };
});
