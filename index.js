"use strict";

// function add(first, second, callback) {
//     var result = first + second;
//     callback(result);
// }

// add(6, 4, function (num) {
//     for (var i = 0; i < num; i++) {
//         console.log("We are anonymous!");
//     }
// });


// $(document).ready(function () {
//     // Define variable in anonymous function
//     var z = 1;

//     function clickRecio(e) {
//         switch ($(e.target).attr("class")) {
//             case "b1":
//                 console.log("Has clickado el botón 1::::: " + z)
//                 break;
//             case "b2":
//                 console.log("Destrucción del click handler. desasignación de memoria")
//                 $('button').off("click");
//                 break;
//         }


//     }

//     $('button').on('click', clickRecio);
// });

// var a = 1;
// var b = 2;

// function inner() {
//       a = 4;    // not using `var`
//   var b = 3;    // using 'var' | Shadowing the global variable
// }

// inner();
// console.log(a);
// console.log(b);

// var a = 1;

// function foo() {
//     var a = 2;
//     console.log(a);
// }

// function bar() {
//     a = 3;
//     console.log(a);
// }

// foo();
// bar();
// console.log(a);

// var obj = {
//     value: 0,
//     color: 'red',
//     active: false,
//     split: function (separator) {

//     },
//     increment: function () { console.log(++this.value); },
//     decrement: function () { console.log(--this.value); },
// };

// obj.increment();


var value = 500;
var value = 500;
var obj = {
    value: 0,
    increment: function () {
        var that = this;
        that.value++;

        var innerFunction = function () {
            console.log(this.value);
        }

        innerFunction.apply(this); // Function invocation pattern
    }
}
obj.increment();


var city = "cadiz";

var obj = {
    city: "fuenla",
    foo: function () {
        console.log(city)
        console.log(this);
    }
};


var city = "cadiz";

var obj = {
    city: "fuenla",
    foo: function () {
        console.log(city)
		console.log(`la ciudad más chunga es: ${this.city}`)
        console.log(this);

		var findChungaCity = function () {
			console.log(this.city)
        }

		findChungaCity()
    }
};

obj.foo.apply(window)
obj.foo()