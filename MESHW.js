const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('autocomplete-results');

const countries = [
    'vadodara',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    // Add more countries or your data here
];

function filterResults(input) {
    return countries.filter(country => country.toLowerCase().includes(input.toLowerCase()));
}

function displayResults(results) {
    resultsContainer.innerHTML = '';

    results.forEach(result => {
        const div = document.createElement('div');
        div.textContent = result;
        div.addEventListener('click', () => {
            searchInput.value = result;
            resultsContainer.innerHTML = '';
        });
        resultsContainer.appendChild(div);
    });
}

searchInput.addEventListener('input', () => {
    const inputValue = searchInput.value;
    if (inputValue.length === 0) {
        resultsContainer.innerHTML = '';
        return;
    }

    const filteredResults = filterResults(inputValue);
    displayResults(filteredResults);
});

document.addEventListener('click', (event) => {
    if (!resultsContainer.contains(event.target) && event.target !== searchInput) {
        resultsContainer.innerHTML = '';
    }
});
