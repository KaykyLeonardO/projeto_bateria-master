
// document.body - exercerá a função de observar todo o conteúdo da página, acrescido no EventListener

document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLocaleLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
    let songs = document.querySelector('#input').value;

    if(songs !== '') {
        let songsArray = songs.split('');
        playComposition(songsArray);
    }
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement) {
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 200)
    }
}

function playComposition(songsArray) {
    let wait = 0;


    for(let songsItem of songsArray) {
        setTimeout(() => {
            playSound(`key${songsItem}`);
        }, wait);

        wait += 350;

    }
}