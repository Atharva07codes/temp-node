let { readFile, writeFile } = require("fs");
readFile("./Atharva/First.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
  }
  let first = res;
  readFile("./Atharva/Second.txt", "utf8", (err, res) => {
    if (err) {
      console.log(err);
    }
    let second = res;
    writeFile(
      "./Atharva/New.txt",
      `Here is the both the files \n${first} \n${second}`,
      { flag: "w" },
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Data read and written scessfully in New.txt");
        }
      }
    );
  });
});



// const fs = require("fs/promises");

// async function createFile() {
//   try {
//     const first = await fs.readFile("./Atharva/First.txt", "utf8");
//     const second = await fs.readFile("./Atharva/Second.txt", "utf8");

//     await fs.writeFile(
//       "./Atharva/New.txt",
//       `Here are both the files:\n${first}\n${second}`,
//       { flag: "w" }
//     );

//     console.log("Data read and written successfully in New.txt");
//   } catch (err) {
//     console.log(err);
//   }
// }

// createFile();
