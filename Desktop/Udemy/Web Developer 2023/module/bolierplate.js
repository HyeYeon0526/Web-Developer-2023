

// 비동기버전
// fs.mkdir('/tmp/a/apple', { recursive: true }, (err) => {
//     console.log("in the callback");
//     if (err) throw err;
//   });

// console.log("I come after mkdir");



//동기버전
const fs = require('fs');
const folderName = process.argv[2] || 'Project'
const data = ""

try{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`,data);
    fs.writeFileSync(`${folderName}/app.js`,data);
    fs.writeFileSync(`${folderName}/.css`,data);
} catch(e) {
    console.log('SOMETHING WENT WRONG');
}
