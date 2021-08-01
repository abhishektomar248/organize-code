 /* function treeFn(src) {
    console.log("tree command executed with path : " + src);
    
}

module.exports = {
    treefxn: treeFn
}  */
let fs =require("fs");
let path =require("path");
function tree(srcPath){
    if(srcPath==undefined)
    srcPath=process.cwd();
    //console.log("tree command",srcPath);
    let content=fs.readdirSync(srcPath);
    //console,log(content);
    //
    let parentFolderName =path.basename(srcPath);
    let completePath="|---"+parentFolderName;
    for(let i=0;i<content.length;i++){
        completePath =completePath +"\n\t"+"|___"+content[i];

    }
    console.log(completePath)
}
module.exports ={
    treeFn: tree
}
