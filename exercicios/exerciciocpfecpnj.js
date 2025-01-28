let stringify = '712.774.251-08'

function cpfValidator(cpf) {
    let regex = /[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}/;

    return regex.test(cpf)
}


function cpfCalculator(cpf) {
    cpf = cpf.split(/[-]/)
    let digit = cpf[1]
    let firstBlock = cpf[0]
    firstBlock = firstBlock.replace(/\./g, '');

    let treatedCPF = firstBlock
    treatedCPF = treatedCPF + digit

    // pra multiplicar e somar todos os numeros do bloco 1

    firstBlock = firstBlock + verifyFirstDigit(firstBlock)
    firstBlock = firstBlock + verifyFirstDigit(firstBlock, true)

    if (treatedCPF == firstBlock) {
        console.log('CPF VALIDO!')
    } else {
        console.log("CPF INVALIDO!")
    }
    //
}

function verifyFirstDigit(firstBlock, validateLast = false) {
    let c = 0
    let Som = 0
    for (let i = validateLast ? 11 : 10; i >= 2; i--) {
        Som += firstBlock[c] * i
        c++
    }

    let rest = Som % 11
    let firstVerifyDigit = 11 - rest
    if (firstVerifyDigit >= 10) {
        firstVerifyDigit = 0
    }
    return firstVerifyDigit
}

function verifyLastDigit(firstBlock) {
    let c = 0
    let Som = 0
    for (let i = 11; i >= 2; i--) {
        Som += firstBlock[c] * i
        c++
    }

    let rest = Som % 11
    let lastVerifyDigit = 11 - rest
    if (lastVerifyDigit >= 10) {
        lastVerifyDigit = 0
    }
    return lastVerifyDigit

}

function validator(number) {
    if (cpfValidator(number)) {
        cpfCalculator(number)
    } else if (cnpjValidator(number)) {
        cnpjCalculator(number)
    } else {
        console.log('rapaz, se ocê bugar meu codigo eute bagaço rapaz')
    }
}

function cnpjValidator(cnpj) {
    let regex = /[0-9]{2}[.][0-9]{3}[.][0-9]{3}[/][0-9]{4}[-][0-9]{2}/;

    return regex.test(cnpj)
}

function reverString(string) {
    let inverted = "";
    for (let i = string.length - 1; i >= 0; i--) {
        inverted += string[i]
    }
    return inverted
}


function cnpjCalculator(cnpj) {
    cnpj = cnpj.split(/[-]/)
    let firstBlock = cnpj[0].replace(/\./g, '').replace(/[/]/g, '');
    let secondBlock = cnpj[1]
    let reversedString = reverString(firstBlock);
    let finalReversedString = reversedString.slice(-4)
    reversedString = reversedString.slice(0, -4)

    //cnpj tratado

    let treatedCNPJ = firstBlock + secondBlock
    
    //---------------------

    let digit = cnpjVerifyFirstDigit(finalReversedString,reversedString)
    let string = reversedString + finalReversedString
    string = digit + string
    let reversed = cnpjVerifyLastDigit(string) + string

    reverString(reversed)

    if(treatedCNPJ == reverString(reversed)){
        console.log('CNPJ valido')
    }else{
        console.log('CNPJ INVALIDO!')
    }
}

function cnpjVerifyFirstDigit(finalReversedString,reversedString){
    let c = 0;
    let Some = 0;
    for (let i = 2; i <= 9; i++) {
        Some += reversedString[c] * i
        c++
    }
    c = 0;
    for (let i = 2; i <= 5; i++) {
        Some += finalReversedString[c] * i
        c++
    }
    let digi = 11 - ( Some % 11 )
    if (digi >= 10) {
        digi = 0
    }
    return digi
}

function cnpjVerifyLastDigit(string){

    let fimString = string.slice(-5)
    string = string.slice(0,-5)

    let c = 0;
    let Some = 0;
    for(let i = 2; i <= 9; i++){
        Some += string[c] * i
        c++
    }
    let value = 2;
    for(let char in fimString){
        Some += parseInt(fimString[char]) * value
        value++
    }    

    let rest = 11 - (Some % 11)
    return rest
}
validator(stringify)