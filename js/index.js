import Controls from "./controls.js"
import  Timer  from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    minutesDisplay,
    secondsDisplay,
    buttonSoundOn,
    buttonSoundOff
} from "./elements.js"


// Factory
const sound = Sound()

const controls = Controls({
    buttonPause,
    buttonPlay, 
    buttonSet, 
    buttonStop
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

Events({controls, timer, sound})