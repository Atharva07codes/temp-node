let { readFile, writeFile } = require("fs").promises;

// let util = require("util");
// let readFilePromice = util.promisify(readFile);
// let writeFilePromice = util.promisify(writeFile);

let start = async () => {
  try {
    let first = await readFile("./Atharva/First.txt", "utf-8");
    let second = await readFile("./Atharva/Second.txt", "utf-8");
    await writeFile(
      "./Atharva/result-mind-granade.txt",
      `This is cool :\n${first} \n${second}`,
      { flag: "w" }
    );
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

start();

// let getText = (path) => {
//     return new Promise((resolve, reject) => {
//       readFile(path, "utf-8", (err, res) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(res);
//         }
//       });
//     });
//   };

// getText("./Atharva/First.txt").then(result=>console.log(result)).catch(err=>constant.log(err));
// getText("./Atharva/Second.txt").then(result=>console.log(result)).catch(err=>constant.log(err));



// APPROACH 1: fs.promises + async/await (BEST & MODERN)
// const fs = require("fs").promises;

// async function start() {
//   try {
//     const first = await fs.readFile("./Atharva/First.txt", "utf-8");
//     const second = await fs.readFile("./Atharva/Second.txt", "utf-8");

//     await fs.writeFile(
//       "./Atharva/result-mind-granade.txt",
//       `This is cool :\n${first}\n${second}`,
//       { flag: "w" }
//     );

//     console.log(first);
//     console.log(second);
//   } catch (error) {
//     console.log(error);
//   }
// }

// start();

//APPROACH 2: util.promisify() (OLD BUT IMPORTANT)
// const fs = require("fs");
// const util = require("util");

// const readFilePromise = util.promisify(fs.readFile);
// const writeFilePromise = util.promisify(fs.writeFile);

// async function start() {
//   try {
//     const first = await readFilePromise("./Atharva/First.txt", "utf-8");
//     const second = await readFilePromise("./Atharva/Second.txt", "utf-8");

//     await writeFilePromise(
//       "./Atharva/result-mind-granade.txt",
//       `This is cool :\n${first}\n${second}`
//     );

//     console.log(first);
//     console.log(second);
//   } catch (err) {
//     console.log(err);
//   }
// }

// start();

//APPROACH 3: Manual Promise Wrapper (BEGINNER CORE)
// const fs = require("fs");

// function getText(path) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

// getText("./Atharva/First.txt")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// getText("./Atharva/Second.txt")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
