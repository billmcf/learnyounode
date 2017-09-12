//console.log(process.argv)
let sum = 0
for (i=2; i<process.argv.length; i++){
    sum += +process.argv[i]
    //console.log('sum: ', sum, 'process.argv[i]: ', process.argv[i]);
}
// return sum
console.log(sum);
