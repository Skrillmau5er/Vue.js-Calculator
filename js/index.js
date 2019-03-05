Vue.component('calc-button', {
    data: function() {
        return{
            number: 7
        }
    },
    props: ['value'],
    template: '<button class="button" @click="number">{{value}}</button>'

});

var calcArea = new Vue({
    el: '#calculator-area',
    methods: {
        put: function() {
            results.results += value
        }
    }
})

var seven = new Vue({
    el: "#seven",
    data: {
        number: 7
    },
    methods: {
        put: function () {
            results.calculate(this.number)
        }
    }
});

var eight = new Vue({
    el: "#eight",
    data: {
        number: 8
    },
    methods: {
        put: function () {
            results.calculate(this.number)
        }
    }
});

var nine = new Vue({
    el: "#nine",
    data: {
        number: 9
    },
    methods: {
        put: function () {
            results.calculate(this.number)
        }
    }
});

var six = new Vue({
    el: "#six",
    data: {
        number: 6
    },
    methods: {
        put: function () {
            results.calculate(this.number)
        }
    }
});

var five = new Vue({
    el: "#five",
    data: {
        number: 5
    },
    methods: {
        put: function () {
            results.calculate(this.number)
        }
    }
});

var four = new Vue({
    el: "#four",
    data: {
        number: 4
    },
    methods: {
        put: function () {
            results.calculate(this.number)
        }
    }
});

var three = new Vue({
    el: "#three",
    data: {
        number: 3
    },
    methods: {
        put: function () {
            results.calculate(this.number)
        }
    }
});

var two = new Vue({
    el: "#two",
    data: {
        number: 2
    },
    methods: {
        put: function () {
            results.calculate(this.number)
        }
    }
});

var one = new Vue({
    el: "#one",
    data: {
        number: 1
    },
    methods: {
        put: function () {
            results.calculate(this.number)
        }
    }
});

var zero = new Vue({
    el: "#zero",
    data: {
        number: 0
    },
    methods: {
        put: function () {
            results.calculate(this.number)
        }
    }
});

var plus = new Vue({
    el: '#plus',
    data: {
        sign: '+'
    },
    methods: {
        addSign: function (){
            results.addSign(this.sign)
        }
    }
});

var minus = new Vue({
    el: '#minus',
    data: {
        sign: '-'
    },
    methods: {
        addSign: function (){
            results.addSign(this.sign)
        }
    }
});

var divide = new Vue({
    el: '#divide',
    data: {
        sign: '/'
    },
    methods: {
        addSign: function (){
            results.addSign(this.sign)
        }
    }
});

var multiply = new Vue({
    el: '#multiply',
    data: {
        sign: '*'
    },
    methods: {
        addSign: function (){
            results.addSign(this.sign)
        }
    }
});

var equals = new Vue({
    el: '#equals',
    data: {
        sign: "="
    },
    methods: {
        doMath: function(){
            if(results.sign == '+'){
                results.results = parseInt(results.results) + parseInt(results.secondData)
            }
            else if(results.sign == '-'){
                results.results = parseInt(results.results) - parseInt(results.secondData)
            }
            else if(results.sign == '*'){
                results.results = parseInt(results.results) * parseInt(results.secondData)
            }
            else if(results.sign == '/'){
                results.results = parseFloat(results.secondData) / parseFloat(results.results)
            }
        }
    }
});

var clear = new Vue({
    el: '#clear',
    data: {
        sign: "C"
    },
    methods: {
        clear: function(){
            results.results = ''
            results.secondData = null
            sign = ''
        }
    }
});

var results = new Vue({
    el: "#results",
    data: {
        results: '',
        secondData: null,
        sign: '',
    },
    methods: {
        calculate: function(n){
            this.results += n
        },
        addSign: function(s){
            this.sign = s
            this.secondData = this.results
            this.results = ''
        }
    }
});