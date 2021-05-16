const openButton = document.querySelector("#openOverlay");
const body = document.body;

openButton.addEventListener("click", e => {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");
  body.appendChild(overlayElement);

  overlayElement.addEventListener("click", e => {
    if (e.target == overlayElement) {
    closeElement.click();
    }
  })

  const containerElement = document.createElement("div");
  containerElement.classList.add("modal-container");
  overlayElement.appendChild(containerElement);

  const contentElement = document.createElement("div");
  contentElement.classList.add("content");

  contentElement.innerHTML = "Hello, <b>world!<b>";

  const closeElement = document.createElement("a");
  closeElement.classList.add("close");
  closeElement.textContent = "x";
  closeElement.href = "#";
  containerElement.appendChild(closeElement);
  containerElement.appendChild(contentElement);

  closeElement.addEventListener("click", e => {
    e.preventDefault();
    body.removeChild(overlayElement);
  })







})