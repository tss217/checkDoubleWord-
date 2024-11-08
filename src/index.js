
const fs = require('fs'); // fs is a Node.js module for file system operations.

const pathWay = process.argv; // process.argv is an array containing the command line arguments. 
const link = pathWay[2];

fs.readFile(link, 'utf8', (err, data) => {
    try{
        if(err) throw err;
        countWords(data);
    }catch(err){
        if(err.code === 'ENOENT')console.log('File not found');
        else console.log('ANOTHER ERROR', err);
    }

});

//do array with words
//count the duplicates
//return the number of duplicates

function countWords(text){
    const paragraph = getParagraphs(text);
    const count = paragraph.flatMap((paragraph)=>{
        if(!paragraph)return[];
        return checkDuplicateWords(paragraph);
    })
    console.log(count);
}


function getParagraphs(text){
    return text.toLowerCase().split('\n');
}


function cleannerWords(word){
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
}

function checkDuplicateWords(text){
    const wordList = text.split(' ');
    const result ={};

    wordList.forEach(word =>{
        const clearWord = cleannerWords(word);
        result[word] = (result[word] || 0) + 1;
    })

    return result;
}

