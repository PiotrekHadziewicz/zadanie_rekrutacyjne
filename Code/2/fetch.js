export function fetchCountries() {
  return fetch(`https://restcountries.com/v3.1/all`);
}

export function fetchCountryInfo(name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}`);
}