function c(i)
{
setTimeout(call,1000);
function call(){
    console.log(i);
    i+=1;
c(i);
}
return i;
}
c(0);//shivam made changes using4 file