const { DateTime } = require('luxon');

module.exports = {

    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    htmlDateString: (dateObj) => {
        return DateTime.fromJSDate(dateObj, {
            zone: 'utc'
        }).toFormat('yyyy-LL-dd');
    },

    // date filter (localized)
    formatDate: function (date, format, locale) {
        locale = locale ? locale : "en";
        return DateTime.fromJSDate(date).toFormat(format, { locale });
    },

    // Add filter for data formatting
    dateIso: date => {
        return DateTime.fromJSDate(date).toISO();
    },

    jsonify: text => {
        return JSON.stringify(text); // E.g. May 31, 2019
    },

    // Strip out html
    algExcerpt: function(text) {
        //first remove code
        text = text.replace(/<code class="language-.*?">.*?<\/code>/sg, '');
        //now remove html tags
        text = text.replace(/<.*?>/g, '');
        //now limit to 5k
        return text.substring(0, 8000); // Algolia's limit to 10K
    }
}
