(function(){
    const oTimer = {
        init(){
            const eButStart = document.querySelector(".app__controls__start");
            const eButLap = document.querySelector(".app__controls__lap");
            let intervalID = 0;
            let milSecondes = 0;
            let secondes = 0;
            let minutes = 0;
            let iTour = 0;
            function prefixe(num){
                return `${num}`.padStart(2, '0');
            }
            eButStart.addEventListener("click", (event)=>{
                if (intervalID === 0){
                    [eButStart.dataset.alternate, eButStart.textContent] = [eButStart.textContent, eButStart.dataset.alternate];
                    intervalID = setInterval(()=>{
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
                        document.querySelector(".app__timer").textContent = `${prefixe(minutes)}:${prefixe(secondes)}:${prefixe(milSecondes)}`;
                    }, 1);
                }else {
                    clearInterval(intervalID);
                    intervalID = 0;
                    [eButStart.textContent, eButStart.dataset.alternate] = [eButStart.dataset.alternate, eButStart.textContent];
                    [eButLap.textContent, eButLap.dataset.alternate] = [eButLap.dataset.alternate, eButLap.textContent];
                }
            });


            eButLap.addEventListener("click", (event)=>{
                if (eButLap.textContent === "Tour"){
                    iTour++;
                    document.querySelector(".app__laps").insertAdjacentHTML("beforeend", `<li class="app__lap">
                    <span class="app__lap-count">Tour ${iTour}</span>
                    <time class="app__lap-value" datatype=\"XX:YY:ZZ\">${prefixe(minutes)}:${prefixe(secondes)}:${prefixe(milSecondes)}</time>
                    </li>`)
                }
                if (eButLap.textContent === "Effacer"){
                    document.querySelector(".app__laps").innerHTML = "";
                    milSecondes=0;
                    secondes=0;
                    minutes=0;
                    iTour=0;
                    document.querySelector(".app__timer").textContent = `${prefixe(minutes)}:${prefixe(secondes)}:${prefixe(milSecondes)}`;
                    [eButLap.textContent, eButLap.dataset.alternate] = [eButLap.dataset.alternate, eButLap.textContent];
                }
            });
        },
    }
    oTimer.init();
})();





