function calculate(firstInputId,secondInputId){
    const firstInputField = document.getElementById(firstInputId)
    const firstInputString=firstInputField.value;
    const firstInput=parseInt(firstInputString);
    const secondInputField=document.getElementById(secondInputId)
    const secondInputString=secondInputField.value;
    const secondInput=parseInt(secondInputString);
    if(firstInput<=0||secondInput<=0){
        alert('input a valid number')
    }
    else{
        const sum=firstInput*secondInput;
        return sum;
    }
    
}

// set result to calculation area
function setResult(area){
    if(isNaN(area)){
        alert('Input is empty, insert a number');
        return;
    }
    const ul=document.getElementById('showcase');
    const li=document.createElement('li');
    li.innerHTML=`
    <div class="flex justify-between">
            <div>
                Triangle
            </div>
            <div>
                ${area}<small>cm<sup>2</sup></small>
            </div>
            <div>
                <button class="bg-blue-600 text-white rounded font-medium px-2" id="ellipse-btn">
                    <small>Convert to m<sup>2</sup></small>
                </button>
            </div>
        </div>
    `
    
    
    ul.appendChild(li)
}