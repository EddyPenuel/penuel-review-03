// local reviews data
const reviews = [
    {
        id: 1,
        name: 'judee frempong',
        job: 'web developer',
        img: "/img/personal-2.jfif",
        text: 'I am so blessed and will also praise God all the times',
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        //img: "/img/personal-3.jfif",
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
      },
      {
        id: 3,
        name: 'rose jones',
        job: 'intern',
        img: "/img/personal-4.jfif",
       // img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
      },
      {
        id: 4,
        name: 'monica anderson',
        job: 'the boss',
        img: "/img/personal-5.jfif",
        //img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
      },
      {
        id: 4,
        name: 'eddy kobi',
        job: 'the ceo',
        img: "/img/personal-1.jpg",
        //img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
      },
];

// select items
const img = document.getElementById('person-img');
const author =document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn =  document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person 
nextBtn.addEventListener('click', function (){
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
// show random person
 randomBtn.addEventListener('click', function () {
    console.log('hello');

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
 });