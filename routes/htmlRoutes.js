var path = require("path");

module.exports = function (app) {

    // Route to home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // Route to home page
    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // Route to about page
    app.get("/about", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/about.html"));
    });

    // Route to blog page
    app.get("/blog", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blog.html"));
    });


    // blog routing
    app.get("/blog/32", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/32.html"));
    });
    app.get("/blog/31", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/31.html"));
    });
    app.get("/blog/30", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/30.html"));
    });
    app.get("/blog/29", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/29.html"));
    });
    app.get("/blog/28", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/28.html"));
    });
    app.get("/blog/27", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/27.html"));
    });
    app.get("/blog/26", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/26.html"));
    });
    app.get("/blog/25", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/25.html"));
    });
    app.get("/blog/24", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/24.html"));
    });
    app.get("/blog/23", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/23.html"));
    });
    app.get("/blog/22", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/22.html"));
    });
    app.get("/blog/21", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/21.html"));
    });
    app.get("/blog/20", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/20.html"));
    });
    app.get("/blog/19", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/19.html"));
    });
    app.get("/blog/18", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/18.html"));
    });
    app.get("/blog/17", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/17.html"));
    });
    app.get("/blog/16", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/16.html"));
    });
    app.get("/blog/15", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/15.html"));
    });
    app.get("/blog/14", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/14.html"));
    });
    app.get("/blog/13", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/13.html"));
    });
    app.get("/blog/12", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/12.html"));
    });
    app.get("/blog/11", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/11.html"));
    });
    app.get("/blog/10", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/10.html"));
    });
    app.get("/blog/9", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/9.html"));
    });
    app.get("/blog/8", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/8.html"));
    });
    app.get("/blog/7", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/7.html"));
    });
    app.get("/blog/6", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/6.html"));
    });
    app.get("/blog/5", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/5.html"));
    });
    app.get("/blog/4", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/4.html"));
    });
    app.get("/blog/3", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/3.html"));
    });
    app.get("/blog/2", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/2.html"));
    });
    app.get("/blog/1", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/blogs/1.html"));
    });

}