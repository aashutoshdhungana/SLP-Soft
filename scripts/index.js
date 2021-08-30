// Getting all comm nodes
let persons = getCommPerson();
let communication = getCommunication();
let application = getCommApplication();
let commLink = getCommLink();
let analysis = getCommAnalysis();
let commSignal = getCommSignal();
let area = getCommAreAndLocation();
let others = getCommOthers();
let commlabel = getCommLabel();

let system = getThoerySystem();
let thoery = getTheory();
let fundamental = getThoeryFundamental();
let interface = getTheoryInterface();
let theorySignal = getTheorySignal();
let instrument = getTheoryInstrument();
let functions = getTheoryFunction();
let stability = getTheoryStability();
let thoerylabel = getTheoryLabel();

let allShapes = [].concat(persons).concat(communication).concat(application).concat(commLink).
    concat(analysis).concat(commSignal).concat(area).concat(others).concat(commlabel).concat(system).
    concat(thoery).concat(fundamental).concat(interface).concat(theorySignal).concat(instrument).concat(functions).
    concat(stability).concat(thoerylabel);
// Initializing symbol palette
var commPalette = new ej.diagrams.SymbolPalette({
    expandMode: 'Single',
    palettes : [
        {id: 'person', expanded:true, symbols: persons, title:'Person'},
        {id: 'Communication', expanded:false, symbols: communication, title: 'Communication'},
        {id: 'Application', expanded: false, symbols: application, title: 'Application'},
        {id: 'CommmunicationLink', expanded: false, symbols: commLink, title: 'Communication Link'},
        {id: 'Analysis', expanded: false, symbols: analysis, title: 'Analysis'},
        {id: 'CommunicationSignal', expanded: false, symbols: commSignal, title: 'Communication Signal'},
        {id: 'AreaandLocation', expanded: false, symbols: area, title: 'Area and Location'},
        {id: 'OtherCommunicationElement', expanded: false, symbols: others, title: 'Other Communication Element'},
        {id: 'CommLabelPalette', expanded: false, symbols: commlabel, title: 'Label'},
    ],
    symbolHeight: 75, symbolWidth: 275,
    width: '100%', height: '100%',
    enableSearch: true,
    // symbolMargin:{ left: 5, right: 5, top: 12, bottom: 12},
    getSymbolInfo: (symbol) => {
        return { 
            fit: true,
            tooltip: (symbol.addInfo !== null && symbol.addInfo !== undefined) ? symbol.addInfo[0].toolTip : symbol.id,
            description: {
                overflow: 'Wrap',
                text: (symbol.addInfo !== null && symbol.addInfo !== undefined) ? symbol.addInfo[0].title : symbol.id,
                wrap: 'WrapWithOverflow'
            }
        };
    }
});

var theoryPalette = new ej.diagrams.SymbolPalette({
    expandMode: 'Single',
    palettes : [
        {id: 'system', expanded:true, symbols: system, title:'System'},
        {id: 'theory', expanded:false, symbols: thoery, title:'Theory'},
        {id: 'fundamental', expanded:false, symbols: fundamental, title:'Fundamental'},
        {id: 'interface', expanded:false, symbols: interface, title:'Interface'},
        {id: 'signal', expanded:false, symbols: theorySignal, title:'Signal'},
        {id: 'instrument', expanded:false, symbols: instrument, title:'Instrument'},
        {id: 'functionpallete', expanded:false, symbols: functions, title:'Function'},
        {id: 'stability', expanded:false, symbols: stability, title:'Stability'},
        {id: 'label', expanded:false, symbols: thoerylabel, title:'Label'}
    ],
    symbolHeight: 75, symbolWidth: 300,
    width: '100%', height: '100%',
    enableSearch: true,
    // symbolMargin:{ left: 5, right: 5, top: 12, bottom: 12},
    getSymbolInfo: (symbol) => {
        return { 
            fit: true,
            tooltip: (symbol.addInfo !== null && symbol.addInfo !== undefined) ? symbol.addInfo[0].toolTip : symbol.id,
            description: {
                overflow: 'Wrap',
                text: (symbol.addInfo !== null && symbol.addInfo !== undefined) ? symbol.addInfo[0].title : symbol.id,
                wrap: 'WrapWithOverflow'
            }
        };
    }
});
// Appending symbol palette
commPalette.appendTo('#symbol-palette-comm');
theoryPalette.appendTo('#symbol-palette-theory');

