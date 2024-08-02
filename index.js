// dom elements
const show = document.querySelector('.show');
const circles = document.querySelector('.circles')


// creating picture array
const slideshow = ["Banana", "Apple","Orange","Strawberry","Mango"]
const slideshowimage = [
    "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuYW5hfGVufDB8MHwwfHx8MA%3D%3D", // Example: local image path
    "https://images.unsplash.com/photo-1513677785800-9df79ae4b10b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGFwcGxlJTIwZnJ1aXR8ZW58MHwwfDB8fHww",
    "https://images.unsplash.com/photo-1544437353-90c5b0daf035?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxvcmFuZ2V8ZW58MHwwfDB8fHww",
    "https://images.unsplash.com/photo-1453731698127-c129fe738513?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN0cmF3YmVycnl8ZW58MHwwfDB8fHww",
    "https://images.unsplash.com/photo-1635716279493-d1e30afc25a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fE1hbmdvfGVufDB8MHwwfHx8MA%3D%3D"
];

// initial display
function intialDisplay(){
    // Add current slide image
    const img = document.createElement('img');
    img.src = slideshowimage[0];
    // img.alt = `Slide ${count + 1}`;
    // // img.style.maxWidth = '100%';
    // // img.style.maxHeight = '100%';
    show.appendChild(img);
    const h1 = document.createElement('h1');
    h1.textContent = slideshow[0];
    show.appendChild(h1);
}
intialDisplay();

// create an array that has all the index numbers of the slideshow array
let slideshowIndexes = []
for (let i = 0; i < slideshow.length; i++){
    slideshowIndexes.push(i);
}
console.log(slideshowIndexes)

// create a function that when you click it it moves on to the next index in the array and returns it
const right = document.getElementById('right');
let count = 0;

function addcount(){
    count += 1;
    if (count >= slideshow.length){
        count = 0;
    }
    console.log("Next");
    console.log(`Your currently on the ${count} index`)
    showDisplay();
}
right.addEventListener('click', subtractcount)
// create a function that when you click it it moves on to the previous index in the array and returns it
const left = document.getElementById('left')
function subtractcount(){
    count -= 1;
    if (count < 0){
        count = slideshow.length - 1;
    }
    console.log("back");
    console.log(`Your currently on the ${count} index`)
    showDisplay();
}
left.addEventListener('click', addcount);

// adding picture to show
function showDisplay(){
    // clear show and circles
    show.innerHTML = '';
    circles.innerHTML = '';
    // add the img in show
    const img = document.createElement('img');
    img.src = slideshowimage[count];
    // add the first element of slideshow in class show
    const h1 = document.createElement('h1');
    h1.textContent = slideshow[count];
    console.log(`The fruit that has been selected is ${slideshow[count]}`)
    show.appendChild(img);
    show.appendChild(h1);

    // update the circles
    makecircles();
}
// create a number of circles to how many fruits there are
function makecircles(){
    for (let i = 0; i < slideshow.length; i++){
        const div = document.createElement('div');
        div.className = "insidecircle"
        // if count is equal to your iteration make your background green
        div.style.backgroundColor = count === i ? 'greenyellow' : 'azure';
        div.style.cursor = "pointer";
        // Make each circle link to that particular slide, so you can click on the circle and it will jump to that slide
        div.addEventListener('click', () => {
            count = i;
            console.log(`Your currently on the ${count} index`)
            showDisplay();
        });
        circles.appendChild(div);
    }
}
makecircles();
