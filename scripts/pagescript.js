// Adding onclick to the dropdown
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
let modelPages = [];

function getModelData() {
    let models = document.querySelectorAll('.model-button');
    for (let i = 0; i < models.length; i++) {
        models[i].onclick = () => {
            openModelPage(models[i].id);
        }
        let modelPage = {
            id: models[i].id,
            title: models[i].querySelector('span').innerText,
            diagram: JSON.parse(document.getElementById('diagram').ej2_instances[0].saveDiagram())
        }
        modelPages.push(modelPage);
    }
    return modelPages;
}

// Open model pages
function openModelPage(id) {
    // Donot open if already open
    let pageList = document.getElementById('pageOptionList');
    let button = document.createElement('button');
    button.classList.add('page-tab');
    button.setAttribute('width', '32px');
    button.id = id + '-button';
    button.innerHTML = modelPages.find(x => x.id === id).title;
    button.onclick = () => {
        changeModelPage(id);
    }
    pageList.appendChild(button);
    changeModelPage(id); // this will save current and open next
}

//
function saveModelPage(id) {
    let index = modelPages.findIndex(x => x.id === id);
    let diagramData = JSON.parse(document.getElementById('diagram').ej2_instances[0].saveDiagram());
    modelPages[index].diagram = diagramData;
}
function changeModelPage(id) {
    let pageList = document.getElementById('pageOptionList');
    let activePage = pageList.querySelector('.active-model-page');
    if (activePage) {
        activePage.classList.toggle('active-model-page');
        let activeButtonId = activePage.id.toString().replace('-button', '');
        saveModelPage(activeButtonId);
    }

    let newButton = pageList.querySelector(`#${id}-button`);
    newButton.classList.toggle('active-model-page');
    
    let diagramData = modelPages.find(x => x.id === id).diagram;
    let diagramElement = document.getElementById('diagram').ej2_instances[0];
    diagramElement.isLoading = true;
    diagramElement.loadDiagram(JSON.stringify(diagramData))
    diagramElement.clearSelection();
    diagramElement.isLoading = false;
}

function closeModelPage() {
    // check if the model is last in the list

    // if model is last in the list dont close otherwise
    
    // save currently active page

    // and append the next in the list
}
// when clicked on the model from the list the corresponding diagram opens and adds itself to the page list in the top
// when switching pages similar searches from the list and appends the json data of the diagram

