function compareTriplets(a, b) {
    var aliceScore = 0 
    var bobScore = 0 
    for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) { aliceScore++ }
        if (b[i] > a[i]) { bobScore++ }
    }
    return [aliceScore, bobScore]
}

var a = [17, 28, 30]
var b = [99, 16, 8]
console.log(compareTriplets(a, b));

function compareTriplets(a, b) {
    var aliceScore = 0 
    var bobScore = 0 
    for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) { aliceScore++ }
        if (b[i] > a[i]) { bobScore++ }
    }
    return [aliceScore, bobScore]
}