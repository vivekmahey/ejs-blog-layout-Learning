const express=require("express");
const app=express();
const port=3001;
const expresssLayouts=require("express-ejs-layouts");

app.set("view engine","ejs");
app.use(express.static("public"));

// Use express-ejs-layouts
app.use(expresssLayouts);
app.set("layout","layout");

app.get("/", (req, res) => {
  res.render("home", { title: "Home - My Blog", page: "Home" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us - My Blog", page: "About" });
});

app.get("/blog", (req, res) => {
  const blogs = [
    {
      title: "Mastering EJS Layouts",
      desc: "Learn how to create reusable templates in your Node.js projects using EJS and layout files."
    },
    {
      title: "Why You Should Learn Node.js",
      desc: "From building APIs to real-time apps, discover why Node.js is a must-have in your dev toolkit."
    },
    {
      title: "Frontend Tools for 2025",
      desc: "Explore the latest and greatest frontend tools that every modern developer should know."
    }
  ];

  res.render("blog", {
    title: "Blog - My Dev Blog",
    page: "Blog",
    blogs
  });
});

app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`);
});