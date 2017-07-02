// inter-component communication
// child notifies parent component
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
            this.$emit('applied', [this.coupon_code, is_valid]); 
            if (!is_valid) {
                this.coupon_code = '';
            }
            return;
            }
    }
});


new Vue({
    el: '#root',
    data: {
        coupon_validated: false,
        coupon_value: '',

    },
    methods: {
        react_to_coupon_checked: function (cval) {
            this.coupon_validated = cval[1];
            this.coupon_value = cval[0];
        }
    }
});
