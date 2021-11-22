import throttle from 'lodash.throttle'
import Player from "@vimeo/player";
const iframe = document.getElementById('vimeo-player');

    const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(() => {
   
    player.getCurrentTime().then(function (seconds) {
        localStorage.setItem('videoplayer-current-time', seconds);

        
}).catch(function(error) {
   
});

}, 1000));


player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(seconds) {
   
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
          
            break;

        default:
    
            break;
    }
});
  


   