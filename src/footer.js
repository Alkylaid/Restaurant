export {initFooter};


function initFooter() {
const content = document.getElementById('content');
const footer = document.createElement('div');

footer.setAttribute('id', 'footer');

content.appendChild(footer);
}