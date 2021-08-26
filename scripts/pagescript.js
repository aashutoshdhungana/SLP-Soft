// Read all the items in the list
// Create a page for all the items in the list
// onlcick open the page

var pageOptionList = [];
var activePage;
var selectedItem;
var pageSwitch = false;
function addNewPage() {
    if (activePage) {
        saveDiagramSettings();
        var diagram = document.getElementById('diagram').ej2_instances[0];
        diagram.clear();
    }
    activePage = {};
    activePage.name = 'page' + (pageOptionList.length + 1);
    activePage.text = 'Page' + (pageOptionList.length + 1);
    pageOptionList.push(activePage);
    generatePageButtons(pageOptionList);
}

function generatePageButtons(pages) {
    var pageOptionElement = document.getElementById('pageOptionList');
    var pageContainerWidth =
        pageOptionElement.parentElement.getBoundingClientRect().width - 1;
    var buttonWidth = 75;
    if (pages.length * buttonWidth > pageContainerWidth) {
        buttonWidth = (pageContainerWidth - 32) / pages.length;
    }
    while (pageOptionElement.hasChildNodes()) {
        pageOptionElement.removeChild(pageOptionElement.lastChild);
    }
    for (var i = 0; i < pages.length; i++) {
        var pageOption = pages[i];
        var buttonElement = document.createElement('button');
        buttonElement.setAttribute('id', pageOption.name);
        buttonElement.setAttribute('style', 'width:' + buttonWidth + 'px');
        buttonElement.setAttribute('title', pageOption.text);
        buttonElement.onclick = showPageData.bind(this);
        pageOptionElement.appendChild(buttonElement);
        let pageButton = new ej.buttons.Button({
            content: pageOption.text
        });
        pageButton.appendTo(buttonElement);
        if (activePage.name === pageOption.name) {
            buttonElement.classList.add('db-active-page');
        }
    }
    var buttonElement = document.createElement('button');
    buttonElement.setAttribute('id', 'addNewPage');
    pageOptionElement.appendChild(buttonElement);
    buttonElement.setAttribute('style', 'width:32px');
    buttonElement.onclick = addNewPage.bind(this);
    var pageButton = new ej.buttons.Button({
        content: '+'
    });
    pageButton.appendTo(buttonElement);
}
function showPageData(evt) {
    var target = evt.target;
    var page1 = findPage(target.id);
    if (page1 != null) {
        if (activePage) {
            var button = document.getElementById(activePage.name);
            if (button.classList.contains('db-active-page')) {
                button.classList.remove('db-active-page');
            }
            saveDiagramSettings();
        }
        activePage = page1;
        pageSwitch = true;
        var diagram = document.getElementById('diagram').ej2_instances[0];
        diagram.isLoading = true;
        diagram.loadDiagram(JSON.stringify(page1.diagram));
        diagram.clearSelection();
        diagram.isLoading = false;
        pageSwitch = false;
    }
    target.classList.add('db-active-page');
}

function findPage(id) {
    for (var i = 0; i < pageOptionList.length; i++) {
        if (pageOptionList[i].name === id) {
            return pageOptionList[i];
        }
    }
    return null;
}
function saveDiagramSettings() {
    var diagram = document.getElementById('diagram').ej2_instances[0];
    activePage.diagram = JSON.parse(diagram.saveDiagram());
}

// Adding onclick to the dropdown
let arrow = document.querySelectorAll('.list-arrow');
for (let i = 0; i < arrow.length; i++) {
    arrow[i].onclick = (e) => {
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
