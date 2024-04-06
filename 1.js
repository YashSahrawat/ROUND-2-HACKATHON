// Function to display the notification popup
function showNotification() {
    var popup = document.getElementById("notificationPopup");
    popup.style.display = "block";
  }
  
  // Function to close the notification popup
  function closeNotification() {
    var popup = document.getElementById("notificationPopup");
    popup.style.display = "none";
  }
  
  // Automatically show the notification popup
  window.onload = function() {
    showNotification();
  };
  