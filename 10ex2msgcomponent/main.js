Vue.component('modal', {
    template:
    `
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <slot></slot>
        </div>
      </div>
      <button class="modal-close" @click="$emit('notifyclose')"></button>
    </div>
    `,
});

new Vue({
    el: '#root',
    data: {
        modalisVisible: false
    },
    methods: {
        displayModal: function () {
            this.modalisVisible = true;
        },
    }
});
