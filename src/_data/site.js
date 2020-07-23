const _site = require("./site.json");

/**
 * Get localization:
 * site[locale]._t.search
 * site[locale]._t.menu.top
 */
let site = {
    buildTime: new Date(),
};

for (lang of _site.langs) {
    site[lang.id] = {
        menu: require(`./l10n/menu_${lang.id}.json`),
        _t: require(`./l10n/messages_${lang.id}.json`)
    }
}

if (process.env.WEB_ROOT_URL) {
    site.rootUrl = process.env.WEB_ROOT_URL;
}

if (process.env.WEB_PATH_PREFIX) {
    site.pathPrefix = process.env.WEB_PATH_PREFIX;
}

if (process.env.ELEVENTY_ENV === 'production' && process.env.GOOGLE_TAG_ID) {
    site.googleTagId = process.env.GOOGLE_TAG_ID;
}

if (process.env.ALGOLIA_APP_ID) {
    site.enableAlgolia = true;
}

if (process.env.REPO_URL) {
    site.repoUrl = process.env.REPO_URL;
}

if (process.env.DISQUS_SITE_NAME) {
    site.DISQUS_SITE_NAME = process.env.DISQUS_SITE_NAME;
}

module.exports = site;