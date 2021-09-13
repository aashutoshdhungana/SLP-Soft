// Close context menu on mouse click
document.querySelector('body').onmousedown = (e) => {
    let menu = document.getElementById('active-context-menu');
    if( menu && menu != e.target && !menu.contains(e.target)) {
        closeContextMenu();
    }
}

// prevent default behavious when right clicked
document.querySelector('body').oncontextmenu = (e) => {
    if (document.querySelector('#comm-model-list ul').contains(e.target)) {
        e.preventDefault();
    }
}

// Add interactive buttons to show or hide list
let arrow = document.querySelectorAll('.list-arrow');
for (let i = 0; i < arrow.length; i++) {
    arrow[i].onclick = () => {
        let nested = arrow[i].parentElement.nextElementSibling;
        if (nested.style.display === 'none') {
            nested.style.display = 'block';
            arrow[i].classList.add('list-open');
        }
        else if (nested.style.display === 'block') {
            nested.style.display = 'none';
            arrow[i].classList.remove('list-open');
        }
        else {
            nested.style.display = 'block';
            arrow[i].classList.add('list-open');
        }
    };
}

// List of model pages
let modelPages = [];

// Add the models to the empty list of pages
function getModelData() {
    let models = document.querySelectorAll('.model-button');
    for (let i = 0; i < models.length; i++) {
        // On click on model button open model
        models[i].onclick = () => {
            openModelPage(models[i].id);
        }

        // On right click open context menu for sub model 
        models[i].parentElement.oncontextmenu = (e) => {
            
            if (openContextMenu(e, models[i].id) != -1) {
                document.getElementById('model-container').style.overflow = 'hidden';
                models[i].parentElement.classList.toggle('has-open-context-menu');
            }
        };

        // push each models to the model list
        let modelPage = {
            id: models[i].id,
            title: models[i].querySelector('span').innerText,
            diagram: JSON.parse(document.getElementById('diagram').ej2_instances[0].saveDiagram())
        }
        modelPages.push(modelPage);
    }
    // Dont know why returned
    // return modelPages;
}

// Open model pages
function openModelPage(id) {

    // If the model is already opened only change the page
    if (document.getElementById(id+'-button')) {
        changeModelPage(id);
        return;
    }

    // Adding button to the page list at the top of the diagram
    let pageList = document.getElementById('pageOptionList');
    let button = document.createElement('span');
    button.classList.add('page-tab');
    button.setAttribute('width', '32px');
    button.id = id + '-button';
    let buttonText = document.createElement('span');
    buttonText.classList.add('button-text');
    buttonText.innerHTML = modelPages.find(x => x.id === id).title;
    // On click on the button change page
    buttonText.onclick = () => {
        changeModelPage(id);
    }
    button.appendChild(buttonText);

    // Adding cross to close the model
    let cross = document.createElement('span');
    cross.classList.add('button-cross');
    // On click close the model
    cross.onclick = () => {
        closeModelPage(id);
    }
    button.appendChild(cross);
    pageList.appendChild(button);

    // Save current model and change to next
    changeModelPage(id);
}

// Save the diagram of model
function saveModelPage(modelId) {
    let index = modelPages.findIndex(x => x.id === modelId);
    let diagramData = JSON.parse(document.getElementById('diagram').ej2_instances[0].saveDiagram());
    modelPages[index].diagram = diagramData;
}

// Save the current model and change to next model
function changeModelPage(modelId) {
    let pageList = document.getElementById('pageOptionList');
    let activePage = pageList.querySelector('.active-model-page');

    // Get active page and make it passive
    if (activePage) {
        activePage.classList.toggle('active-model-page');
        let activeButtonId = activePage.id.toString().replace('-button', '');
        saveModelPage(activeButtonId);
    }
    // Get the button and make it active
    let newButton = pageList.querySelector(`#${modelId}-button`);
    newButton.classList.toggle('active-model-page');
    
    // Search for the diagram of the page and load the diagram
    let diagramData = modelPages.find(x => x.id === modelId).diagram;
    let diagramElement = document.getElementById('diagram').ej2_instances[0];
    diagramElement.clear();
    if (diagramData === '') {
        diagramData = JSON.parse(diagramElement.saveDiagram());
    }
    diagramElement.isLoading = true;
    diagramElement.loadDiagram(JSON.stringify(diagramData))
    diagramElement.clearSelection();
    diagramElement.isLoading = false;
}

