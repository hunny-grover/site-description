const ogs = require('open-graph-scraper');

const getDescription = (url) => {
    const options = { url };
    return new Promise(resolve => {
        ogs(options)
            .then((data) => {
                const { error, result, response } = data;
                resolve(result.ogDescription + `<br><a href="https://${url}" target="_blank">${url}</a>`);
            })
            .catch((err) => {
                resolve('');
            })
    });
}

(async() => {
    console.log(await getDescription('wordpress.com'));
})();

module.exports = {
    getDescription
}