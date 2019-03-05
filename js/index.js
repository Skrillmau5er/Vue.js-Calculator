Vue.component('calc-button', {
    props: ['value'],
    template: '<button class="button" @click="put(value)" >{{value}}</button>',
    methods: {
        put: function (v) {
            if(isNaN(v)){
                if(v === '+') results.addSign(v);
                else if(v === '-') results.addSign(v);
                else if(v === '*') results.addSign(v);
                else if(v === '/') results.addSign(v);
                else results.calculate();
            }
            else results.add(v);
        }
    }
});

var calcArea = new Vue({
    el: '#calculator-area',
    data:{
        buttons: [
            { id:1, value: 7 },
            { id:2, value: 8 },
            { id:3, value: 9 },
            { id:4, value: 4 },
            { id:5, value: 5 },
            { id:6, value: 6 },
            { id:7, value: 1 },
            { id:8, value: 2 },
            { id:9, value: 3 },
            { id:10, value: '+' },
            { id:11, value: 0 },
            { id:12, value: '-' },
            { id:13, value: '*' },
            { id:14, value: '=' },
            { id:15, value: '/' },
        ]
    }
});

var clear = new Vue({
    el: '#clear',
    data: {
        sign: "C"
    },
    methods: {
        clear: function(){
            results.results = '';
            results.secondData = null;
            sign = '';
            results.answer = false;
        }
    }
});

var results = new Vue({
    el: "#results",
    data: {
        results: '',
        firstValue: null,
        secondValue: null,
        secondValHist: null,
        sign: '',
    },
    methods: {
        add: function(n){
            if(this.results == this.sign) this.results = '';
            this.results += n;
        },
        addSign: function(s){
            this.sign = s;
            this.firstValue = this.results;
            this.results = this.sign;
        },
        calculate: function (){
            /*if(this.) {
                this.firstValue = this.secondValue;
                this.secondValue = this.secondValHist;
            }
            else{
                this.secondValHist = this.secondValue;
                
            }*/
            this.secondValue = this.results;
            if(this.sign == '+') this.results = parseFloat(this.firstValue) + parseFloat(this.secondValue);

            else if(this.sign == '-') this.results = parseFloat(results.firstValue) - parseFloat(this.secondValue);

            else if(this.sign == '*') this.results = parseFloat(results.firstValue) * parseFloat(this.secondValue);

            else if(this.sign == '/') this.results = parseFloat(results.firstValue) / parseFloat(this.secondValue);
        }
    }
});