// Save and close model
function closeModelPage(modelId) {
    let pageOptionList = document.getElementById('pageOptionList');

    if (!pageOptionList.querySelector('#'+modelId+'-button')) {
        return;
    }

    // check if the model is last in the list
    if (pageOptionList.childNodes.length <= 1) {
        alert('Cannot Close!! \n At least one page needs to be open');
    }
    // if the model to be closed is active
    let button = document.getElementById(modelId + '-button');
    let nextPage = button.previousElementSibling;
    if (!nextPage) {
        nextPage = button.nextElementSibling;
    }

    if (button.classList.contains('active-model-page')) {
        changeModelPage(nextPage.id.replace('-button', ''));
    }

    else {
        saveModelPage(modelId);
    }
    button.remove();
}

// function to return context menu item
function getContextMenuItem(modelId) {
    let contextMenuList = [{
        id: 'main-project-model-comm',
        list: [
            { id: 'sub-function-comm', title: 'Sub Function' },
            { id: 'sub-project-model-comm', title: 'Sub Project Model' },
            'sep',
            { id: 'group-project-model-comm', title: 'Group Project Model' },
            { id: 'team-project-model-comm', title: 'Team Project Model' },
            'sep'
        ]
    }, {
        id: 'problem-statement-comm',
        list: [
            { id: 'sub-problem-statement-comm', title: 'Sub Problem Statement' },
            'sep',
            { id: 'my-problem-statement-comm', title: 'My Problem Statement' },
            { id: 'employee-problem-statement-comm', title: 'Employee Problem Statement' },
            { id: 'personal-problem-statement-comm', title: 'Personal Problem Statement' },
            'sep',
            { id: 'group-problem-statement-comm', title: 'Group Problem Statement' },
            { id: 'team-problem-statement-comm', title: 'Team Problem Statement' },
            'sep'
        ]
    }, {
        id: 'people-work-together-comm',
        list: [
            { id: 'group-working-together-comm', title: 'Group Working Together' },
            { id: 'employees-working-together-comm', title: 'Employees Working Together' },
            { id: 'team-working-together-comm', title: 'Team Working Together' },
            'sep'
        ]
    }, {
        id: 'operating-principle-comm',
        list: [
            { id: 'group-operating-principle-comm', title: 'Group Operating Principle' },
            { id: 'team-operating-principle-comm', title: 'Team Operating Principle' },
            'sep',
            { id: 'employees-operating-principle-comm', title: 'Employees Operating Principle' },
            { id: 'everybody-operating-principle-comm', title: 'Everybody Operating Principle' },
            'sep'
        ]
    }, {
        id: 'what-we-do-model-comm',
        list: [
            { id: 'what-i-do-model-comm', title: 'What I Do Model' },
            { id: 'what-employee-does-comm', title: 'What Employee Does' },
            { id: 'what-team-does-comm', title: 'What Team Does' },
            'sep'
        ]
    }, {
        id: 'error-give-rise-to-problem-comm',
        list: [
            { id: 'my-error-gives-rise-comm', title: 'My Error Give Rise' },
            { id: 'personal-error-gives-rise-comm', title: 'Personal Error Gives Rise' },
            { id: 'employee-error-gives-rise-comm', title: 'Employee Error Gives Rise' },
            'sep'
        ]
    }, {
        id: 'other-model-comm',
        list: []
    }, {
        id: 'group-of-people-defined-comm',
        list: [
            { id: 'team-defined', title: 'Team Defined' },
            'sep'
        ]
    }, {
        id: 'group-of-people-function-comm',
        list: [
            { id: 'team-function', title: 'Team Function' },
            'sep'
        ]
    }, {
        id: 'graphical-change-comm',
        list: [
            { id: 'group-graphical-change-comm', title: 'Group Graphical Change' },
            { id: 'team-graphical-change-comm', title: 'Team Graphical Change' },
            'sep',
            { id: 'employee-graphical-change-comm', title: 'Employee Graphical Change' },
            { id: 'my-graphical-change-comm', title: 'My Graphical Change' },
            'sep'
        ]
    }, {
        id: 'tabulated-change-comm',
        list: [
            { id: 'group-tabulated-change-comm', title: 'Group Tabulated Change' },
            { id: 'team-tabulated-change-comm', title: 'Team Tabulated Change' },
            'sep',
            { id: 'employee-tabulated-change-comm', title: 'Employee Tabulated Change' },
            { id: 'my-tabulated-change-comm', title: 'My Tabulated Change' },
            'sep'
        ]
    }, {
        id: 'project-timeline-comm',
        list: [
            { id: 'part-of-project-timeline-comm', title: 'Part of Project Timeline' },
            { id: 'phase-timeline-comm', title: 'Phase Timeline' },
            'sep'
        ]
    }, {
        id: 'project-schedule-comm',
        list: [
            { id: 'part-of-project-schedule-comm', title: 'Part of Project Schedule' },
            { id: 'phase-schedule-comm', title: 'Phase Schedule' },
            'sep'
        ]
    }, {
        id: 'people-schedule-comm',
        list: [
            { id: 'group-schedule-comm', title: 'Group Schedule' },
            { id: 'team-schedule-comm', title: 'Team Schedule' },
            'sep',
            { id: 'employee-schedule-comm', title: 'Employee Schedule' },
            { id: 'my-schedule-comm', title: 'My Schedule' },
            'sep'
        ]
    }, {
        id: 'graphical-project-status-comm',
        list: [
            { id: 'part-of-project-status-comm', title: 'Part of Project Status' },
            { id: 'phase-status-comm', title: 'Phase Status' },
            'sep'
        ]
    }, {
        id: 'entity-support-model-comm',
        list: [
            { id: 'part-of-entity-support-model-comm', title: 'Part of Entity Support Model' },
            'sep'
        ]
    }, {
        id: 'error-accumulator-comm',
        list: [
            { id: 'group-error-accumulator-comm', title: 'Group Error Accumulator' },
            { id: 'team-error-accumulator-comm', title: 'Team Error Accumulator' },
            'sep',
            { id: 'employee-error-accumulator-comm', title: 'Employee Error Accumulator' },
            { id: 'my-error-accumulator-comm', title: 'My Error Accumulator' },
            'sep'
        ]
    }, {
        id: 'sum-of-compensator-comm',
        list: [
            { id: 'group-sum-of-compensator-comm', title: 'Group Sum of Compensator' },
            { id: 'team-sum-of-compensator-comm', title: 'Team Sum of Compensator' },
            'sep',
            { id: 'employee-sum-of-compensator-comm', title: 'Employee Sum of Compensator' },
            { id: 'my-sum-of-compensator-comm', title: 'My Sum of Compensator' },
            'sep'
        ]
    }, {
        id: 'list-of-feedback-comm',
        list: [
            { id: 'group-list-of-analysis-comm', title: 'Group List of Analysis' },
            { id: 'team-list-of-analysis-comm', title: 'Team List of Analysis' },
            'sep',
            { id: 'employee-list-of-analysis-comm', title: 'Employee List of Analysis' },
            { id: 'my-list-of-analysis-comm', title: 'My List of Analysis' },
            'sep'
        ]
    }, {
        id: 'total-analysis-comm',
        list: [
            { id: 'part-of-project-total-analysis-comm', title: 'Part of Project Total Analysis' },
            { id: 'phase-total-analysis-comm', title: 'Phase Total Analysis' },
            'sep'
        ]
    }, {
        id: 'problem-report-comm',
        list: [
            { id: 'group-problem-report-comm', title: 'Group Problem Report' },
            { id: 'team-problem-report-comm', title: 'Team Problem Report' },
            'sep',
            { id: 'employee-problem-report-comm', title: 'Employee Problem Report' },
            { id: 'my-problem-report-comm', title: 'My Problem Report' },
            'sep'
        ]
    }, {
        id: 'entity-produced-and-function-comm',
        list: [
            { id: 'part-of-project-entity-produced-and-function-comm', title: 'Part of Project Entity Produced and Function' },
            { id: 'phase-entity-produced-and-function-comm', title: 'Phase Entity Produced and Function' },
            'sep'
        ]
    }, {
        id: 'function-status-comm',
        list: [
            { id: 'group-function-status-comm', title: 'Group Function Status' },
            { id: 'team-function-status-comm', title: 'Team Function Status' },
            'sep',
            { id: 'employee-function-status-comm', title: 'Employee Function Status' },
            { id: 'my-function-status-comm', title: 'My Function Status' },
            { id: 'everybody-function-status-comm', title: 'Everybody Function Status' },
            'sep'
        ]
    }, {
        id: 'list-of-test-result-comm',
        list: [
            { id: 'part-of-project-list-of-test-result-comm', title: 'Part of Project List of Test Result' },
            { id: 'phase-list-of-test-result-comm', title: 'Phase List of Test Result' },
            'sep'
        ]
    }, {
        id: 'list-of-entity-usage-comm',
        list: [
            { id: 'part-of-project-list-of-entity-used-comm', title: 'Part of Project List of Entity Used' },
            { id: 'phase-list-of-entity-used-comm', title: 'Phase List of Entity Used' },
            { id: 'list-of-entity-used-comm', title: 'List of Entity Used' },
            'sep'
        ]
    }, {
        id: 'actual-entity-used-by-people-comm',
        list: [
            { id: 'actual-entity-used-by-me-comm', title: 'Actual Entity Used by Me' },
            { id: 'actual-entity-used-by-employee-comm', title: 'Actual Entity Used by Employee' },
            'sep',
            { id: 'actual-entity-used-by-group-comm', title: 'Actual Entity Used by Group' },
            { id: 'actual-entity-used-by-team-comm', title: 'Actual Entity Used by Team' },
            'sep'
        ]
    }, {
        id: 'function-of-entity-used-comm',
        list: [
            { id: 'function-entity-used-by-me-comm', title: 'Function Entity Used by Me' },
            { id: 'function-entity-used-by-employee-comm', title: 'Function Entity Used by Employee' },
            'sep',
            { id: 'function-entity-used-by-group-comm', title: 'Function Entity Used by Group' },
            { id: 'function-entity-used-by-team-comm', title: 'Function Entity Used by Team' },
            'sep'
        ]
    }, {
        id: 'area-of-operation-comm',
        list: [
            { id: 'group-area-of-operation-comm', title: 'Group Area of Operation' },
            { id: 'team-area-of-operation-comm', title: 'Team Area of Operation' },
            'sep',
            { id: 'employee-area-of-operation-comm', title: 'Employee Area of Operation' },
            { id: 'my-area-of-operation-comm', title: 'My Area of Operation' },
            'sep'
        ]
    }, {
        id: 'site-of-operation-comm',
        list: [
            { id: 'group-site-of-operation-comm', title: 'Group Site of Operation' },
            { id: 'team-site-of-operation-comm', title: 'Team Site of Operation' },
            'sep',
            { id: 'employee-site-of-operation-comm', title: 'Employee Site of Operation' },
            { id: 'my-site-of-operation-comm', title: 'My Site of Operation' },
            'sep'
        ]
    }];
    let item = contextMenuList.find(x => x.id === modelId)
    if(item) {
        return item.list;
    }
    else {
        return [];
    }
}

