// Nom    :
// Prénom :
// Groupe :

const eButStart = document.querySelector(".app__controls__start");
const eButLap = document.querySelector(".app__controls__lap");
let milSecondes = 0;
let secondes = 40;
let minutes = 59;
function prefixe(num){
    if (num<10){
        return "0" + num;
    }else {
        return num;
    }
}

eButStart.addEventListener("click", (event)=>{
    [eButStart.dataset.alternate, eButStart.textContent] = [eButStart.textContent, eButStart.dataset.alternate];
    let intervalID = setInterval(()=>{
        milSecondes++
        if (milSecondes === 100){
            secondes++
            milSecondes=0;
        }else if (secondes === 60){
            minutes++
            secondes=0;
        }else if (minutes === 60){
            clearInterval(intervalID);
        }
        document.querySelector("time").textContent = `${prefixe(minutes)}:${prefixe(secondes)}:${prefixe(milSecondes)}`;
    }, 1);
});
