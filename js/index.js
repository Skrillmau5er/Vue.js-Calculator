Vue.component('calc-button', {
    props: ['value'],
    template: '<button class="button" @click="put(value)" >{{value}}</button>',
    methods: {
        put: function (v) {
            if(isNaN(v)){
                if(v === '+') calculator.addSign(v);
                else if(v === '-') calculator.addSign(v);
                else if(v === '*') calculator.addSign(v);
                else if(v === '/') calculator.addSign(v);
                else calculator.calculate();
            }
            else calculator.add(v);
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
            calculator.results = '';
            calculator.secondData = null;
            sign = '';
            calculator.answer = false;
        }
    }
});

var copyButton = new Vue({
    el: '#copyImage',
    methods: {
        copyResults: function () {
            var range = document.createRange();
            range.selectNode(document.getElementById('results'));
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand("copy");
            window.getSelection().removeRange(range);
            alert("The text was copied into your clipboard");
        }
    }
})

/*var history = new Vue({
    el: "#history",
    data: {
        history: null,
    },
    methods: {
        calc: function(hist){
            alert(hist);
        }
    }
});*/

var calculator = new Vue({
    el: "#results",
    data: {
        results: '',
        firstValue: null,
        secondValue: null,
        secondValHist: null,
        history: [],
        id: 1,
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
            
            this.secondValue = this.results;
            if(this.sign == '+') this.results = parseFloat(this.firstValue) + parseFloat(this.secondValue);

            else if(this.sign == '-') this.results = parseFloat(this.firstValue) - parseFloat(this.secondValue);

            else if(this.sign == '*') this.results = parseFloat(this.firstValue) * parseFloat(this.secondValue);

            else if(this.sign == '/') this.results = parseFloat(this.firstValue) / parseFloat(this.secondValue);
            
            //Push the answer and the previous values into the history array
            var hist = { id: this.id++, answer: this.results, firstValue: this.firstValue, secondValue: this.secondValue, sign: this.sign }
            this.addHistory(hist);
        },
        addHistory: function(hist){
            this.history.push(hist);
        }
    }
});