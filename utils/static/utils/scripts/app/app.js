define(['jquery', 'underscore', 'backbone', 'marionette', 'app/models', 'app/views'], function ($, _, Backbone, Marionette, models, views) {
    var initialize = function() {
        (function() {
            var _sync = Backbone.sync;
            Backbone.sync = function(method, model, options) {
                options.beforeSend = function(xhr) {
                    xhr.setRequestHeader('X-CSRFToken', config.CSRF_TOKEN);
                };
                return _sync(method, model, options);
            };
        })();

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
