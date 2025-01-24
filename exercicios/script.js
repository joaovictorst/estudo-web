const input = `S;M;plasticCup()

C;V;mobile phone

C;C;coffee machine

S;C;LargeSoftwareBook

C;M;white sheet of paper

S;V;pictureFrame`

function processData(input) {
    let content = input.split(/[\r\n]+/)
    let contentSplited = []
    let i = 0
    content.forEach((element) => {
       contentSplited[i] = element.split(";")
        i++
    })
    
    contentSplited.forEach((element) =>{
        let i = 0
        while(i < 3){
            if(i = 2){
               element[i] = element[i].split(/(?=[A-Z])/)
            }
            i++
        }
        switch(element[0]){
            case 'S':
                console.log(element[2].join(' '))
                break
            case "C":     
            console.log(element[2][0].replace(" ",""))   
        }
    })
    
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", function (input) {
    _input += input;
});

// process.stdin.on("end", function () {
//    processData(_input);
// });

processData(input)
