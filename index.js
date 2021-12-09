// Nom    :
// Prénom :
// Groupe :

const eButStart = document.querySelector(".app__controls__start");
const eButLap = document.querySelector(".app__controls__lap");
let milSecondes = 0;
let secondes = 0;
let minutes = 0;

eButStart.addEventListener("click", (event)=>{
    [eButStart.dataset.alternate, eButStart.textContent] = [eButStart.textContent, eButStart.dataset.alternate];
    let intervalID = setInterval(()=>{
        milSecondes++
        if (milSecondes === 100){
            secondes++
            milSecondes=0;
        }else if (secondes === 60){
            minutes++
        }
        console.log(milSecondes, secondes, minutes)
    }, 1);
});
