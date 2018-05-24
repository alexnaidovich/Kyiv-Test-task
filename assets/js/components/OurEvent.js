const container = document.querySelector('#events-container');

const drawEventHtml = (eventImg, eventName, eventDateTime) => {
  return `<a href="#" class="event flex flex-column">
    <img src="${eventImg}" alt="${eventName}">
    <div class="event-description flex flex-column">
      <h3>${eventName}</h3>
      <p>${eventDateTime}</p>
      <div class="event-more">
        <p class="flex">ПОДРОБНЕЕ</p>
        <span><i>
          <svg version="1.0" x="0px" y="0px" viewBox="0 0 20 20" fill="#fff" style="width: 60px;height: 24px;">
            <circle fill="#fff" cx="0" cy="10.5" r="0.7"></circle>
            <polygon fill="#fff" points="5,10 19,10 16,7 17,7 20,10 20,11 17,14 16,14 19,11 5,11 5,10"></polygon>
          </svg>
        </i></span>
        <span><i>
          <svg version="1.0" x="0px" y="0px" viewBox="0 0 20 20" fill="#fff" style="width: 60px;height: 24px;">
            <circle fill="yellow" cx="0" cy="10.5" r="0.7"></circle>
            <polygon fill="yellow" points="5,10 19,10 16,7 17,7 20,10 20,11 17,14 16,14 19,11 5,11 5,10"></polygon>
          </svg>
        </i></span>
      </div>
    </div>
  </a>`
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

(async function Action() {
  await collectEvents();
  renderEvents(ourEvents, container);
})();


