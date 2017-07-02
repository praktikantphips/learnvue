// modal component with named slots
//

Vue.component('modal', {
    template:
    `
    <div class="modal is-active">


      <div class="modal-background"></div>


      <div class="modal-card">

        <header class="modal-card-head">
          <p class="modal-card-title">
            <slot name="header"></slot>
          </p>

          <button @click="$emit('close')" class="delete"></button>
        </header>

        <section class="modal-card-body">
          <slot>
            Defaul content for your modal card
          </slot>
        </section>

        <footer class="modal-card-foot">
          <slot name="footer">
            <a class="button is-success">OK</a>
          </slot>
        </footer>

      </div>
      

    </div>
    `,
});

var mainVue = new Vue({
    el: '#root',
    data: {
        isvisible: true
    }
});
