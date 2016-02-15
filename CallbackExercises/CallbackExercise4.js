var arr1 = [1,2,3]
var arr2 = [1,2,3]

function handleNumArrays(na1, na2, callback) {
    var arr = [];

    for (var i = 0, max = na1.length; i < max; i++) {
        var n = na1[i] + na2[i];
        arr.push(n);
    }

    callback(arr);
}

function stringify(arr) {
    console.log(arr.join(','));
}

function summarize(arr) {
    console.log(arr.reduce((a,b) => a + b, 0));
}

function multiply(arr) {
    console.log(arr.map(a => a * 10).join(','));
}

handleNumArrays(arr1, arr2, stringify);
handleNumArrays(arr1, arr2, summarize);
handleNumArrays(arr1, arr2, multiply);