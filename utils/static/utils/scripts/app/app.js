define(['jquery', 'underscore', 'backbone', 'marionette', 'app/models', 'app/views'], function ($, _, Backbone, Marionette, models, views) {
    console.log('hello world!');

    // Load library/vendor modules using
    // full IDs, like:
    // var print = require('print');

    var initialize = function() {
        var App = new Marionette.Application();
        App.start();

        var toDoList = new models.ToDoList([
            {'done': false, 'title': 'I am Ignio Montoya.'},
            {'done': true, 'title': 'You killed my father, prepare to die!'}
        ]);

        // initializing collection view
        var toDoListView = new views.ToDoListView({
            collection: toDoList,
            el: '#put-list-here'
        });

        // render it up
        toDoListView.render();
    };

    return {
        initialize: initialize
    };
});
