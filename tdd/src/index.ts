/** Use Axios to get data from restcountries api */
import axios from 'axios';

/** Use the free API https://restcountries.eu/
 * You will use the following endpoints
 * https://restcountries.eu/rest/v2/name/{name} for countries by name
 * https://restcountries.eu/rest/v2/regionalbloc/{regionalbloc} for region blocks
 */

/** Create getCountry Function here */
async function getCountry(country: string) {
  const getApi = await axios(`https://restcountries.eu/rest/v2/name/${country}`);
  const data = getApi.data;
  const { capital, region, numericCode } = data[0];
  return {
    capital: capital,
    region: region,
    numericCode: numericCode
  }
}

/** Create a test for this getRegion function */
async function getRegionCountries(regionalbloc: string) {
  const getApi = await axios(
    `https://restcountries.eu/rest/v2/regionalbloc/${regionalbloc}`
  );
  const data = getApi.data;
  const countries = [];
  for (let i = 0; i < data.length; i++) {
    countries.push(data[i].name);
  }
  return countries;
}

/** Create getRegionCapitals function here */
async function getRegionCapitals(regionalbloc: string) {
}

getCountry('canada');

export default {
  getCountry,
  getRegionCountries,
  getRegionCapitals
};