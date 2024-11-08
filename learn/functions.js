
function getNameStudaent(name, nota){
    console.log(`name: ${name} nota: ${nota}`);

}

getNameStudaent("ana",10); // maria

//---------------------------------------------

const soma = (a,b) => {
    return a + b;
}

console.log(soma(2,3)); // 5

//---------------------------------------------

const reproved = (nota, missedClasses) => {
    if(nota >= 7 && missedClasses <= 4){
        return true;
    } else {
        return false;
    }
};

console.log(reproved(8,3)); // true