var app = new Vue({
    el: '#root',
    data: {
        tasks: [
            {description: "learn vue.js", isdone: false},
            {description: "learn jquery", isdone: false},
            {description: "learn sapui5", isdone: false},
            {description: "learn to read", isdone: true},
            {description: "learn to use the toilet", isdone: true},
        ]
    },
    methods: {
        toggleState: function(task) {
            task.isdone = !task.isdone;
        }
    },
    computed: {
        completedTasks: function () {
            return this.tasks.filter(function(task) {
                return task.isdone;
            })
        },
        incompletedTasks: function () {
            return this.tasks.filter((task) => {return !task.isdone;});
        }
    }
});
