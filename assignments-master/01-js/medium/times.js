/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/
calculateTime();
function calculateTime() {
    let s=0;
    let t= new Date().getSeconds();
    for(let i=1;i<100;i++)
    s +=i;
    console.log(new Date().getSeconds()-t);
    s=0;
    t= new Date().getSeconds();
    for(let i=1;i<100000;i++)
    s +=i;
    console.log(new Date().getSeconds()-t);
    s=0;
    t= new Date().getSeconds();
    for(let i=1;i<1000000000;i++)
    s +=i;
    console.log(new Date().getSeconds()-t);
    return 0.01;
}