// var landen = new Array("Frankrijk", "Kroatië", "Beglië");

// function toonWinnaars1(input) {
//     document.write("<br>Op plaats 1 staat : " + input + "." + "<br>");
// }

// function toonWinnaars2(input) {
//     document.write("<br>Op plaats 2 staat : " + input + "." + "<br>");
// }

// function toonWinnaars3(input) {
//     document.write("<br>Op plaats 3 staat : " + input + ".");
// }

function toonWinnaars() {
    var winnaars = ["Frankrijk", "Kroatië", "België"];
    var lengte = winnaars.length;
    for (var i = 0; i < lengte; i++) {
        document.write("<p>Op plaats " + (i + 1) + " staat : " + winnaars[i] + ".</p>")
    }
}
toonWinnaars();