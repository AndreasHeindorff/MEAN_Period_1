var i;
var sum = 0;

for(i=2; i < process.argv.length; i++){
    sum += Number(process.argv[i]);
}
var a = {};
console.log(sum);