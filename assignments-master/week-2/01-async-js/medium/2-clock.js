function call(){
let hh='24';
let mm='59';
let ss='59';
setInterval(fn,1000);
function fn(){
    console.log(hh+':'+mm+':'+ss);
    let c=0;
    ss=parseInt(ss);
    ss+=1;
    if(ss>=60)
    {ss=0;c=1;}
    mm=parseInt(mm);
    mm+=c;
    c=0;
    if(mm>=60)
    {mm=0;c=1;}
    hh=parseInt(hh);
    hh+=c;
    if(hh>=24)
    hh=0;
    ss=ss.toString();
    mm=mm.toString();
    hh=hh.toString();
    ss=check(ss);
    mm=check(mm);
    hh=check(hh);
   
}
function check(v){
    if(v.length<2)
    return add(v);
    return v;
}
function add(c)
{
    c='0'+c;
    return c;
}
}

call();