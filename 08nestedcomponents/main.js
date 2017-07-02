Vue.component('task-list', {
    // template must have a single root node 
    // hence the div that wraps all the tasks
    template: `
    <div>
        <task v-for="task in tasks">{{task.description}}</task>
    </div>
    `,

    data() {
        return {
            tasks: [
                {description: "do this", isdone: false},
                {description: "do that", isdone: false},
                {description: "do somethign else", isdone: false},
            ]
        }
    }

});


Vue.component('task', {
    template: '<li><slot></slot></li>'
});


new Vue({

    el: '#root',

});
