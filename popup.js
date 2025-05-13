window.onload = function () {
  setTimeout(() => {
    const popup = document.getElementById("popup");
    if (popup) popup.style.display = "block";
  }, 1500);
};

function closePopup() {
  const popup = document.getElementById("popup");
  if (popup) popup.style.display = "none";
}

