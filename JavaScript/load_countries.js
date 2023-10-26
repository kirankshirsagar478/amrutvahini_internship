// JavaScript to populate the country <select> using the Rest Countries API




function populateCountries() {
    const countrySelect = document.getElementById('countrySelect');
    
    // Fetch the list of countries from the API
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(countries => {
          // Loop through the countries array and create <option> elements
          countries.forEach(country => {
              const option = document.createElement('option');
              option.value = country.name; // You can use different properties as needed
              option.textContent = country.name;
              countrySelect.appendChild(option);
              var cookieValue = getCookie("countrySelectSelectedIndex");
              if(cookieValue){
                $(countrySelect).prop('selectedIndex',parseInt(cookieValue) ).change();
                $(countryCodes).prop('selectedIndex',parseInt(cookieValue)).change();
            }
            
          });
      })
      .catch(error => {
          console.error('Error fetching countries:', error);
      });
    }
    
    // Call the populateCountries function to load the countries when the page loads
    populateCountries();


    function populateCountryCodes() {
        const countrySelect = document.getElementById('countryCodes');

        // Fetch the list of countries from the API
        fetch('https://restcountries.com/v2/all')
            .then(response => response.json())
            .then(countries => {
                // Loop through the countries array and create <option> elements
                countries.forEach(country => {
                    const option = document.createElement('option');
                    option.value = country.callingCodes; // Use alpha2Code as the option value
                    option.textContent = `${country.name}  (+${country.callingCodes})`; // Display name and code
                    countrySelect.appendChild(option);
                    var cookieValue = getCookie("countrySelectSelectedIndex");
                    if(cookieValue){
                      //$(countrySelect).prop('selectedIndex',parseInt(cookieValue) ).change();
                      $(countryCodes).prop('selectedIndex',parseInt(cookieValue)).change();
                  }
                });
            })
            .catch(error => {
                console.error('Error fetching countries:', error);
            });
    }

    // Call the populateCountryCodes function to load the country codes when the page loads
    populateCountryCodes();

    function updateCallingCode() {
        var selectElement = document.getElementById("countryCodes");
        var selectElement1 = document.getElementById("countrySelect");

        selectElement.selectedIndex = selectElement1.selectedIndex;

}

    // Helper function to update the calling code based on the selected country

  