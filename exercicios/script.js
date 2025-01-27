const input = `S;V;iPad

C;M;mouse pad

C;C;code swarm

S;C;OrangeHighlighter`

const formatClass = (operation, format, text) => {
    if (operation == "S") {
        text = text.split(/(?=[A-Z])/)
        for (let i = 0; i < text.length; i++) {
            text[i] = text[i].toLowerCase()
        }
        return text.join(' ')
    } else {
        text = text.split(' ')
        for (let i = 0; i < text.length; i++) {
            let upperCase = text[i].split('')
            text[i].slice(1)
            text[i] = upperCase[0].toUpperCase() + text[i].slice(1)
        }
        return text.join('')
    }
};

const formatMethod = (operation, format, text) => {
    if (operation == "C") {
        text = text.split(' ')
        for (let i = text.length - 1; i >= 0; i--) {
            let string = text[i][0]
            string = string.toUpperCase()
            text[i] = text[i].slice(1)
            text[i] = `${string.toUpperCase()}${text[i]}`
        }
        text = text.join('')

        if (text.endsWith('()')) {
            text.replace('()', '')
        } else {
            text = text.concat('', '()')
        }
        let stringLowercase = text[0]
        text = text.slice(1)
        text = `${stringLowercase.toLowerCase()}${text}`
        return text
    } else {
        text = text.split(/(?=[A-Z])/)
        for (let i = 0; i < text.length; i++) {
            text[i] = text[i].toLowerCase();
        }
        let lengthElement = text.length - 1
        if (text[lengthElement].includes("()")) {
            text[lengthElement] = text[lengthElement].replace(/[()]+/, '');
        } else {
            text[lengthElement] = text[lengthElement] + "()";
        }
        return text.join(' ')
    }
};

const formatVariable = (operation, format, text) => {

    if (operation == 'C') {
        text = text.split(' ')
        for (let i = 0; i < text.length; i++) {
            let upperCase = text[i].split('')
            text[i].slice(1)
            text[i] = upperCase[0].toUpperCase() + text[i].slice(1)
        }
        let stringLowercas = text[0]
        stringLowercas = stringLowercas.toLowerCase()
        text = text.slice(1).join('')
        text = `${stringLowercas}${text}`
        return text
    } else {
        text = text.split(/(?=[A-Z])/)
        for (let i = 0; i < text.length; i++) {
            text[i] = text[i].toLowerCase()
        }
        return text.join(' ')
    }
};

const processFormat = (operation, format, text) => {

    switch (format) {
        case "C":
            return formatClass(operation, format, text)
        case "M":
            return formatMethod(operation, format, text)
        case "V":
            return formatVariable(operation, format, text)
    }
};

const processOperation = (operation, format, text) => {
    switch (operation) {
        case "S":
            console.log(processFormat(operation, format, text))

            // return text.join(" ");
            break
        case "C":

            console.log(processFormat(operation, format, text))

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
        const [operation, format, text] = index

        processOperation(operation, format, text)

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
