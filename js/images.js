$(document).ready(function () {
  // Wacht tot het document volledig is geladen

  // Haal het JSON-bestand op
  $.getJSON("../json/images.json", function (data) {
    var images = data.images;

    // Functie om de carousel-items te maken
    function createCarouselItems() {
      var carouselInner = document.querySelector(".carousel-inner");

      for (var i = 0; i < images.length; i++) {
        var image = images[i];

        var carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");

        if (i === 0) {
          carouselItem.classList.add("active");
        }

        var imgElement = document.createElement("img");
        imgElement.src = "img/" + image;
        imgElement.alt = "Carousel Image";

        carouselItem.appendChild(imgElement);
        carouselInner.appendChild(carouselItem);
      }
    }

    // Roep de functie aan om de carousel-items te maken
    createCarouselItems();
  });
});
