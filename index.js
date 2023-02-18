function calculate(firstInputId,secondInputId){
    const firstInputField = document.getElementById(firstInputId)
    const firstInputString=firstInputField.value;
    const firstInput=parseInt(firstInputString);
    const secondInputField=document.getElementById(secondInputId)
    const secondInputString=secondInputField.value;
    const secondInput=parseInt(secondInputString);
    const sum=firstInput*secondInput;
    return sum;
}




document.getElementById('triangle-btn').addEventListener('click',function(){
let sum=calculate('t1','t2');
console.log(sum);
})







// document.getElementById('triangle-btn').addEventListener('click', function () {
//     const firstInputField = document.getElementById('t1')
//     const firstInputString=firstInputField.value;
//     const firstInput=parseInt(firstInputString);
//     const secondInputField=document.getElementById('t2')
//     const secondInputString=secondInputField.value;
//     const secondInput=parseInt(secondInputString);
//     const area=firstInput*secondInput;
    
// })
