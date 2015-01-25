define(['jquery', 'underscore', 'backbone', 'marionette', 'app/models'], function ($, _, Backbone, Marionette, models) {
    var ToDoView = Backbone.Marionette.ItemView.extend({
        tagName: 'li',
        template: Backbone.Marionette.TemplateCache.get("#list-item"),

        ui: {
            'itemDone': '.item-done'
        },

        events: {
            "click @ui.itemDone": "setDoneState"
        },

        onRender: function() {
            if (this.model.getDone()) {
                this.ui.itemDone.prop("checked", true);
            }
        },

        setDoneState: function() {
            var isDone = this.ui.itemDone.prop("checked");
            this.model.setDone(isDone);
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
            "click @ui.addItem": "addItem"
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
