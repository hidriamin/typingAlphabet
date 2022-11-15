let quotes= ["A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"]; //The different quotes to type
let words = [];
let wordIndex = 0;
let startTime = Date.now(); //start time
//page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
document.getElementById('start').addEventListener('click',() =>{
typedValueElement.disabled = false;
typedValueElement.className ="";
const quoteIndex = Math.floor(Math.random() * quotes.length);
const quote=quotes[quoteIndex];
words = quote.split(" ");
wordIndex = 0;
const spanWords = words.map(function(word){return `<span id="quote">${word}</span>`});
quoteElement.innerHTML = spanWords.join('');
quoteElement.childNodes[0].className = `highlight`;
messageElement.innerText = '';
typedValueElement.value = '';
typedValueElement.focus();
startTime = new Date().getTime();
})
typedValueElement.addEventListener("input",() => {
    const currentWord = words[wordIndex];
    const typedValue = typedValueElement.value;
    if(  wordIndex===words.length - 1){//typedValue === currentWord &&
//end of sentence
const elapsedTime = new Date().getTime() - startTime;

const finishMessage = `You finished in ${elapsedTime/1000} seconds!`;
messageElement.innerText = finishMessage;
typedValueElement.disabled = true;
typedValueElement.className="hidden";

 } else if( typedValue.trim() === currentWord){//typedValue.endsWith(" ") &&
    typedValueElement.value = "";
    wordIndex++;
    typedValueElement.className="";
    for(const wordElement of quoteElement.childNodes){
        wordElement.className='';
    }
    quoteElement.childNodes[wordIndex].className='highlight';
 }
 else if(currentWord === typedValue){
    typedValueElement.className=''; //à tester avec typedValue
 }
 else{
    typedValueElement.className = 'error';
    typedValueElement.Value="";
}
})