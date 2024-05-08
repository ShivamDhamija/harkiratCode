let fs=require('fs');

fs.readFile('2-counter.js','utf8',(err,data)=>{
    data+='//shivam made changes using4 file';
    fs.writeFile('2-counter.js',data,(err)=>{
        console.log(err);
    })
})