const infoContainer = document.querySelector(".info-container");
const infoElement = document.querySelector(".info");
const iconContainer = document.querySelector(".icon-container");
const iconsElement = document.querySelector(".icons");
const arrowElement = document.querySelector(".arrow");
const shareIcon = document.querySelector(".share-icon");

let websites = document.querySelectorAll(".web-site");

window.addEventListener("DOMContentLoaded", setupEventListeners);

function setupEventListeners() {
  const bodyWidth = document.body.clientWidth;
  if (bodyWidth >= 900) {
    shareIcon.addEventListener("click", shareContent);
  } else if (bodyWidth <= 900) {
    shareIcon.addEventListener("click", handleInfo);
  } else {
    return;
  }
}

function shareContent() {
  iconsElement.classList.toggle("flex");
}

function handleInfo() {
  infoElement.classList.toggle("none");
  infoContainer.classList.toggle("pd");
  iconContainer.classList.toggle("icon-container-two");
  iconsElement.classList.toggle("icons-two");
  iconsElement.classList.toggle("icons-one");
  arrowElement.classList.toggle("none");
}

function shareOnFacebook() {
  const urlToShare = "https://your-website.com"; // Replace with your actual URL
  const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    urlToShare
  )}`;
  window.open(facebookShareURL, "_blank", "width=600,height=400");
}

function shareOnWebsites() {
  websites.forEach((web) => {
    web.addEventListener("click", (e) => {
      e.preventDefault();
      const currentWeb = e.currentTarget;
      const facebook = websites[0];
      const twitter = websites[1];
      const pinterest = websites[2];

      if (currentWeb === facebook) {
        shareOnFacebook();
      } else if (currentWeb === twitter) {
        shareOnTwitter();
      } else if (currentWeb === pinterest) {
        shareOnPinterest();
      }
    });
  });
}

function shareOnFacebook() {
  window.open("https://www.facebook.com", "_blank", "width=800,height=600");
}

function shareOnTwitter() {
  window.open("https://www.twitter.com", "_blank", "width=800,height=600");
}

function shareOnPinterest() {
  window.open("https://www.pinterest.com", "_blank", "width=800,height=600");
}

shareOnWebsites();
