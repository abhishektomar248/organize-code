let helpObj = require("./help");
let treeObj = require("../../tree");
let organizeObj = require("../../organize");
let inputArr = process.argv.slice(2);
let command = inputArr[0];
switch (command) {
    case "tree":
        // node main.js tree "C:\Users\Ritik Singh\Desktop\Batches\PP_12_21\JS\Module_1_FS\randomFolder"   
        treeObj.treefxn(inputArr[1]);
        break;
        //  input -> node main.js organize "C:\Users\Ritik Singh\Desktop\Batches\PP_12_21\JS\Module_1_FS\randomFolder"
    case "organize":
        organizeObj.organizefxn(inputArr[1])
        break;
    case "help":
        helpObj.helpfxn();
        break;
    default:
        console.log("🙏 kindly enter the correct cmd");
        break; 
}
// main input
//  input -> node main.js tree "path"
// Print-> tree command executed with path ""
// Print -> organize command executed with path ""
//  input -> node main.js help 

 // Print -> list of all the commands
            // 1. node main.js tree "path"

            // 2. node main.js organize "path"
            // 3. node main.js help
            let helpobj=require("./commands/help");
/* let treeobj=require("./commands/tree");
let organizeobj=require("./commands/organize");

let inarr=process.argv.slice(2);
let command=inarr[0];
let path=inarr[1];

if(command=='tree')
{
  treeobj.fxn(path);
}
else if(command=='help')
{
  helpobj.fxn();
}
else if(command=='organize')
{
   organizeobj.fxn(path);
} */