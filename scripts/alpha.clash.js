// function play(){
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)

//     const playgroundSection=document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList)
// }

function continueGame(){
const alphabet=getARandomAlphabet();
console.log('your random alphabet',alphabet);
}


setBackgroundColorById(alphabet);

function play(){
    hideElementById('home-screen');
    ShowElementById('play-ground');
    continueGame()
}