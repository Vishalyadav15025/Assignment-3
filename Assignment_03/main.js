document.addEventListener('DOMContentLoaded', function () {
    const countryNameElement = document.getElementById('countryName');
    const flagElement = document.getElementById('flag');
    const locationElement = document.getElementById('location');
    const continentElement = document.getElementById('continent');
    const countrySelectElement = document.getElementById('countrySelect');

    // Fetch the list of countries from the Rest Countries API
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(countries => {
        // Populate the dropdown with country names
        countries.forEach(country => {
          const option = document.createElement('option');
          option.value = country.alpha3Code;
          option.text = country.name;
          countrySelectElement.add(option);
        });

        // Event listener for dropdown change
        countrySelectElement.addEventListener('change', function () {
          const selectedCountryCode = this.value;
          const selectedCountry = countries.find(country => country.alpha3Code === selectedCountryCode);

          // Update the page content with selected country information
          countryNameElement.textContent = selectedCountry.name;
          
          // Use the PNG version of the flag
          flagElement.src = selectedCountry.flags.png;

          locationElement.textContent = `This country is located in: ${selectedCountry.region}`;
          continentElement.textContent = selectedCountry.region;
        });
      })
      .catch(error => console.error('Error fetching country data:', error));
  });