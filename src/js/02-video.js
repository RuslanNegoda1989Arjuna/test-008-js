import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveTime, 1000));

function saveTime(evt) {
  let timePlayStop = evt.seconds;
  console.log(timePlayStop);

  localStorage.setItem('videoplayer-current-time', timePlayStop);
}

const saveTimeV = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(saveTimeV)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