// Function to switch palettes
function switchToTheory() {
    let commPalette = document.getElementById('symbol-palette-comm');
    let commModel = document.getElementById('comm-model-list');
    let theoryPalette = document.getElementById('symbol-palette-theory');
    let theoryModel = document.getElementById('theory-model-list');
    commPalette.style.display = 'none';
    commModel.style.display = 'none';
    theoryPalette.style.display = 'block';
    theoryModel.style.display = 'block';
}

function switchToComm() {
    let commPalette = document.getElementById('symbol-palette-comm');
    let commModel = document.getElementById('comm-model-list');
    let theoryPalette = document.getElementById('symbol-palette-theory');
    let theoryModel = document.getElementById('theory-model-list');
    commPalette.style.display = 'block';
    commModel.style.display = 'block';
    theoryPalette.style.display = 'none';
    theoryModel.style.display = 'none';
}

// Initializing and appending diagram
var diagram = new ej.diagrams.Diagram({
    width: '2000px', height: '2000px',
    rulerSettings: {
        showRulers: true,
        showRulers: true,
        horizontalRuler: { interval: 10, segmentWidth: 100, thickness: 20, tickAlignment: "RightOrBottom" },
        verticalRuler: { interval: 10, segmentWidth: 100, thickness: 20, tickAlignment: "RightOrBottom"}
    },
    bridgeDirection: 'Left',
    created: function(args) {
        getModelData();
        openModelPage('main-project-model-comm');
      }
});
diagram.appendTo('#diagram');
//#region code for canvas to svg tranformation
let canvasSymbols = document.querySelectorAll('.e-symbol-draggable > canvas');
for (let i = 0; i < canvasSymbols.length; i++) {

    // Get Canvas
    let parent = canvasSymbols[i].parentElement;
    let cWidth = canvasSymbols[i].width;
    let cHeight = canvasSymbols[i].height;
    let ctx = canvasSymbols[i].getContext('2d');
    let cData = ctx.getImageData(6 * cWidth / 14, 0 , 8 * cWidth / 14, cHeight - 55);
    ctx.clearRect(0, 0, cWidth, cHeight);
    canvasSymbols[i].setAttribute('height', cHeight - 55);
    canvasSymbols[i].setAttribute('width', 2 * cWidth / 14);
    ctx.putImageData(cData, 0, 0);

    // Insert title
    let title = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    title.setAttribute('x', '0');
    title.setAttribute('y', '0');
    title.style.fontWeight = 'Bold';
    title.innerHTML = getTitleById(canvasSymbols[i].id);

    // Initializing the SVG element
    let svgAttributes = document.querySelector('.e-symbol-draggable svg').attributes;
    let svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    for (let j = 0; j < svgAttributes.length; j++) {
        svgElement.setAttribute(svgAttributes[j].name, svgAttributes[j].value);
    }
    svgElement.setAttribute('id', canvasSymbols[i].id);
    let groupElement = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    let nativeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    nativeGroup.setAttribute('transform', 'translate(0,0) scale(1,1)');

    // Initializing Text Element for symbol
    let textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    let textAttributes = document.querySelector('.e-symbol-draggable text').attributes;
    for (let j = 0; j < textAttributes.length; j++) {
        textElement.setAttribute(textAttributes[j].name, textAttributes[j].value);
    }
    textElement.appendChild(title);
    groupElement.appendChild(textElement);
    let shapeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('height', cHeight -55);
    rect.setAttribute('width', 2 * cWidth / 14);
    rect.setAttribute('vector-effect', 'non-scaling-stroke');
    rect.setAttribute('fill', 'transparent');
    rect.setAttribute('stroke-width', '0');
    shapeGroup.appendChild(rect);
    let canvas = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    canvas.setAttribute('height', cHeight -55);
    canvas.setAttribute('width', cHeight - 55);
    canvas.setAttribute('vector-effect', 'non-scaling-stroke');
    parent.removeChild(canvasSymbols[i]);
    canvas.appendChild(canvasSymbols[i]);
    shapeGroup.appendChild(canvas);
    nativeGroup.appendChild(shapeGroup);
    groupElement.appendChild(nativeGroup);
    svgElement.appendChild(groupElement);
    parent.appendChild(svgElement);
}

function getTitleById(id) {
    let shape = allShapes.find(x => x.id === id);
    if (shape !== undefined) {
        return shape.addInfo[0].title;
    }
    else {
        return '';
    }
}
//#endregion

