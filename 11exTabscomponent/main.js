Vue.component('tabs', {
    template:
    `
    <div>
        <div class="tabs">
         <ul>
          <li v-for="tab in innerTabs" :class="{'is-active': tab.isActive}">
              <a :href="tab.href" @click="activate(tab)">{{tab.name}}</a>
          </li>
         </ul>
        </div>

        <div class="tabs-details">
         <slot></slot>
        </div>
    </div>
    `,
    data () {
        return {
            innerTabs: []
        }
    },
    methods: {
        activate: function(selectedtab) {
            this.innerTabs.forEach(tab => {
                tab.isActive = tab.name === selectedtab.name; 
            });
        }
    },
    created() {
        this.innerTabs = this.$children;
    },
});

Vue.component('tab', {
    template:
    `
    <div v-show="isActive"><slot></slot></div>
    `,
    props: {
        name: {required:true},
        selected: {default: false},
    },
    data () {
        return {
            isActive: false
        }
    },
    mounted () {
        this.isActive = this.selected;
    },
    computed: {
        href () {
            return "#" + this.name.toLowerCase().replace(/ /g, '-');
        }
    }
});


new Vue({
    el: '#root',
});
