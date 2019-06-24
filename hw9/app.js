import transactionGalleryItems from "./gallery-items.js";
// import galleryItems from "./gallery-items.js";
("use strict");

const gallery = document.querySelector(".gallery");
const lightbox = document.querySelector(".lightbox");
createGallery(transactionGalleryItems);
gallery.addEventListener("click", openLigthbox);

const btnCloseLigthbox = document.querySelector(
  "button[data-action='close-lightbox']"
);
btnCloseLigthbox.addEventListener("click", closeLigthbox);
lightbox.addEventListener("click", clickOutLightbox);
window.addEventListener("keydown", handleKeyPress);

function createGallery(arrayOfGalleryItems) {
  arrayOfGalleryItems.forEach(value => {
    const galleryItem = document.createElement("li");
    galleryItem.classList.add("gallery__item");

    const galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__link");
    galleryLink.href = `${value.original}`;

    const galleryImage = document.createElement("img");
    galleryImage.classList.add("gallery__image");
    galleryImage.src = `${value.preview}`;
    galleryImage.dataset.source = `${value.original}`;
    galleryImage.atl = `${value.description}`;

    const galleryIcon = document.createElement("span");
    galleryIcon.classList.add("gallery__icon");

    const materialIcons = document.createElement("i");
    materialIcons.classList.add("material-icons");
    materialIcons.textContent = "zoom_out_map";

    galleryIcon.appendChild(materialIcons);
    galleryLink.append(galleryImage, galleryIcon);
    galleryItem.appendChild(galleryLink);
    gallery.appendChild(galleryItem);
  });
}

function openLigthbox(e) {
  e.preventDefault();
  const target = e.target;
  const lightboxImage = document.querySelector(".lightbox___image");
  lightboxImage.src = `${target.dataset.source}`;
  lightboxImage.atl = target.atl;

  lightbox.classList.add("is-open");
}

function closeLigthbox() {
  lightbox.classList.remove("is-open");
}

function clickOutLightbox(e) {
  if (e.target.nodeName !== "IMG") {
    closeLigthbox();
  }
}

function handleKeyPress(e) {
  if (e.code !== "Escape") {
    return;
  }
  closeLigthbox();
}
