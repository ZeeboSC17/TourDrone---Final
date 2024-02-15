function changeView(imgPath, imgName) {
  const imgElem = document.getElementById('viewing-img');
  const textElem = document.getElementById('current-viewing');

  imgElem.src = imgPath;
  textElem.innerText = imgName;
}

function cancelSession(bookingNum) {
  const bookingElem = document.getElementById(bookingNum);
  bookingElem.innerText = 'Canceled';
  bookingElem.style.color = 'rgb(255, 0, 0)';
}

function changeCamera(cameraNum) {
  const exhibitElem = document.getElementById('current-viewing');
  const imgElem = document.getElementById('viewing-img');
  
  const exhibit = exhibitElem.innerText;

  if(exhibit === 'Plains') {
    if(cameraNum === 1) {
      imgElem.src = '../Gallery/plains.webp';
    } 
    else if(cameraNum === 2) {
      imgElem.src = 'plainsTwo.jpg';
    }
    else if(cameraNum === 3) {
      imgElem.src = 'plainsThree.jpg';
    }
  }
  else if(exhibit === 'Savanna') {
    if(cameraNum === 1) {
      imgElem.src = '../Gallery/savanna.jpeg';
    } 
    else if(cameraNum === 2) {
      imgElem.src = 'savannaTwo.jpg';
    }
    else if(cameraNum === 3) {
      imgElem.src = 'savannaThree.jpg';
    }
  }
  else if(exhibit === 'Watering Hole') {
    if(cameraNum === 1) {
      imgElem.src = '../Gallery/wateringhole.jpeg';
    } 
    else if(cameraNum === 2) {
      imgElem.src = 'wateringholeTwo.jpg';
    }
    else if(cameraNum === 3) {
      imgElem.src = 'wateringholeThree.jpg';
    }
  }
  else if(exhibit === 'Woodlands') {
    if(cameraNum === 1) {
      imgElem.src = '../Gallery/woodlands.jpeg';
    } 
    else if(cameraNum === 2) {
      imgElem.src = 'woodlandsTwo.jpg';
    }
    else if(cameraNum === 3) {
      imgElem.src = 'woodlandsThree.png';
    }
  }
}

function weatherWarning() {
  const warningElem = document.getElementById('warning-status');
  const overlayElem = document.getElementById('weather-overlay');
  const overlayImage = document.getElementById('overlay-img');
  
  const selectWeather = ['Clear Weather - Safe', 'Rainy Weather - Unsafe', 'Foggy Weather - Unsafe'];
  const selectWeatherIndex = Math.floor(Math.random() * selectWeather.length);
  const weatherResult = selectWeather[selectWeatherIndex];
  
  warningElem.innerText = weatherResult + " Conditions";

  if (selectWeatherIndex === 1) {
    overlayElem.style.opacity = '0.3';
    overlayImage.src = 'rainoverlay.jpg';
  } 
  else if (selectWeatherIndex === 2) {
    overlayElem.style.opacity = '0.6';
    overlayImage.src = 'windoverlay.jpg';
  }
  else {
    overlayElem.style.opacity = '0';
  }
}
