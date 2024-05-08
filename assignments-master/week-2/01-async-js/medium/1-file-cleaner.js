let fs=require('fs');

function call(data){
    let c=data[0];
    for(let i=1;i<data.length;i++)
    {
        if(data[i-1]!=' ')
        c += data[i];
    }
    return c;
}
fs.readFile('1.txt','utf8',(err,data)=>{
    data=call(data);
    fs.writeFile('1.txt',data,(err)=>{console.log(err);})
})