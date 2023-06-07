$(document).ready(function() {
    // Fetch the rental house data from a JSON file
    $.getJSON('houses.json', function(data) {
      // Render the first house
      renderHouse(data[0], 'house1');
  
      // Render the second house
      renderHouse(data[1], 'house2');
    });
  });
  
  function renderHouse(house, containerId) {
    // Create the house element
    var houseElement = $('<div class="house"></div>');
  
    // Set the house image
    var imageElement = $('<img class="house-image">');
    imageElement.attr('src', house.image);
    houseElement.append(imageElement);
  
    // Set the house description
    var descriptionElement = $('<p class="house-description"></p>');
    descriptionElement.text(house.description);
    houseElement.append(descriptionElement);
    
    var space = $('<br>');
    houseElement.append(space);
  
    // Set the house price/w
    var priceElement = $('<p class="house-price"></p>');
    priceElement.text('Prijs/week: ' + house.pricew);
    houseElement.append(priceElement);

    // Set the house price/m
    var priceElement = $('<p class="house-price"></p>');
    priceElement.text('Prijs/maand: ' + house.pricem);
    houseElement.append(priceElement);

    var space = $('<br>');
    houseElement.append(space);

    // Set the house location
    var priceElement = $('<p class="house-price"></p>');
    priceElement.text('Locatie: ' + house.location);
    houseElement.append(priceElement);

    var space = $('<br>');
    houseElement.append(space);

    // Set the house personen
    var priceElement = $('<p class="house-price"></p>');
    priceElement.text('Aantal personen: ' + house.personen);
    houseElement.append(priceElement);

    var space = $('<br>');
    houseElement.append(space);

    // Set the house kamers
    var priceElement = $('<p class="house-price"></p>');
    priceElement.text('Kamers: ' + house.kamers);
    houseElement.append(priceElement);

    var space = $('<br>');
    houseElement.append(space);

    // Set the house voorzieningen
    var priceElement = $('<p class="house-price"></p>');
    priceElement.text('Voorzieningen: ' + house.voorzieningen);
    houseElement.append(priceElement);

    var space = $('<br>');
    houseElement.append(space);
  
    // Set the house availability
    var availabilityElement = $('<p class="house-availability"></p>');
    availabilityElement.text('Availability: ' + (house.available ? 'Available' : 'Not available'));
    houseElement.append(availabilityElement);
  
    // Append the house element to the specified container
    $('#' + containerId).append(houseElement);
  }
  