//#region code for symbol arrangement
var symbolPalleteSymbols = document.querySelectorAll('.e-symbol-draggable > svg');
for (let i = 0; i < symbolPalleteSymbols.length; i++) {
    let titleText = symbolPalleteSymbols[i].querySelector(':scope > g > text');
    let toolTip = symbolPalleteSymbols[i].parentElement.getAttribute('title');
    let native_element = symbolPalleteSymbols[i].querySelector(':scope > g > g');

    // Resizing the elements to fit
    let sizeRect = native_element.querySelector('rect');
    let x = parseInt(sizeRect.getAttribute('width'));
    let y = parseInt(sizeRect.getAttribute('height'));
    let ratio = x / y;
    let _x, _y;

    if (x >= y) {
        _x = 55;
        _y = 55 / ratio;
    }

    else {
        _y = 55;
        _x = 55 * ratio;
    }

    let sx = _x / x;
    let sy = _y / y;

    let tx = -sx * 2 + 2;
    let ty = -sy * 2 + 5;

    let transform = native_element.getAttribute('transform');
    let arr = transform.split(' ');
    transform = '';
    for (let j = 0; j < arr.length; j++) {
        if ( !arr[j].includes('translate') && !arr[j].includes('scale')) {
            transform += arr[j] + ' ';
        }
    }
    transform += `translate(${tx}, ${ty}) scale(${sx}, ${sy})`;
    native_element.setAttribute('transform', transform);

    // Translating Text
    let textSpan = titleText.querySelector('tspan');
    let text = textSpan.innerHTML;
    let foreignElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    foreignElement.setAttribute('x', '70');
    foreignElement.setAttribute('y', '5');
    foreignElement.setAttribute('height', '24px');
    foreignElement.setAttribute('width', '180');

    let titleDiv = document.createElement('div');
    titleDiv.style.height = '24px';
    titleDiv.style.width = '180px';
    titleDiv.style.fontSize = '12px';
    titleDiv.style.fontWeight = 'bold';
    titleDiv.style.lineHeight = '100%';
    titleDiv.innerHTML = text;
    foreignElement.appendChild(titleDiv);

    let toolTipElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    toolTipElement.setAttribute('x', '70');
    toolTipElement.setAttribute('y', '30');
    toolTipElement.setAttribute('width', '180')
    toolTipElement.setAttribute('height', '40')
    let toolTipDiv = document.createElement('div');
    toolTipDiv.style.height = '40px';
    toolTipDiv.style.width = '180px';
    toolTipDiv.style.fontSize = '12px';
    toolTipDiv.style.lineHeight = '95%';
    toolTipDiv.innerHTML = toolTip;
    toolTipElement.appendChild(toolTipDiv);
    titleText.parentElement.appendChild(foreignElement);
    titleText.parentElement.appendChild(toolTipElement);
    titleText.remove();
}

// Symbol text display
let allText = document.querySelectorAll('#left-section .symbol-text-container');
for (let i = 0; i < allText.length; i++) {
    allText[i].setAttribute('visibility', 'visible');
}
//#endregion

//#region code for dragbar
let isLeftDrag = false;
let isRightDrag = false;

function setCursor(cursor) {
    document.getElementById('left-section').style.cursor = cursor;
    document.getElementById('right-section').style.cursor = cursor;
    document.getElementById('middle-section').style.cursor = cursor;
}
function startLeftDrag() {
    isLeftDrag = true;
}

function startRightDrag() {
    isRightDrag = true;
}

function onDrag(e) {
    if (isRightDrag || isLeftDrag) {
        setCursor('ew-resize');
        let container = document.getElementById('container');
        let leftSection = document.getElementById('left-section');
        let rightSection = document.getElementById('right-section');

        let leftWidth = isLeftDrag ? e.clientX : leftSection.offsetWidth;
        let rightWidth = isRightDrag ? container.clientWidth - e.clientX : rightSection.offsetWidth;
        let cols = [
            leftWidth,
            5,
            container.clientWidth - 10 - leftWidth - rightWidth - 4,
            5,
            rightWidth
        ];
        let colDef = cols.map(c => c + "px").join(" ");
        container.style.gridTemplateColumns = colDef;
        e.preventDefault();
    }
}

function endDrag() {
    isLeftDrag = false;
    isRightDrag = false;
    setCursor('auto');
}

function resetColumn() {
    let container = document.getElementById('container');
    container.style.gridTemplateColumns = '1fr 5px 4fr 5px 1fr';
}
//#endregion
