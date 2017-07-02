Vue.component('task', {
    template: '<li><slot></slot> completed: {{isdone}}</li>' ,
    
    // for components data must be a function 
    // otherwise all components would have the same data
    // this is some scoping voodoo
    data() {
        return {
            // by default all tasks are incomplete
            isdone: false
        };
   }

});

new Vue({
    el: '#root',
});
