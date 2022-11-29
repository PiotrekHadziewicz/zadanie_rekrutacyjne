import { fetchCountries, fetchCountryInfo } from './fetch.js';

const container = document.querySelector('.container');

fetchCountries()
    .then((res) => {
        return res.json();
    }).then((countries) => {
        for (const country of countries) {
            const cart = document.createElement("div");
            const information = document.createElement("div");
            const flag = document.createElement("img");
            const countryName = document.createElement("h2");
            const population = document.createElement("p");
            const region = document.createElement("p");
            const capital = document.createElement("p");
            
            flag.setAttribute("src", country.flags.png);
            flag.style.width = 'inherit';
            flag.style.height = '150px';
            
            countryName.append(country.name.common);
            population.append(`Population: `,country.population);
            region.append('Region: ',country.region);
            capital.append('Capital: ', country.capital);
            
            information.style.paddingLeft = '15px';
            information.append(countryName, population, region, capital);
            
            cart.style.width = '280px';
            cart.style.height = '390px';
            cart.style.backgroundColor = 'white';
            cart.style.marginBottom = '10px';
            cart.append(flag, information);
            cart.addEventListener('click', (event) => { 
                const name = event.currentTarget.lastElementChild.firstElementChild.textContent;
                fetchCountryInfo(name)
                    .then((res) => {
                        return res.json();
                    }).then(console.log);
            });

            container.append(cart);
        }
    });