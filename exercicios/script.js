const input = `C;V;can of coke
S;M;sweatTea()
S;V;epsonPrinter
C;M;santa claus
C;C;mirrorClaus`

const formatClass = (text) => {
    text = text.split(/(?=[A-Z])/)
    for(let i = 0; i < text.length; i++){
        let upper = text[i][0]
        text[i] = text[i].slice(1)
        text[i] = upper.toUpperCase() + text[i]
    }
    return text
};

const formatMethod = (operation,text) => {
    text  = text.split(' ');
    if(operation = "C"){
        for(let i = 0; i < text.length; i++){
            let upper = text[i][0]
            upper = upper.toUpperCase()
            console.log(upper)
            console.log("^^^")
            console.log(text[i])
        }
    }
    return text
};

const formatVariable = (text) => {
    text  = text.split(' ');
    
    return text
};

const processFormat = (operation,format,text) => {

    switch (format) {
        case "C":
            return formatClass(operation,text);
        case "M":
            return formatMethod(operation,text);
        case "V":
            return formatVariable(operation,text);
    }
};

const processOperation = (operation,format, text) => {
    switch (operation) {
        case "S":
            processFormat(format,text)
            
            // return text.join(" ");
            break
        case "C":

            let prepared = processFormat(format,text);
            console.log(prepared)
            
            
            // return text.join("");
            break
    }
};

function processData(input) {
    input.trim()
    let content = input.split(/[\r\n]+/)
    let contentSplited = []
    let i = 0
    content.forEach((element) => {
       contentSplited[i] = element.split(";")
        i++
    })
    contentSplited.forEach((index) => {
        const [operation,format,text] = index
        // console.log(operation);
        // console.log(format);
        // console.log(text);

        processOperation(operation,format,text)
        
    })
}


process.stdin.on("end", function () {
    console.log(processData(_input));
});

process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", function (input) {
    _input += input;
});

// process.stdin.on("end", function () {
//    processData(_input);
// });

processData(input)
