$(document).ready(function () {
        // Fetch the JSON file
        $.getJSON("../json/images.json", function (data) {
          var images = data.images;

          // Function to create the carousel items
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

          // Call the function to create the carousel items
          createCarouselItems();
        });
      });