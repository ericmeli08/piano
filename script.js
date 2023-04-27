const pianokeys = document.querySelectorAll('.piano-keys .key');
const volume = document.querySelector('.volume input');
const hide = document.querySelector('.checkbox input');
let audio = new Audio("audio/g.mp3");

playmusic = (key) => {
    audio.src=`audio/${key}.mp3`
    audio.play();
}

const slide = (e) =>
{
    audio.volume = e.target.value;
}
const hideKeys = () =>
{
    pianokeys.forEach(key => {
        key.classList.toggle('hide');
    })
}

pianokeys.forEach(key => {
    key.addEventListener('click',() => playmusic(key.dataset.key));
})

volume.addEventListener('input',slide);
hide.addEventListener('click',hideKeys);