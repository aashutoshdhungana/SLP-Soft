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
    if (document.getElementById(id+'-button')) {
        changeModelPage(id);
        return;
    }
    let pageList = document.getElementById('pageOptionList');
    let button = document.createElement('span');
    button.classList.add('page-tab');
    button.setAttribute('width', '32px');
    button.id = id + '-button';
    let buttonText = document.createElement('span');
    buttonText.classList.add('button-text');
    buttonText.innerHTML = modelPages.find(x => x.id === id).title;
    buttonText.onclick = () => {
        changeModelPage(id);
    }
    button.appendChild(buttonText);
    let cross = document.createElement('span');
    cross.classList.add('button-cross');
    cross.onclick = () => {
        closeModelPage(id);
    }
    button.appendChild(cross);
    pageList.appendChild(button);
    changeModelPage(id); // this will save current and open next
}

//
function saveModelPage(modelId) {
    let index = modelPages.findIndex(x => x.id === modelId);
    let diagramData = JSON.parse(document.getElementById('diagram').ej2_instances[0].saveDiagram());
    modelPages[index].diagram = diagramData;
}
function changeModelPage(modelId) {
    let pageList = document.getElementById('pageOptionList');
    let activePage = pageList.querySelector('.active-model-page');
    if (activePage) {
        activePage.classList.toggle('active-model-page');
        let activeButtonId = activePage.id.toString().replace('-button', '');
        saveModelPage(activeButtonId);
    }

    let newButton = pageList.querySelector(`#${modelId}-button`);
    newButton.classList.toggle('active-model-page');
    
    let diagramData = modelPages.find(x => x.id === modelId).diagram;
    let diagramElement = document.getElementById('diagram').ej2_instances[0];
    diagramElement.isLoading = true;
    diagramElement.loadDiagram(JSON.stringify(diagramData))
    diagramElement.clearSelection();
    diagramElement.isLoading = false;
}

function closeModelPage(modelId) {
    let pageOptionList = document.getElementById('pageOptionList');

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
// when clicked on the model from the list the corresponding diagram opens and adds itself to the page list in the top
// when switching pages similar searches from the list and appends the json data of the diagram

