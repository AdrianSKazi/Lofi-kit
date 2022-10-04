// Detect by clicking

for (var i=0;i<document.querySelectorAll('.drum').length;i++) {

  document.querySelectorAll('.drum')[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detect by pressing

document.addEventListener('keydown', function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// Play

function makeSound(key) {
  switch (key) {
    case "w":
        var audio_w = new Audio('sounds/kick.wav');
        audio_w.play();
      break;
    case "a":
        var audio_a = new Audio('sounds/clap.wav');
        audio_a.play();
      break;
    case "s":
        var audio_s = new Audio('sounds/pad.wav');
        audio_s.play();
      break;
    case "d":
        var audio_d = new Audio('sounds/vox1.wav');
        audio_d.play();
      break;
    case "j":
        var audio_j = new Audio('sounds/lofi.wav');
        audio_j.play();
      break;
    case "k":
        var audio_k = new Audio('sounds/vox2.wav');
        audio_k.play();
      break;
    case "l":
        var audio_l = new Audio('sounds/flute.wav');
        audio_l.pause();
        audio_l.play();
      break;
    default: console.log(buttonInnerHTML)
  }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector('.' + currentKey)

    activeButton.classList.toggle('pressed');

    setTimeout(function() {
      activeButton.classList.toggle('pressed');
    }, 100);
}
