const upperCaseFirst = (text) =>
    text.charAt(0).toUpperCase() + text.slice(1);

const formatClass = (text) => {
    text.forEach((word, index) => {
        text[index] = upperCaseFirst(word);
    });
    return text;
};

const formatMethodOrVariable = (operation, text, isMethod = false) => {
    const lastIndex = text.length - 1;
    text.forEach((word, index) => {
        if (index === 0 || operation === "S" || (isMethod && text[lastIndex].endsWith("()"))) {
            text[index] = word.toLowerCase();
        } else {
            text[index] = upperCaseFirst(word);
        }
    });
    if (isMethod) {
        text[lastIndex] = (text[lastIndex] + "()").replace("()()", "");
    }
    return text;
};

const processFormat = (operation, format, text) => {
    const prepared = text.split(/(?=[A-Z])|[\s-_]/);

    switch (format) {
        case "C":
            return formatClass(prepared);
        case "M":
            return formatMethodOrVariable(operation, prepared, true);
        case "V":
            return formatMethodOrVariable(operation, prepared);
    }
};

const processOperation = (operation, text) => {
    switch (operation) {
        case "S":
            return text.join(" ");
        case "C":
            return text.join("");
    }
};

function processData(input) {
    const inputLines = input.split(/\n\r?/);
    inputLines.forEach((line, index) => {
        const [operation, format, text] = line.split(/\;/);
        const finalText = processOperation(
            operation,
            processFormat(operation, format, text.trim())
        );

        if (operation === "S" && format === "C") {
            inputLines[index] = finalText.toLowerCase();
            return;
        }
        inputLines[index] = finalText;
    });
    return inputLines.join("\n");
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

// process.stdin.on("end", function () {
//     console.log(processData(_input));
// });

const input = `S;V;iPad
C;M;mouse pad
C;C;code swarm
S;C;OrangeHighlighter`


console.log(processData(input))