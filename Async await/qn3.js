const fetch = require('node-fetch'); 


const urls = [
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5',
    'https://jsonplaceholder.typicode.com/todos/6'
];


async function fetchDataWithTiming(url) {
    const start = Date.now();
    const response = await fetch(url);
    const data = await response.json();
    const end = Date.now();
    console.log(`Fetched data from ${url} in ${end - start}ms`);
    return data;
}


async function processUrls(urls) {
    for (const url of urls) {
        await fetchDataWithTiming(url);
    }
}


processUrls(urls).then(() => {
    console.log('All URLs processed');
}).catch(error => {
    console.error('Error processing URLs:', error);
});
