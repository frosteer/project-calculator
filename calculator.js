let valueA = "";
let valueB = "";
let operator = "";
let keyLogged = "";
let percentToggle = "off"

let total = 0;
let displayNum = "";
let temp = "";



function clickMe(event) {
  
  let key = event.target.innerText
  console.log(event.target.innerText)
  let display = document.querySelector("#display");
  //console.log(key)
  
  
  
  
  if (Number(key) >= 0) {
    if (displayNum.length < 11){
      displayNum += key;
    }
    display.innerText = displayNum;
  }
  
  
  
  
  //plus
  if ( key == "+") {
    
    if (valueA !=="" && displayNum ==""){
      return;
    }
    
    if (valueA !== "") {
      temp = Number(displayNum);
      valueB = Number(displayNum);
      displayNum = ""
      selectFunction()
      display.innerText = total
      operator = key
      valueA = total
      ValueB = ""
      total = 0;
      
      
    } else {
    
    if (valueA == ""){
      temp = displayNum;
      display.innerText = temp
      valueA = Number(displayNum);
      displayNum = "";
      operator = key
    }}
  }
  
  
  //minus
  
  if ( key == "-") {
    
    if (valueA !=="" && displayNum ==""){
      return;
    }
    
    if (valueA !== "") {
      temp = Number(displayNum);
      valueB = Number(displayNum);
      displayNum = ""
      selectFunction()
      display.innerText = total
      operator = key
      valueA = total
      ValueB = ""
      total = 0;
    } else {
    
    if (valueA == ""){
      temp = displayNum;
      display.innerText = temp
      valueA = Number(displayNum);
      displayNum = "";
      operator = key
    }}
  }
    
 // multiply
  
  if ( key == "*") {
    
        
    if (valueA !=="" && displayNum ==""){
      return;
    }
    
    if (valueA !== "") {
      
      temp = Number(displayNum);
      valueB = Number(displayNum);
      displayNum = ""
      selectFunction()
      console.log(`xx total = ${total}`)
      display.innerText = total
      operator = key
      valueA = total
      ValueB = ""
      total = 0;
      keyLogged = "";
    } else {
    
    if (valueA == ""){
      temp = displayNum;
      display.innerText = temp
      valueA = Number(displayNum);
      displayNum = "";
      operator = key
      keyLogged = key
    }}
  }
  
   
  // divide
  
  
  if ( key == "/") {
    
    //if (operator != key) {
    //  operator = key;
    //  }
    
    if (valueA !=="" && displayNum ==""){
      return;
    }
    
    if (valueA !== "") {
      temp = Number(displayNum);
      valueB = Number(displayNum);
      displayNum = ""
      selectFunction()
      display.innerText = total
      operator = key
      valueA = total
      ValueB = ""
      total = 0;
      
    }else {
    
    if (valueA == ""){
      temp = displayNum;
      display.innerText = temp
      valueA = Number(displayNum);
      displayNum = "";
      operator = key
      
    }}
  }
  
  //equal
  
  if ( key == "=") {
    
    if (valueA !== "") {
            
      temp = Number(displayNum);
      valueB = Number(displayNum);
      selectFunction()
      display.innerText = total
      operator = key
      valueA = total
      console.log(`equal total is ${total}`)
      ValueB = ""
      total = total;
      displayNum = total;
      percentToggle = "off"
      
    } else {
    
    if (valueA == ""){
      temp = displayNum;
      display.innerText = temp
      //valueA = Number(displayNum);
      //displayNum = "";
      operator = key
      percentToggle = "off"
      
    }}
  }
  
  //ac
  if ( key == "A/C") {
    
      displayNum = "";
      temp = "";
      operator = "";
      valueA = "";
      ValueB = "";
      total = 0;
      percentToggle = "off"
      display.innerText = 0
    
  } 
  
 //dot
  
  if (key == ".") {
    let array = Array.from(displayNum.toString())
    if (array.some(ele => ele == ".")) {
      return;
    }
    
    if (displayNum == ""){
      displayNum = "0."
      display.innerText = displayNum
    } else {
    
    if (displayNum !== ""){
      displayNum += key;
      display.innerText = displayNum
    }
    
  }}
  
  // back 
  if (key == "Back") {
    displayNum = displayNum.slice(0, -1);
    display.innerText = displayNum
  }
  
  // percentage
  if (key == "%") {
    
    //if (total != ""){
    //display.innerText = total/100
    //total = 0;
    //}
    
    //if (percentToggle == "on") {
    //  return;
    //}
    
    displayNum = Number(displayNum) / 100
    display.innerText = Number(displayNum.toString().slice(0,11))
    percentToggle = "on"
    //valueB = displayNum
    //total = Number(total.toString().slice(0, 11));
    
    
  }
console.log(`displayNum is ${displayNum}`)
};

//round down
function roundDown() {
if (total.length > 11){
      total.toFixed(10)
   }
}



// select function

 function selectFunction() {
   if (operator == "+") {
     add()
     total = Number(total.toString().slice(0, 11));
     percentToggle = "off"
   }
   
   if (operator == "-") {
     minus()
     total = Number(total.toString().slice(0, 11));
     percentToggle = "off"
   }
   
   if (operator == "*") {
     multiply()
     total = Number(total.toString().slice(0, 11));
     percentToggle = "off"
   }
   
   if (operator == "/") {
     divide()
     total = Number(total.toString().slice(0, 11));
     percentToggle = "off"
   }
   
   if (operator == "=") {
     return;
     total = Number(total.toString().slice(0, 11));
   }
}
  
  function add() {
    total = valueA + valueB
  }
  
  function minus() {
    total = valueA - valueB
  }
  
  function multiply() {
    total = valueA * valueB
  }
  
  function divide() {
    total = valueA / valueB
 }
  

let allButtons = document.querySelectorAll(".calculator .num")
allButtons.forEach(box => box.addEventListener('click', clickMe))

window.addEventListener('keypress', function(e) {
    let targetKey = e.key;
    if(e.key === "Enter") targetKey = '=';
    if(e.key === "*") targetKey = '*';
    document.getElementById(targetKey).click(); 
});

window.addEventListener('keydown', function(e) {
    let targetKey = e.key;
    if(e.key === "Backspace") targetKey = "Back";
    if(e.key === "Delete") targetKey = "A/C";
    if (targetKey == "Back" || targetKey == "A/C") {
      document.getElementById(targetKey).click();
    }
  
})


