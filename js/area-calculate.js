function calculateTriangleArea() {
    // get triangle-base value 

    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const baseValue = parseFloat(baseValueText);
    baseField.value = '';
   
   
    if (isNaN(baseValue)) {
        alert('ratul please number lekho')
        return;
    }
    

    // get triangle-height value

    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const heightValue = parseFloat(heightValueText);
    heightField.value = '';

    if (isNaN(heightValue)) {
        alert('ratul please number lekho')
        return;
    }
   
    const area = 0.5 * baseValue * heightValue;
   

    // show triangle area 

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
 }

//  rectangle calulate button calling function

 function calculateRectangleArea() {
    // get rectangle-width value
   const  widthField = document.getElementById('rectangle-width');
   const widthValueText = widthField.value;
   const width = parseFloat(widthValueText);
   widthField.value = '';
   if (isNaN(width)) {
    alert('type a number')
    return ;
   }


//    get rectangle length value 
const lengthField = document.getElementById('rectangle-length');
const lengthValueText = lengthField.value;
const length = parseFloat(lengthValueText);
lengthField.value = '';
const area = width * length;

const rectangleArea = document.getElementById('rectangle-area');
rectangleArea.innerText = area;
   
 }



//  
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    console.log(base);
    const height = getInputValue('parallelogram-height');
    const area = base * height;
  
 setElementTextById('parallelogram-area', area)
}

function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
   
}

function setElementTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}

