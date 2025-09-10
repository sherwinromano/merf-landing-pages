// ?? These variables has two html elements for responsive design
const previousPage = document.querySelectorAll(".previous_page");
const nextPage = document.querySelectorAll(".next_page");

const productImagesDesktop = document.querySelectorAll(
  ".product-image-wrapper .product-images img"
);
const productImagesMobile = document.querySelectorAll(
  ".product-image-wrapper-mobile .product-images img"
);
const productTitle = document.querySelector(".product-title");
let currentIndex = 0;

const imagePreviews = document.querySelectorAll("#image-preview");

function showImage(index) {
  productImagesDesktop.forEach((img, i) => {
    if (i === index) {
      img.classList.add("active");
      img.classList.remove("inactive");
    } else {
      img.classList.remove("active");
      img.classList.add("inactive");
    }
  });

  productImagesMobile.forEach((img, i) => {
    if (i === index) {
      img.classList.add("active");
      img.classList.remove("inactive");
    } else {
      img.classList.remove("active");
      img.classList.add("inactive");
    }
  });

  if (currentIndex == 0) {
    productTitle.textContent = "Creamy Coffee";
    document.body.className = `bg-variant-${currentIndex}`;
    // ?? Change image preview above qty select

    for (image of imagePreviews) {
      image.setAttribute("src", "./img/highlight-image[1].jpg");
    }
  } else if (currentIndex == 1) {
    productTitle.textContent = "Caramel Crave";
    document.body.className = `bg-variant-${currentIndex}`;

    for (image of imagePreviews) {
      image.setAttribute("src", "./img/highlight-image[2].jpg");
    }
  } else {
    productTitle.textContent = "Sublime Lime";
    document.body.className = `bg-variant-${currentIndex}`;

    for (image of imagePreviews) {
      image.setAttribute("src", "./img/highlight-image[3].jpg");
    }
  }
}

// ?? Button events with infinite view functionality

for (element of previousPage) {
  element.addEventListener("click", () => {
    if (currentIndex === 0) {
      currentIndex = 2; // ?? Back to last image
    } else {
      currentIndex--;
    }
    showImage(currentIndex);
  });
}

for (element of nextPage) {
  element.addEventListener("click", () => {
    if (currentIndex === 2) {
      currentIndex = 0; // ?? Back to first image
    } else {
      currentIndex++;
    }
    showImage(currentIndex);
  });
}
