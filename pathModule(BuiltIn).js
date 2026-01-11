let path = require("path");
console.log(path.sep); //It shows how folders are separated on your OS

let filepath = path.join("Atharva", "Hulawale", "Info.txt"); //Combines parts of a file path. Automatically uses correct separator. Removes extra slashes
console.log(filepath);

let base = path.basename(filepath);//Extracts only the file name .Removes folder paths
console.log(base);

let absolute = path.resolve(__dirname, "Atharva", "Hulawale", "Info.txt");//Creates an absolute path.Starts from __dirname.Safely joins everything.&&&&__dirname is a Node.js global variable.It gives the absolute path of current folder.
console.log(absolute);
