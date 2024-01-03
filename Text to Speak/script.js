let voiceSpeech = new SpeechSynthesisUtterance()

let voices = [];
let voiceSelect = document.querySelector("select")

window.speechSynthesis.onvoiceschanged = ()=>{
  voices = window.speechSynthesis.getVoices()

  voiceSpeech.voice = voices[0];

  voices.forEach((voice,i)=>{
    console.log(voiceSelect.options = new Option(voice.name));
    voiceSelect.options[i] = new Option(voice.name,i)
  })
}
voiceSelect.addEventListener("change",()=>{
 voiceSpeech.voice = voices[voiceSelect.value];
})

document.querySelector("button").addEventListener("click",()=>{
    voiceSpeech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(voiceSpeech)
})