// Open a model context menue where clicked
function openContextMenu(e, modelId) {
    // If context menu already open close it and
    if (document.getElementById('active-context-menu'))
        closeContextMenu();
    
    // Get the context menu list
    let data = getContextMenuItem(modelId);
    if (data.length <= 0) {
        return -1;
    }
    // Create the contextmenu
    let list = document.createElement('ul');
    list.id = 'active-context-menu';
    let xpos = (e.clientX >= window.visualViewport.width - 200) ? e.clientX - 200 : e.clientX;
    let ypos = (e.clientY >= window.visualViewport.height - 200) ? e.clientY - 200 : e.clientY;
    list.classList.add('context-menu');
    list.style.width = '200px';
    list.style.position = 'fixed';
    list.style.top = `${ypos}px`;
    list.style.left = `${xpos}px`;
    list.style.backgroundColor = 'white';
    list.style.border = 'black solid 1px';

    for (let i = 0; i < data.length; i++) {
        let li = document.createElement('li');
        li.classList.add('context-list');
        if (data[i] != 'sep') {
            li.innerHTML = data[i].title;
            li.id = data[i].id + '-listItem';
            li.onclick = (e) => {
                closeContextMenu();
                createSubModel(modelId, data[i]);
            }
        }
        if(data[i] === 'sep') {
            li.style.height = '1px';
            li.style.borderTop = '1px solid grey';
            li.style.marginLeft = '20px';
            li.style.padding = '0';
        }
        list.appendChild(li);
    }

    let other = document.createElement('li');
    other.classList.add('context-list')
    other.id = modelId + 'other';
    other.innerHTML = 'Other';
    list.appendChild(other);
    // On click for each item call add sub model function
    let body = document.querySelector('body');
    body.appendChild(list);
}

