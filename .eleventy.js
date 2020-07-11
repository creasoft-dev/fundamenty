require('dotenv').config();
const moment = require('moment');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const site = require('./src/_data/site');

moment.locale('en');

module.exports = eleventyConfig => {
    eleventyConfig.addPlugin(syntaxHighlight);

    // Copy our static assets to the output folder
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/js');
    eleventyConfig.addPassthroughCopy('src/images');


    // date filter (localized)
    eleventyConfig.addFilter("formatDate", function(date, format, locale) {
        locale = locale ? locale : "en";
        moment.locale(locale);
        return moment(date).format(format);
    });

    // Add filter for data formatting
    eleventyConfig.addFilter('dateIso', date => {
        return moment(date).toISOString();
    });


    eleventyConfig.addFilter('jsonify', text => {
        return JSON.stringify(text); // E.g. May 31, 2019
    });

    // Strip out html
    eleventyConfig.addFilter('algExcerpt', function(text) {
        //first remove code
        text = text.replace(/<code class="language-.*?">.*?<\/code>/sg, '');
        //now remove html tags
        text = text.replace(/<.*?>/g, '');
        //now limit to 5k
        return text.substring(0, 8000); // Algolia's limit to 10K
    });

    // For each language, create collection of posts with given language
    site.langs.map(langEntry => {
        eleventyConfig.addCollection(`posts_${langEntry.id}`, function(collectionApi) {
            return collectionApi.getFilteredByTag("post").filter(function(item) {
                return item.data.locale === langEntry.id
            });
        });
    });


    return {
        dir: { input: 'src', output: '_site' }
    };

};