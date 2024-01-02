// Selecting DOM elements
const infoContainer = document.querySelector(".info-container");
const infoElement = document.querySelector(".info");
const iconContainer = document.querySelector(".icon-container");
const iconsElement = document.querySelector(".icons");
const arrowElement = document.querySelector(".arrow");
const shareIcon = document.querySelector(".share-icon");

// Selecting website elements
const websites = document.querySelectorAll(".web-site");

// Event listener setup when the DOM is loaded
window.addEventListener("DOMContentLoaded", setupEventListeners);

// Function to set up event listeners based on the window width
function setupEventListeners() {
  // get the width of the body 
  const bodyWidth = document.body.clientWidth;
  if (bodyWidth >= 900) {
    shareIcon.addEventListener("click", shareContent);
  } else if (bodyWidth <= 900) {
    shareIcon.addEventListener("click", handleInfo);
  } else {
    return;
  }
}

// Function to toggle the 'flex' class on icons element
function shareContent() {
  iconsElement.classList.toggle("flex");
}

// Function to toggle visibility of information elements
function handleInfo() {
  infoElement.classList.toggle("none");
  infoContainer.classList.toggle("pd");
  iconContainer.classList.toggle("icon-container-two");
  iconsElement.classList.toggle("icons-two");
  iconsElement.classList.toggle("icons-one");
  arrowElement.classList.toggle("none");
}

// Function to set up event listeners for website sharing
function shareOnWebsites() {
  websites.forEach((web) => {
    web.addEventListener("click", (e) => {
      e.preventDefault();
      const currentWeb = e.currentTarget;

      //The first website in the NodeList
      const facebook = websites[0];

      // The second website in the NodeList
      const twitter = websites[1];

      // The third website in the NodeList
      const pinterest = websites[2];

      // Determine which website was clicked and perform the corresponding sharing function
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

// Function to open a new window for Facebook sharing
function shareOnFacebook() {
  /**
   * encodeURIComponent  is a built-in JavaScript function that comes with the language. It is used to encode a URI component
   * by replacing each instance of certain characters with a sequence of characters that represents the character in UTF-8 encoding
   */
  const urlToShare = encodeURIComponent(
    "https://article-preview-component-master-ashy-nu.vercel.app/"
  );
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${urlToShare}`,
    "width=800,height=600"
  );
}

// Function to open a new window for Twitter sharing
function shareOnTwitter() {
  const urlToShare = encodeURIComponent(
    "https://article-preview-component-master-ashy-nu.vercel.app/"
  );
  window.open(
    `https://www.twitter.com/intent/tweet?url=${urlToShare}`,
    "width=800,height=600"
  );
}

// Function to open a new window for Pinterest sharing
function shareOnPinterest() {
  const urlToShare = encodeURIComponent(
    "https://article-preview-component-master-ashy-nu.vercel.app/"
  );
  window.open(
    `https://www.pinterest.com/pin/create/button/?url=${urlToShare}`,
    "_blank",
    "width=800,height=600"
  );
}

shareOnWebsites();
