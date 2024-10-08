const url = 'https://food.grab.com/id/en/restaurant/{restoranname}/{id}';

const axios = require('axios');
const cheerio = require('cheerio');


axios.get(url, {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
    }
})
.then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    $('.itemNameTitle').each((index, element) => {
        console.log($(element).html());
    });
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});