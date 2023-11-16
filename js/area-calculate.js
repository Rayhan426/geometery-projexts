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
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    widthField.value = '';
    if (isNaN(width)) {
        alert('type a number')
        return;
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
    addToCalculationEntry('parallelogram-area', area);


}
function calculateRhombusArea() {
    const rhombusDimensionOne = getInputValue('rhombus-dimension1');
    const rhombusDimensionTwo = getInputValue('rhombus-dimension2');

    const area = 0.5 * rhombusDimensionOne * rhombusDimensionTwo;

    setElementTextById('rhombus-area', area);

}
function calculatePentagonArea() {
    const perimeter = getInputValue('perimeter-area');
    const apothem = getInputValue('apothem-area');
    const area = 0.5 * perimeter * apothem;
    setElementTextById('pentagon-area', area);
}


function calculateEllipseArea() {
    const major = getInputValue('ellipse-major');
    const minor = getInputValue('ellipse-minor');
    const area = Math.PI * major * minor;
    const areaTwoFixed = area.toFixed(2);
    setElementTextById('ellipse-area', areaTwoFixed);
}

function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    inputField.value = '';
    return value;

}



function setElementTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}

function addToCalculationEntry(areaType, area) {
    console.log(areaType + ' ' + area);

    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('text-white')
    p.innerHTML = `${count +1}. ${areaType} ${area} cm <sup>2</sup> <button class = "btn btn-success text-white btn-sm">Convert cm to m </button>`;
    calculationEntry.appendChild(p);
}