// Close model function
function closeContextMenu() {
    document.querySelector('.has-open-context-menu').classList.toggle('has-open-context-menu');
    document.getElementById('model-container').style.overflowY = 'scroll';
    document.getElementById('active-context-menu').remove();
}

// Create Sub model
function createSubModel (modelId, subModel) {
    if (document.getElementById(subModel.id))
        return
    let arrow = document.getElementById(modelId).previousElementSibling;
    if (!arrow.classList.contains('list-arrow')) {
        addArrowEvent(arrow);
        arrow.classList.add('list-arrow', 'list-open');
    }
    let ul = arrow.parentElement.nextElementSibling;
    ul.style.display = 'block';
    let li = createSubModelListItem(subModel);
    ul.appendChild(li);
    if (!modelPages.find(x => x.id === subModel.id)) {
        let model = {
            id: subModel.id,
            title: subModel.title,
            diagram: ''
        };
        modelPages.push(model);
    }
    openModelPage(subModel.id);
}

// This creates list item of the sub model
function createSubModelListItem (model) {
    let li = document.createElement('li');
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    span2.onclick = (e) => {
        openModelPage(model.id);
    }
    let span3 = document.createElement('span');
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('list-icon');
    let use = document.createElementNS('http://www.w3.org/2000/svg','use');
    use.setAttribute('href', '#people');
    svg.appendChild(use);
    span3.innerHTML = model.title;
    span2.appendChild(svg);
    span2.appendChild(span3);
    span2.classList.add('model-button');
    span2.id = model.id;
    li.appendChild(span1);
    li.appendChild(span2);

    li.oncontextmenu = (e) => {
        e.preventDefault();
        document.getElementById('model-container').style.overflow = 'hidden';
        li.classList.add('has-open-context-menu');
        openSubMenuContext(e, model.id);
    };
    return li;
}

