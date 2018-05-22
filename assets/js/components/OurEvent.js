const container = document.querySelector('#events-container');

const drawEventHtml = (eventImg, eventName, eventDateTime) => {
  return `<div class="event flex flex-column">
  <img src="${eventImg}" alt="${eventName}">
  <div class="event-description">
    <h3><a href="#">${eventName}</a></h3>
    <p>${eventDateTime}</p>
  </div>
  </div>`
}

const ourEvents = [];

async function collectEvents() {
  await fetch('https://raw.githubusercontent.com/alexnaidovich/Kyiv-Test-task/master/assets/data/events.json')
    .then(res => res.json())
    .then(data => organizeEvents(data))
    .catch(err => console.error(err));
}

function organizeEvents(input) {
  let source = input.events;
  source.forEach(element => {
    ourEvents.push(element);
  });
}

function renderEvents(arr, cont) {
  arr.forEach((item, i) => {
    let name = item.name;
    let date = item.datetime;
    let imgsrc = item.poster;
    let html = drawEventHtml(imgsrc, name, date);
    cont.innerHTML += html;
  });
}

async function Action() {
  await collectEvents();
  renderEvents(ourEvents, container);
}

Action();
