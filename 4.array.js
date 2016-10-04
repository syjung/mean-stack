var a = [1,3,2,11];

/*
a.sort();
console.log(a);

function cbCompare(a,b){
    console.log('cbCompare', a, b);
    return a-b;
}
a.sort(cbCompare);
console.log(a);
*/

a.sort(function(a,b){
    return a-b;
});
console.log(a);
