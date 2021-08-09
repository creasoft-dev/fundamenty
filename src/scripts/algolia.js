/*
 * Algolia's autocomplete using instantsearch
 * Requires following env variables:
 * ALGOLIA_APP_ID
 * ALGOLIA_SEARCH_API_KEY
 * ALGOLIA_INDEX_NAME
 */
const algoliasearch = require('algoliasearch/lite');
const autocomplete = require('autocomplete.js');


const searchClient = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_SEARCH_API_KEY);
var index = searchClient.initIndex(process.env.ALGOLIA_INDEX_NAME);

// Adapter for the new version 4 of algoliasearch ja library
function newHitsSource(index, params) {
    return function doSearch(query, cb) {
        index
            .search(query, params)
            .then(function(res) {
                cb(res.hits, res);
            })
            .catch(function(err) {
                console.error(err);
                cb([]);
            });
    };
}

autocomplete('#searchbox', { hint: false }, [{
    source: newHitsSource(index, { hitsPerPage: 5 }),
    displayKey: 'content',
    templates: {
        suggestion: function(suggestion) {
            return suggestion._highlightResult.title.value +
                ' (' + suggestion._highlightResult.tags.value + ')';
        }
    }
}]).on('autocomplete:selected', function(event, suggestion, dataset) {
    console.log(suggestion, dataset);
    // alert('dataset: ' + dataset + ':  ' + suggestion, null, 2);
    window.location.replace(suggestion.url);
});