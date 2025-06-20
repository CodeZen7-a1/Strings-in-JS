const inputString=document.querySelector("#inputPara")
    const Result=document.querySelector("#Result")

function CharacterCheck() {
    inputSTR=inputString.value
    Result.textContent=inputSTR.length
}
function Vowels(){
    const allVowel="aeiouAEIOU"
    let count=0;
    inputSTR=inputString.value
    for(let i=0; i<inputSTR.length; i++){
        if(allVowel.includes(inputSTR[i])){
            count++;      
        }
    }
    Result.textContent=count;
}
function ExtractFWord(){
    inputSTR=inputString.value;
    let inputArray=inputSTR.split(" ")
    Result.textContent=inputArray[0];
}
function CountWord(){
    inputSTR=inputString.value;
    inputArray=inputSTR.split(" ")
    Result.textContent=inputArray.length;
}
function Palindrome(){
    inputSTR=inputString.value;
    let reverseSTR=""
    for(let i=inputSTR.length; i<=0;i--){
        reverseSTR += inputSTR[i]
    }
    let Ans= (inputSTR===reverseSTR)
    Result.textContent=Ans;
    
}
function replaceSpace(){
    inputSTR=inputString.value;
    Result.textContent=inputSTR.replaceAll(" ","-");
    
}
function splitInWords(){
    inputSTR=inputString.value;
    inputArray=inputSTR.split(" ")
    Result.textContent=inputArray;

}
function capitalizeWord(){
    inputSTR=inputString.value;
    inputArray=inputSTR.split(" ")
    let outputSTR=""
    for(let i=0; i<inputArray.length; i++){
        let word=inputArray[i]
        outputSTR+= word.charAt(0).toUpperCase()+ word.slice(1)+" ";
    }
    Result.textContent=outputSTR;

}

function ReverseString(){
    inputSTR=inputString.value;
    reverseSTR=""
    for(let i=inputSTR.length; i<=0;i--){
        reverseSTR += inputSTR[i]
    }
    Result.textContent=reverseSTR;

}