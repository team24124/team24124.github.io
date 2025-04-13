const fs = require("fs");
const path = require("path");

module.exports = (config) => {
    // This enable all the dependency libraries inside the `assets` folder
    config.addPassthroughCopy({
        "node_modules/reveal.js/dist": "assets/reveal/",
        "node_modules/reveal.js/plugin": "assets/reveal/plugin",
        "node_modules/katex": "assets/katex",
    });

    config.addPassthroughCopy("./src/style.css");
    config.addPassthroughCopy("./src/**/*.jpg");
    config.addPassthroughCopy("./src/**/*.png");
    config.addPassthroughCopy("./src/**/*.gif");

    config.addPassthroughCopy("./src/*.js");
    config.addPassthroughCopy("./src/exercises/**/*.zip");

    config.addPassthroughCopy({"./src/slides/**/*.md": "downloads"});

    
    config.addCollection("slideshows", function(collectionApi) {
        return collectionApi.getFilteredByGlob("./src/slides/**/*.md")
    })

    // Create a collection of exercise zip files
    config.addCollection("exercises", function () {
        const dir = "src/exercises";
        const files = fs.readdirSync(dir);

        return files
        .filter(file => file.endsWith(".zip"))
        .map(file => {
            const fileName = path.parse(file).name;
            return {
            name: fileName.replace(/[-_]/g, " "),
            file: file,
            url: `/exercises/${file}`
            };
        });
    });

    // Disable 11ty's built-in Markdown engine
    config.setLibrary("md", {
        render: (str) => str // Pass-through
    });

    return {
    
        dir: {
            input: "src",
            output: "public",
        },
        markdownTemplateEngine: false,
    };
}