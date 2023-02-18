function calculate(firstInputId,secondInputId){
    const firstInputField = document.getElementById(firstInputId)
    const firstInputString=firstInputField.value;
    const firstInput=parseFloat(firstInputString);
    const secondInputField=document.getElementById(secondInputId)
    const secondInputString=secondInputField.value;
    const secondInput=parseFloat(secondInputString);
    if(firstInput<=0||secondInput<=0){
        alert('Input a valid number');
        return;
    }
    else{
        const sum=firstInput*secondInput;
        return sum;
    }
    
}

// set result to calculation area
function setResult(areaResult,areaName){
    if(isNaN(areaResult)){
        alert('Input is empty, insert a number');
        return;
    }
    const ul=document.getElementById('showcase');
    const li=document.createElement('li');
    li.innerHTML=`
    <div class="flex justify-between">
            <div>
                ${areaName}
            </div>
            <div>
                ${areaResult}<small>cm<sup>2</sup></small>
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

// Random color generator
const defaultColor = "#f1f1f1"; 
const carts = document.querySelectorAll(".p-8");
carts.forEach(cart => {
  cart.addEventListener("mouseover", () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    cart.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  });

  cart.addEventListener("mouseout", () => {
    cart.style.backgroundColor = defaultColor;
  });
});

