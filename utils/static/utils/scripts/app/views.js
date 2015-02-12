define(['jquery', 'underscore', 'backbone', 'marionette', 'app/models'], function ($, _, Backbone, Marionette, models) {
    var ToDoView = Backbone.Marionette.ItemView.extend({
        tagName: 'li',
        template: Backbone.Marionette.TemplateCache.get("#list-item"),

        ui: {
            'toggleItemDone': '.toggle-item-done',
            'deleteItem': '.delete'
        },

        events: {
            "click @ui.toggleItemDone": "toggleDoneState",
            "click @ui.deleteItem": "deleteTodo"
        },

        onRender: function() {
            if (this.model.getDone()) {
                this.ui.toggleItemDone.prop("checked", true);
                this.ui.toggleItemDone.parent().addClass("completed");
            }
        },

        toggleDoneState: function() {
            var isDone = this.ui.toggleItemDone.prop("checked");
            this.model.setDone(isDone);
            if (this.model.getDone()) {
                this.ui.toggleItemDone.parent().addClass("completed");
            } else {
                this.ui.toggleItemDone.parent().removeClass("completed");
            }
        },

        deleteTodo: function() {
            this.model.destroy();
        }
    });

    var ToDoListView = Backbone.Marionette.CompositeView.extend({
        childView: ToDoView,
        childViewContainer: 'ul',
        template: Backbone.Marionette.TemplateCache.get("#list-view"),

        ui: {
            'addItem': '.add-item',
            'itemTitle': '.item-title'
        },

        events: {
            "click @ui.addItem": "addItem",
            "keypress #newTodoItem": "onKeyPress"
        },

        onKeyPress: function(e){
            if (e.keyCode == 13)
                this.addItem();
        },

        addItem: function() {
            var listItem = new models.ToDo({
                'done': false,
                'title': this.ui.itemTitle.val()
            });
            this.ui.itemTitle.val("");
            this.collection.create(listItem);
        }
    });

    return {
        ToDoView: ToDoView,
        ToDoListView: ToDoListView
    };
});
