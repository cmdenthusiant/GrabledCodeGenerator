const fs = require('fs');
const fsp = fs.promises;
const rl= require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});
function codeGen(n){
    return Array(n).fill().reduce(a=>a+String.fromCharCode(Math.round(Math.random()*100)),'');
}
(function main(){
    rl.question('Code size (KB):',(size)=>
    rl.question('File writeIn:',async Fn=>{
        await fsp.writeFile(Fn,'');
        for(let i=size;i>0;i-=1024){
            await fsp.appendFile(Fn,codeGen(i>1024?1048576:i*1024));
            process.stdout.write('Generated '+(size-i)+' KB\r');
        }
        console.log('Generated grabled code to '+Fn);
        main();
    })
    )
})()