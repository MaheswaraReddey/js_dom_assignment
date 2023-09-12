

const countryInfo = document.querySelector('.country-info');

async function fetchCountryInfo() {
    try {
        const response = await fetch('https://restcountries.com/v3/alpha?codes=USA');
        const data = await response.json();
        const countryName = data[0].name.common;
        const population = data[0].population;
        const countryHTML = `
            <h2>${countryName}</h2>
            <p>Population: ${population}</p>
        `;
        countryInfo.innerHTML = countryHTML;
    } catch (error) {
        console.error('Error fetching country information:', error);
        countryInfo.innerHTML = '<p>Failed to fetch country information. Please try again later.</p>';
    }
}
fetchCountryInfo();