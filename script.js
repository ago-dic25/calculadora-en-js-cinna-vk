var plus=document.getElementById("plus");
var minus=document.getElementById("minus");
var multiply=document.getElementById("multiply");
var divide=document.getElementById("divide");
var clear=document.getElementById("clear");

var number1=document.getElementById("number1");
var number2=document.getElementById("number2");

var resultField=document.getElementById("result");
var historyList=document.getElementById("historyList");

plus.addEventListener("click",function(){
    if(number1.value=="" || number2.value==""){
        alert("Please enter both numbers");
    }
    else{
        var result= parseFloat(number1.value) + parseFloat(number2.value);
        resultField.innerHTML=result;
        historyList.innerHTML="<li>" + number1.value + " + " + number2.value + " = " + 
        result + "</li>" + historyList.innerHTML;
    }
});

minus.addEventListener("click",function(){
    if(number1.value=="" || number2.value==""){
        alert("Please enter both numbers");
    }
    else{
        var result= parseFloat(number1.value) - parseFloat(number2.value);
        resultField.innerHTML=result;
        historyList.innerHTML="<li>" + number1.value + " - " + number2.value + " = " + 
        result + "</li>" + historyList.innerHTML;
    }
});

multiply.addEventListener("click",function(){
    if(number1.value=="" || number2.value==""){
        alert("Please enter both numbers");
    }
    else{
        var result= parseFloat(number1.value) * parseFloat(number2.value);
        resultField.innerHTML=result;
        historyList.innerHTML="<li>" + number1.value + " * " + number2.value + " = " + 
        result + "</li>" + historyList.innerHTML;
    }
});

divide.addEventListener("click",function(){
    if(number1.value=="" || number2.value==""){
        alert("Please enter both numbers");
    }
    else{
        if(number2.value=="0"){
            alert("Cannot divide by zero");
        }
        else{
            var result= parseFloat(number1.value) / parseFloat(number2.value);
            resultField.innerHTML=result;
            historyList.innerHTML="<li>" + number1.value + " / " + number2.value + " = " + 
            result + "</li>" + historyList.innerHTML;
        }
    }
});

clear.addEventListener("click",function(){
    number1.value="";
    number2.value="";
    resultField.innerHTML=" ";
    historyList.innerHTML="";
});