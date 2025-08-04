const express=require(express);
const app=express();
const port=3001
const expresssLayouts=require(express-ejs-layouts);

app.set("express view engine","ejs");
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
    { title: "Mastering EJS", desc: "Learn EJS from scratch in this beginner-friendly guide." },
    { title: "Node.js Tips", desc: "Level up your backend with these Node.js techniques." },
    { title: "Frontend Tools", desc: "Best tools and libraries to boost frontend productivity." }
  ];
  res.render("blog", { title: "Blog - My Blog", page: "Blog", blogs });
});

app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`);
});