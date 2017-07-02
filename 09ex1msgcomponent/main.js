Vue.component('message', {
    props: ['title', 'body'],
    template:`
        <article class="message" v-show="isVisible">
        <div class="message-header">
          {{ title }}
          <button type="button" @click=hideModal>x</button>
        </div>
        <div class="message-body">
            {{ body }}
        </div>
        </article>
    `,
    data () {
        return {
            isVisible: true
        };
    },
    methods: {
        hideModal: function () {
            this.isVisible = false;
        }
    }
    
});


var app = new Vue({
    el: '#root',
});
