// example using inline templates
// notice that the Vue.component does not have a template field declared
//
Vue.component('progress-view', {
    data() {
        return {
            completionRate: 90,
        }
    },
    methods: {
        improve: function() {
            if (this.completionRate === 100) {
                alert('you can\'t improve anymore\n\nYou are already at 100%\n\nThis isn\'t a sports interview');
            } else {
                this.completionRate++;
            }
        }
    },
        

});

new Vue({
    el: '#root',
});
