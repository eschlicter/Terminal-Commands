const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFile(file, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved');
  });
};

module.exports.mkdir = () => {
  fs.mkdir(path, (err) => {
    if (err) throw err;
    console.log('Directory has been created');
  });
};
