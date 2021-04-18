/*
In index.js you will see five console.log statements. 
Your goal is to have them log to the console in the order that they state without rearanging them.

The output should look like this:
Print First
Print Second
Print Third
Print Forth
Print Fifth

Your solution should include one console.log left as is.

The other statements should use globals available within node.js to run the console.log statement at the appropriate time in the event loop.

There are multiple ways to accomplish this, but you must use at least three different methods.
*/

setTimeout(() => {
    console.log("Print Fifth");
}, 1000)

setTimeout(() => {
    console.log("Print Third");  
},0)

process.nextTick(() => {
    console.log('Print Second');  
})

console.log('Print First');

setImmediate(() => {
    console.log("Print Forth");
})
