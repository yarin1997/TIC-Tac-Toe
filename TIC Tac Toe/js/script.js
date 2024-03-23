class player {
    name = "";
    point = 0;
    constructor(name) {
        this.name = name;
    }
    win() {
        this.point++;
    }
    getName() {
        return this.name
    }
    setName(name) {
        this.name = name;
    }
    getPoint(){
        return this.point;
    }
}
const audio = document.createElement('audio');
audio.src='img/pencil_check_mark_2-105940.mp3';
const send = document.getElementById('send');
const board = document.getElementById('board');
let details = document.getElementById('details');
let form = document.getElementById('form');
let player1 = new player();
let player2 = new player();
console.log(board)
let arr = [];
for (let i = 1; i < 10; i++) {
    arr.push(document.getElementById(`cell${i}`));
}
let turn = 0;
let x = document.createElement('img')
let o = document.createElement('img')
o.setAttribute('src', './img/circle svg.webp')
x.setAttribute('src', './img/x svg.png')
let td = document.getElementsByTagName('td');
send.addEventListener('click', () => {
    player1.setName(document.getElementById('input1').value)
    player2.setName(document.getElementById('input2').value)
    form.style.display = 'none';
    details.style.display = 'block';
    
    if (player1.getName().length)
        td[1].innerText = player1.getName();
    if (player2.getName().length)
        td[2].innerText = player2.getName();
    play.classList.remove('disabled')
})
const play = document.getElementById('btn')
play.addEventListener('click', () => {
    board.style.display = 'grid'
})
arr[0].addEventListener('click', () => {
    if (turn % 2 === 0) {
        arr[0].appendChild(x.cloneNode(true));
    }
    else {
        arr[0].appendChild(o.cloneNode(true));
    }
    turn++;
    audio.play();
    arr[0].classList.add('disabled');
    if (check(arr[0], arr[1], arr[2]) || check(arr[0], arr[4], arr[8]) || check(arr[0], arr[3], arr[6])) {
        victory()
    }
    else {
        draw()
    }
}
)
arr[1].addEventListener('click', () => {
    if (turn % 2 === 0) {
        arr[1].appendChild(x.cloneNode(true));
    }
    else {
        arr[1].appendChild(o.cloneNode(true));
    }
       turn++;
    audio.play();
    arr[1].classList.add('disabled');
    if (check(arr[0], arr[1], arr[2]) || check(arr[1], arr[4], arr[7])) {
        victory()
    }
    else {
        draw()
    }
})

arr[2].addEventListener('click', () => {
    if (turn % 2 === 0) {
        arr[2].appendChild(x.cloneNode(true));
    }
    else{
        arr[2].appendChild(o.cloneNode(true));
    }
       turn++;
    audio.play();
    arr[2].classList.add('disabled');
    if (check(arr[0], arr[1], arr[2]) || check(arr[2], arr[5], arr[8]) || check(arr[2], arr[4], arr[6])) {
        victory()
    }
    else {
        draw()
    }
})
arr[3].addEventListener('click', () => {
    if (turn % 2 === 0) {
        arr[3].appendChild(x.cloneNode(true));
    }
    else {
        arr[3].appendChild(o.cloneNode(true));
    }
       turn++;
    audio.play();
    arr[3].classList.add('disabled');
    if (check(arr[3], arr[4], arr[5]) || check(arr[3], arr[0], arr[6])) {
        victory()
    }
    else {
        draw()
    }
})
arr[4].addEventListener('click', () => {
    if (turn % 2 === 0) {
        arr[4].appendChild(x.cloneNode(true));
    }
    else {
        arr[4].appendChild(o.cloneNode(true));
    }
       turn++;
    audio.play();
    arr[4].classList.add('disabled');
    if (check(arr[4], arr[1], arr[7]) || check(arr[4], arr[5], arr[3]) || check(arr[2], arr[4], arr[6]) || check(arr[0], arr[4], arr[8])) {
        victory()
    }
    else {
        draw()
    }
})
arr[5].addEventListener('click', () => {
    if (turn % 2 === 0) {
        arr[5].appendChild(x.cloneNode(true));
    }
    else {
        arr[5].appendChild(o.cloneNode(true));
    }
       turn++;
    audio.play();
    arr[5].classList.add('disabled');
    if (check(arr[3], arr[4], arr[5]) || check(arr[2], arr[5], arr[8])) {
        victory()
    }
    else{
        draw()
    }
}
)
arr[6].addEventListener('click', () => {
    if (turn % 2 === 0) {
        arr[6].appendChild(x.cloneNode(true));
    }
    else {
        arr[6].appendChild(o.cloneNode(true));
    }
       turn++;
    audio.play();
    arr[6].classList.add('disabled');
    if (check(arr[6], arr[7], arr[8]) || check(arr[0], arr[3], arr[6]) || check(arr[6], arr[4], arr[2])) {
        victory()
    }
    else {
        draw()
    }
})
arr[7].addEventListener('click', () => {
    if (turn % 2 === 0) {
        arr[7].appendChild(x.cloneNode(true));
    }
    else {
        arr[7].appendChild(o.cloneNode(true));
    }
       turn++;
    audio.play();
    arr[7].classList.add('disabled');
    if (check(arr[6], arr[7], arr[8]) || check(arr[7], arr[4], arr[1])) {
        victory()
    }
    else {
        draw()
    }
})
arr[8].addEventListener('click', () => {
    if (turn % 2 === 0) {
        arr[8].appendChild(x.cloneNode(true));
    }
    else {
        arr[8].appendChild(o.cloneNode(true));
    }
       turn++;
    audio.play();
    arr[8].classList.add('disabled');
    if (check(arr[6], arr[7], arr[8]) || check(arr[8], arr[4], arr[0]) || check(arr[8], arr[5], arr[2])) {
        victory()
    }
    else {
        draw()
    }
})


function check(first, second, third) {
    const firstImg = first.querySelector('img');
    const secondImg = second.querySelector('img');
    const thirdImg = third.querySelector('img');
    // Check if all queried elements contain an <img> element
    if (firstImg && secondImg && thirdImg) {
        const firstSrc = firstImg.getAttribute('src');
        const secondSrc = secondImg.getAttribute('src');
        const thirdSrc = thirdImg.getAttribute('src');

        // Compare the src attributes of the <img> elements
        if (firstSrc === secondSrc && firstSrc === thirdSrc) {
            if(turn%2===1){
                player1.win();
                td[4].innerText = player1.getPoint();
                first.classList.add('change')
                second.classList.add('change')
                third.classList.add('change')
                turn = 0;
            reset();
          return true
          }
            else{
                player2.win();
                td[5].innerText = player2.getPoint();
                first.classList.add('change')
                second.classList.add('change')
                third.classList.add('change')
                turn = 0;
           reset(); 
           return true
            }
        }
    }
    return false;
}

function reset(){
   
    document.querySelectorAll('img').forEach(img => {
        img.remove();
    })
    setTimeout(() => {
    for(let i=0; i<arr.length; i++){
        if(arr[i])
        {
        arr[i].innerText='';
        arr[i].classList.remove('disabled')
        arr[i].classList.remove('change')
    }
        }
    },1000)
}
function draw(){
        if (document.querySelectorAll('img').length === 9) {
        turn = 0;
        reset();
    }
}
function victory(){
let img=document.createElement('img')
img.setAttribute('src', './img/ballon.jpg')
document.body.appendChild(img);
img.classList.add('ballon');
setTimeout(()=>{
    document.body.removeChild(img)
},2000)
}