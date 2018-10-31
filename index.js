// function add(first, second, callback) {
//     var result = first + second;
//     callback(result);
// }

// add(6, 4, function (num) {
//     for (var i = 0; i < num; i++) {
//         console.log("We are anonymous!");
//     }
// });


$(document).ready(function () {
    // Define variable in anonymous function
    var z = 1;

    function clickRecio(e) {
        switch ($(e.target).attr("class")) {
            case "b1":
                console.log("Has clickado el botón 1::::: " + z)
                break;
            case "b2":
                console.log("Destrucción del click handler. desasignación de memoria")
                $('button').off("click");
                break;
        }


    }

    $('button').on('click', clickRecio);
});