const fs = require('fs');
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

const [jack, github] = profileDataArgs;

console.log(jack, github);

const pageHTML = generatePage(jack, github);

    
/*const printProfileData = profileDataArr => {
    // this...
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log('===============')

    // Is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);*/

fs.writeFile('./index.html', pageHTML, err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });
  