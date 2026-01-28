let questions=[
    {
        question:"what is Js?",
        option:["Javascript","Jollscript","Javastructure","Joyscript"],


        correct:"Javascript"
    },
    {
       question:"Which company developed JavaScript?",
       option:["Microsoft","Netscape","Google","Oracle"],
       correct:"Netscape"
    },
    {
        question:"Inside which HTML element do we put JavaScript?",
        option:["<js>","<javascript>","<script>","<scripting>"],
        correct:"<script>"
    },
    {
        question:"Which symbol is used for comments in JavaScript (single line)?",
        option:["<!-- -->","//","/* */","#"],
        correct:"//"
    },
    {
        question:"Which keyword is used to declare a variable in JavaScript?",
        option:["var","int","string","declare"],
        correct:"var"
    },
    {
        question:"Which method is used to print something on the console?",
        option:["print()","console.log()","log.console()","echo()"],
        correct:"console.log()"
    },
    {
        question:"Which operator is used to assign a value to a variable?",
        option:[":","=","==","==="],
        correct:"="
    },
    {
        question:"What is the correct way to write an array in JavaScript?",
        option:["let arr = (1,2,3)","let arr = [1,2,3]","let arr = {1,2,3}","let arr = <1,2,3>"],
        correct:"let arr = [1,2,3]"
    },
    {
        question:"Which method is used to join two or more arrays?",
        option:["merge()","concat()","append()","join()"],
        correct:"concat()"
    },
    {
        question:"Which function is used to parse a string into an integer?",
        option:["int()","parseInt()","Number()","toInteger()"],
        correct:"parseInt()"
    }
]
let count=0; 
let min;
let sec=60;
let isTimeRunning=false;
let clock;
let time=document.getElementById("time")
let startbtn=document.getElementById("startbtn");
let instructionContainer=document.getElementById("instruction-container");
let questionContainer=document.getElementById("question-container");
let question=document.getElementById("question");
let option=document.getElementsByClassName("option");
let resultContainer=document.getElementById("result-container");
let result=document.getElementById("result")

questionContainer.style.display="none";
resultContainer.style.display="none";
let marks=0;

startbtn.onclick=function(){
    
    if(!isTimeRunning){
        min=9;
        sec=59; 
        isTimeRunning=true;
        clock=setInterval(function(){

            
            if(min==0 && sec==0){
                clearInterval(clock);
                isTimeRunning=false;
                time.textContent ="00:00";
                resultContainer.style.display="block";
                questionContainer.style.display="none";
                instructionContainer.style.display="none";
                startbtn.textContent="Reset";
                result.textContent="Marks:"+marks;
                return;
            }

            if(sec==0){
                min--;
                sec=60;
            }

            let minutes;
            let seconds;
            if(sec<10){
                seconds="0"+sec
            }else{
                seconds=sec
            }
            if(min<10){
                minutes="0"+min
            }else{
                minutes=min
            }
            time.textContent = (minutes+":"+seconds)
            time.style.fontSize=25+"px"
            sec--;

        },1000)
    }

   
    if(count==questions.length){
       questionContainer.style.display="none";
       instructionContainer.style.display="none";
       resultContainer.style.display="block";
       startbtn.textContent="Reset";
       result.textContent="Marks:"+marks
       count=0;
       marks = 0;  
       clearInterval(clock)
       isTimeRunning=false;
       return;
    }

    questionContainer.style.display="block";
    instructionContainer.style.display="none";
    resultContainer.style.display="none";
    startbtn.textContent="Next";
    question.textContent=questions[count].question;
    for(let i=0;i<4;i++){                     
      option[i].textContent=questions[count].option[i];
      option[i].style.backgroundColor="white";
    
    }
    count++;
}


const dateElement = document.getElementById("current-date");

if (dateElement) {
    const today = new Date();
    const options = { day: "2-digit", month: "short", year: "numeric" };
    dateElement.textContent = today.toLocaleDateString("en-IN", options);
}
for(let opt of option){
    opt.onclick=function(){
        if(opt.textContent==questions[count-1].correct){
          opt.style.backgroundColor="green";
          marks+=1;
        }else{
            opt.style.backgroundColor="red"; 
            for(let i of option){
                if(i.textContent==questions[count-1].correct){
                    i.style.backgroundColor="green"; 
                }
            }
            marks-=1;
        }
    }
}