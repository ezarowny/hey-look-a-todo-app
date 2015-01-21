define('app/models', [''], function() {
    var ToDo = Backbone.Model.extend({
        getDone: function() {
            return this.get("done");
        },

        setDone: function(isDone) {
            this.set("done", isDone);
        }
    });

    var ToDoList = Backbone.Collection.extend({
        model: ToDo
    });

    return {
        ToDo: ToDo,
        ToDoList: ToDoList
    };
)};
