const express = require("express");
const path = require("path");
const app = express();
const data = require('./database/data.json');
const PORT = 5000;

app.set("view engine", "ejs");
app.set("views", "docs");

app.use(express.static(path.join(__dirname, "public")));

app.get('/', function (req, res) {
    console.log(data);
    const username ="Godswill";
    const isLoggedIn = true;
    //const posts = data[0].posts;
    //console.log(posts);
    //res.render("home_page.ejs", {posts})
    
    const allPosts = [];
    for (let category of data) {
        for (let post of category.posts){
            allPosts.push(post); }
        }
        
// git clone repo_url
// To update your git repo from your terminal, you need the following commands
// git add .
// git commit -m "your commit message goes here"
// git push origin main
        res.render("home_page.ejs", {allPosts} );
    // app.get('/createpost', function (req, res){
        //     const date = new Date().toDateString();
        //     console.log(date);
        // })
        
        
        // app.get("/", function (req, res){
            //    res.render("home_page.ejs");
            //    console.log(__dirname);
});



app.get("/signin",function (req, res) {
    res.render("signin.ejs")
} );
app.get("/signup",function (req, res) {
    res.render("signup.ejs")
} );
app.get("/post",function (req, res) {
    res.render("post.ejs")
} );
//install npm install path
app.listen(PORT, function () {
    console.log(`Server started at ${PORT}`)
});