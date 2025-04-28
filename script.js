const sounds = [
    { key: 'Q', id: 'Heater 1', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
    { key: 'W', id: 'Heater 2', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
    { key: 'E', id: 'Heater 3', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
    { key: 'A', id: 'Heater 4', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
    { key: 'S', id: 'Clap', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
    { key: 'D', id: 'Open-HH', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
    { key: 'Z', id: "Kick-n'-Hat", src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
    { key: 'X', id: 'Kick', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
    { key: 'C', id: 'Closed-HH', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
  ];
  
  const container = document.querySelector('.pad-container');
  const display = document.getElementById('display');
  
  sounds.forEach(sound => {
    const pad = document.createElement('div');
    pad.classList.add('drum-pad');
    pad.id = sound.id;
    pad.innerText = sound.key;
  
    const audio = document.createElement('audio');
    audio.src = sound.src;
    audio.id = sound.key;
    audio.classList.add('clip');
  
    pad.appendChild(audio);
    container.appendChild(pad);
  
    pad.addEventListener('click', () => playSound(sound.key));
  });
  
  document.addEventListener('keydown', e => {
    const key = e.key.toUpperCase();
    if (sounds.some(s => s.key === key)) {
      playSound(key);
    }
  });
  
  function playSound(key) {
    const audio = document.getElementById(key);
    const sound = sounds.find(s => s.key === key);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      display.innerText = sound.id;
    }
  }
  