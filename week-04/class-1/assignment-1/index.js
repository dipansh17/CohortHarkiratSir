const { Command } = require("commander");
const program = new Command();
const fs = require("fs");
program
  .name("index")
  .description("CLI to some JavaScript count words")
  .version("0.8.0");

program
  .command("count")
  .description("count number in file")
  .argument("<file>", "file to count")
  .action((file) => {
    function countWords(filename) {
      fs.readFile(filename, "utf-8", function (err, data) {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
          if (
            data[0] == " " ||
            data[data.length] == " " ||
            data[i] === data[i + 1]
          )
            continue;
          if (data[i] == " ") {
            total++;
          }
        }
        console.log(total + 1 + "  words are there in " + `${filename}`);
      });
    }
    countWords("a.txt");
  });
program.parse();
