$(document).ready(function() {
  // Wacht tot het document volledig is geladen

  // Haal de gegevens van de huurhuizen op uit een JSON-bestand
  $.getJSON('../json/houses.json', function(data) {
    // Render het eerste huis
    renderHouse(data[0], 'house1');

    // Render het tweede huis
    renderHouse(data[1], 'house2');
  });
});

function renderHouse(house, containerId) {
  // Functie om een huis weer te geven op basis van de gegevens

  // Maak het huis-element aan
  var houseElement = $('<div class="house"></div>');

  // Stel de huisafbeelding in
  var imageElement = $('<img class="house-image">');
  imageElement.attr('src', house.image);
  houseElement.append(imageElement);

  // Stel de huisbeschrijving in
  var descriptionElement = $('<p class="house-description"></p>');
  descriptionElement.text(house.description);
  houseElement.append(descriptionElement);

  var space = $('<br>');
  houseElement.append(space);

  // Stel de huisprijs per week in
  var priceElement = $('<p class="house-price"></p>');
  priceElement.text('Prijs/week: ' + house.pricew);
  houseElement.append(priceElement);

  // Stel de huisprijs per maand in
  var priceElement = $('<p class="house-price"></p>');
  priceElement.text('Prijs/maand: ' + house.pricem);
  houseElement.append(priceElement);

  var space = $('<br>');
  houseElement.append(space);

  // Stel de locatie van het huis in
  var locationElement = $('<p class="house-price"></p>');
  locationElement.text('Locatie: ' + house.location);
  houseElement.append(locationElement);

  var space = $('<br>');
  houseElement.append(space);

  // Stel het aantal personen in dat in het huis kan verblijven
  var personenElement = $('<p class="house-price"></p>');
  personenElement.text('Aantal personen: ' + house.personen);
  houseElement.append(personenElement);

  var space = $('<br>');
  houseElement.append(space);

  // Stel het aantal kamers in het huis in
  var kamersElement = $('<p class="house-price"></p>');
  kamersElement.text('Kamers: ' + house.kamers);
  houseElement.append(kamersElement);

  var space = $('<br>');
  houseElement.append(space);

  // Stel de voorzieningen van het huis in
  var voorzieningenElement = $('<p class="house-price"></p>');
  voorzieningenElement.text('Voorzieningen: ' + house.voorzieningen);
  houseElement.append(voorzieningenElement);

  var space = $('<br>');
  houseElement.append(space);

  // Stel de parkeergelegenheid van het huis in
  var parkingElement = $('<p class="house-price"></p>');
  parkingElement.text('Voorzieningen: ' + house.p);
  houseElement.append(parkingElement);

  var space = $('<br>');
  houseElement.append(space);

  // Stel de beschikbaarheid van het huis in
  var availabilityElement = $('<p class="house-availability"></p>');
  availabilityElement.text('Beschikbaarheid: ' + (house.available ? 'Beschikbaar' : 'Niet beschikbaar'));
  houseElement.append(availabilityElement);

  // Voeg het huis-element toe aan de opgegeven container
  $('#' + containerId).append(houseElement);
}
