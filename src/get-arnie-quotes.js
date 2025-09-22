const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
	// TODO: Implement this function.
	// Creating an array of promises using httpGet for each URL in the urls array.
	const promises = urls.map(async (url) => {
		try {
			const response = await httpGet(url);
			const data = JSON.parse(response.body);
			if (response.status === 200) {
				return { 'Arnie Quote': data.message };
			} else {
				return { FAILURE: data.message };
			}
		} catch (error) {
			return { FAILURE: error.message };
		}
	});

	// Using Promise.all to wait for all promises to resolve.
	const result = await Promise.all(promises);
	return result;
};

module.exports = {
	getArnieQuotes,
};
