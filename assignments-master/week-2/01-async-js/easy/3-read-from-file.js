let fs =require('fs');

fs.readFile('2-counter.js','utf8',(err,dara)=>{
    console.log(dara);
});

for(let i=0;i<10000000000000000;i++);
