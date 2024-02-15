let plains_available = 8;
let woodlands_available = 12;
let wateringhole_available = 9;
let savanna_available = 0;


function selectButton(POI, availability) {

  let flyButton = document.getElementById('flybtn');
  let noneAvailable = document.getElementById('none-available');
  noneAvailable.style.display = "none";
  let available = document.getElementById('available');
  available.style.display = "none";
  let redirect = document.getElementById('redbtn');

  switch (POI) {
    case "Plains":
      plains_available = availability;
      flyButton.innerHTML = "Fly TourDrone at Plains";
      if (plains_available <= 0) { flyButton.style.display = "inline"; available.style.display = "block"; redirect.style.display = "none"; } else {
        flyButton.style.display = "none";
        noneAvailable.innerHTML = "To reserve a drone at [" + POI + "], click the \"Join Queue\" button below or \"Booking/Queue\" button for a later booking or select a different Exhibit to visit.";
        noneAvailable.style.display = "block";
        available.style.display = "none";
        redirect.style.display = "inline";

      }
      break;
    case "Savanna":
      savanna_available = availability;
      flyButton.innerHTML = "Fly TourDrone at Savanna";
      if (savanna_available <= 0) { flyButton.style.display = "inline"; available.style.display = "block"; redirect.style.display = "none"; } else {
        flyButton.style.display = "none";
        noneAvailable.innerHTML = "To reserve a drone at [" + POI + "], click the \"Join Queue\" button below or \"Booking/Queue\" button for a later booking or select a different Exhibit to visit.";
        noneAvailable.style.display = "block";
        available.style.display = "none";
        redirect.style.display = "inline";

      }
      break;
    case "Watering Hole":
      wateringhole_available = availability;
      flyButton.innerHTML = "Fly TourDrone ar Watering Hole";
      if (wateringhole_available <= 0) { flyButton.style.display = "inline"; available.style.display = "block"; redirect.style.display = "none"; } else {
        flyButton.style.display = "none";
        noneAvailable.innerHTML = "To reserve a drone at [" + POI + "], click the \"Join Queue\" button below or \"Booking/Queue\" button for a later booking or select a different Exhibit to visit.";
        noneAvailable.style.display = "block";
        available.style.display = "none";
        redirect.style.display = "inline";
      }
      break;
    case "Woodlands":
      woodlands_available = availability;
      flyButton.innerHTML = "Fly TourDrone at Woodlands";
      if (woodlands_available <= 0) { flyButton.style.display = "inline"; available.style.display = "block"; redirect.style.display = "none"; } else {
        flyButton.style.display = "none";
        noneAvailable.innerHTML = "To reserve a drone at [" + POI + "], click the \"Join Queue\" button below or \"Booking/Queue\" button for a later booking or select a different Exhibit to visit.";
        noneAvailable.style.display = "block";
        available.style.display = "none";
        redirect.style.display = "inline";
      }
      break;
  }

  const selectElem = document.getElementById('selection-info');
  if (availability > 0) {
    selectElem.innerText = 'Currently selected: ' + POI + ' - ' + ' Queue: ' + availability + ' - ' + ' Average Wait Time: ' + availability * 5 + 'min';
  } else {
    selectElem.innerText = 'Currently selected: ' + POI + ' - ' + ' Your Flight Is READY!';
  }
}

function flyButtonClicked() {
  window.location.href = "./NewCam/3D Camera.html";
}

function redirectToQueue() {
  window.location.href = "./Booking/queue.html";
}

function redirectToAdminPage() {
  window.location.href = "../StaffAdmin/StaffAdmin.html";
}

function handleButtonClick() {
  redirectToAdminPage();
}