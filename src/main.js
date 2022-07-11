export {initMain, getHome};


function initMain() {
   const content = document.getElementById('content');
   const main = document.createElement('div');
   main.setAttribute('id', 'main');
   const mainInfo = document.createElement('div');
   mainInfo.setAttribute('id', 'mainInfo');
   main.appendChild(mainInfo);
   content.append(main);
}

function setContent(content) {

}


function getHome() {
    const mainInfo = document.getElementById('mainInfo');
    const heading = document.createElement('h1');
    heading.innerHTML = "Texas BBQ Experience";
    mainInfo.appendChild(heading);
    const intro = document.createElement('p');
    intro.setAttribute('id', 'intro');
    intro.innerHTML = "Welcome to the finest BBQ experience in Texas!"
    mainInfo.append(intro);
    getHours(mainInfo);

}


function getHours(element) {
    const hours = document.createElement('ul');
    hours.classList.add('storeHours');
    const times = {Monday: '9:00 am - 5:00pm', 
    Tuesday: '9:00 am - 5:00pm', 
    Wednesday: '9:00 am - 5:00pm',
    Thursday: '9:00 am - 5:00pm',
    Friday: '9:00 am - 5:00pm',
    Saturday: '9:00 am - 7:00pm',
    Sunday: 'Closed'
}
    const dates = Object.keys(times);
    dates.forEach((date) => {
        const item = document.createElement('li');
        const day = document.createElement('span');
        day.innerHTML =`${date}`;
        const operatingHours = document.createElement('span');
        operatingHours.innerHTML = `${times[date]}`;
        item.appendChild(day);
        item.appendChild(operatingHours);
        hours.append(item);
    })
    element.append(hours);
    
}