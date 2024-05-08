function call(val){
    let i=val;
    let r=setInterval(myTimer, 1000);

function myTimer() {
  console.log(i);
  i+=1;
}
return r;
}
let c=call(0);
setTimeout(() => {
    clearInterval(c);
    console.log('Interval stopped after 10 seconds.');
  }, 10000);