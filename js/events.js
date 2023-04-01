import {
    buttonPause, 
    buttonPlay,
    buttonStop,
    buttonSet,
    buttonSoundOn, 
    buttonSoundOff
} from "./elements.js"
export default function Events({controls, timer, sound}) {
    // Eventos
    buttonPlay.addEventListener('click', clickOnPlay)
    buttonPause.addEventListener('click', clickOnPause)
    buttonStop.addEventListener('click', clickOnStop)
    buttonSet.addEventListener('click', changeTimer)
    buttonSoundOn.addEventListener('click', soundOn)
    buttonSoundOff.addEventListener('click', soundOff)

    // Funções dos eventos
    function clickOnPlay() {
        controls.play()
        timer.countdown()
        sound.pressButton()
    }
    function clickOnPause(){
        controls.pause()
        timer.hold()
        sound.pressButton()
    }
    function clickOnStop(){
        controls.reset()
        timer.reset()
        sound.pressButton()
    }

    function soundOn(){
        buttonSoundOn.classList.toggle('hide')
        buttonSoundOff.classList.toggle('hide')
        sound.bgAudio.pause()
    }
    function soundOff(){
        buttonSoundOn.classList.toggle('hide')
        buttonSoundOff.classList.toggle('hide')
        sound.bgAudio.play()
    }
    function changeTimer(){
        let newMinutes = controls.getMinutes()

        if(!newMinutes) {
            timer.reset()
            return
        }

        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
    }
}