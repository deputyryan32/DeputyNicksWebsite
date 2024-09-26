const fs = require('fs');
const glob = require('glob');
const minify = require('minify');
const { PurgeCSS } = require('purgecss');

const options = {
    html: {
        removeAttributeQuotes: false,
        removeOptionalTags: false,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
        processScripts: ['application/ld+json']
    },
    css: {
        compatibility: '*',
        properties: {
            urlQuotes: true
        }
    },
    js: {
        ecma: 5,
    },
};

const filesToMinify = [
    'index.html',
    // 'assets/css/base.css',
];

for (let fileIndex = 0; fileIndex < filesToMinify.length; fileIndex++) {
    const fileToMinify = filesToMinify[fileIndex];
    minify(`./${fileToMinify}`, options)
        .then((newContents) => {
            fs.writeFile(`${fileToMinify}`, newContents, ['utf8'], () => { });
        })
        .catch(console.error);
}

const purgeFunc = new PurgeCSS();
purgeFunc.purge({
    content: ['./*.html'],
    css: ['./assets/css/*.css']
}).then((purgeCSSResult) => {
    for (const cssData of purgeCSSResult) {
        fs.writeFile(`${cssData.file}`, cssData.css, ['utf8'], () => { });
    }
})



