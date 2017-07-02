// global event dispatcher
//
// probably a bad idea as they recommend using dedicated state-management
// like Vuex
//
// see: https://vuejs.org/v2/guide/components.html#Non-Parent-Child-Communication
// FOR SOME REASON THIS DOES NOT WORK UNLESS I DO REALLY NASTY STUFF
// see created() method in coupon-display component

var godObject = new Vue();

Vue.component('coupon', {
    template:
    `
    <input placeholder="enter coupon code" v-model="coupon_code" @blur="validate"/>
    `,
    data () {
        return {
            coupon_code: ''
        }
    },
    methods: {
        validate: function () {
            // dummy validation code
            var is_valid = this.coupon_code.length === 5;
            godObject.$emit('applied', {value: this.coupon_code, isvalid: is_valid}); 
            if (!is_valid) {
                this.coupon_code = '';
            }
            return;
            }
    }
});


var cdisp = Vue.component('coupon-display', {
    template:
    `
      <div v-show="coupon_validated">
        <h1>Congratulations your coupon: {{coupon_value}} is valid</h1>
      </div>

    `,
    data () {
        return {
            coupon_validated: false,
            coupon_value: '',
        }
    },
    created() {
        var reference = this;
        godObject.$on('applied', function(cdata)  {
            reference._data.coupon_validated = cdata.isvalid;
            reference._data.coupon_value = cdata.value;
            }
        );
    },
});

// root component
new Vue({
    el: '#root',
    });