// This function removes sub model from the list after saving
function removeSubmodel(subModelId) {
    let model = document.getElementById(subModelId);
    let parent = model.parentElement;
    let list = parent.parentElement;
    let arrow = list.previousElementSibling.querySelector('span');
    let pageOpen = document.getElementById(subModelId+'-button');
    if (pageOpen) {
        closeModelPage(subModelId);
    }
    parent.remove();
    if (!list.hasChildNodes()) {
        arrow.className = '';
        removeArrowEvent(arrow);
        list.style.display = 'none';
    }
}


function addArrowEvent(arrow) {
    arrow.onclick = (e) => {
        let nested = arrow.parentElement.nextElementSibling;
        if (nested.style.display === 'none') {
            nested.style.display = 'block';
            arrow.classList.add('list-open');
        }
        else if (nested.style.display === 'block') {
            nested.style.display = 'none';
            arrow.classList.remove('list-open');
        }
        else {
            nested.style.display = 'block';
            arrow.classList.add('list-open');
        }
    };
}

function removeArrowEvent(arrow) {
    arrow.onclick = null;
}

function openSubMenuContext(e, modelId) {
    if (document.getElementById('active-context-menu')) {
        closeContextMenu();
    }
    let list = document.createElement('ul');
    list.id = 'active-context-menu';
    let xpos = (e.clientX >= window.visualViewport.width - 200) ? e.clientX - 200 : e.clientX;
    let ypos = (e.clientY >= window.visualViewport.height - 200) ? e.clientY - 200 : e.clientY;
    list.classList.add('context-menu');
    list.style.width = '200px';
    list.style.position = 'fixed';
    list.style.top = `${ypos}px`;
    list.style.left = `${xpos}px`;
    list.style.backgroundColor = 'white';
    list.style.border = 'black solid 1px';
    let li = document.createElement('li');
    li.classList.add('context-list');
    li.innerHTML = 'Close Model';
    li.onclick = (e) => {
        closeContextMenu();
        document.getElementById('model-container').style.overflow = 'hidden';
        closeModelPage(modelId);
    }
    list.append(li);
    li = document.createElement('li');
    li.classList.add('context-list');
    li.innerHTML = 'Remove Model';
    li.onclick = (e) => {
        closeContextMenu();
        removeSubmodel(modelId);
    }
    list.append(li);
    document.querySelector('body').append(list);
} 
// !----------------------------------Other function how pop up input  ----------------------------------------------------------! //

// Open sub model function
    // Create a opened nested list from the model
    // Make the model a list arrow button
    // add the sub model button to the list with event listeners
        // remove the model context menu
    // add the sub model to modellist array
    // save the current model and open the sub model