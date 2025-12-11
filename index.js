import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const posts = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  const sortedPosts = posts.sort((a, b) => b.id - a.id);
  res.render("index.ejs", { posts: sortedPosts, pageScript: "index.js" });
});

app.get("/posts", (req, res) => {
  const sortedPosts = posts.sort((a, b) => b.id - a.id);
  res.render("posts.ejs", { posts: sortedPosts, pageScript: "posts.js" });
});

app.get("/create", (req, res) => {
  res.render("create.ejs", { pageScript: null });
});

app.post("/create", (req, res) => {
  const postTitle = req.body["title"];
  const postAuthor = req.body["author"];
  const postContent = req.body["content"];
  
  // Walidacja po stronie serwera
  if (!postTitle || !postAuthor || !postContent) {
    return res.redirect("/create");
  }
  
  if (postContent.length < 10) {
    return res.redirect("/create");
  }
  
  const ID = Date.now();
  const createdAt = new Date();

  posts.push({ 
    id: ID, 
    title: postTitle, 
    author: postAuthor, 
    content: postContent,
    createdAt: createdAt
  });

  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  if (post) {
    const referrer = req.get('Referrer') || '/';
    res.render("edit.ejs", { post: post, referrer: referrer, pageScript: "edit.js" });
  } else {
    res.redirect("/");
  }
});

app.post("/edit/:id", (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  if (post) {
    // Walidacja
    if (req.body.title && req.body.author && req.body.content && req.body.content.length >= 10) {
      post.title = req.body.title;
      post.author = req.body.author;
      post.content = req.body.content;
    }
  }
  
  // Przekieruj na stronę z której przyszedł
  const returnUrl = req.body.returnUrl || '/';
  res.redirect(returnUrl);
});

app.post("/delete/:id", (req, res) => {
  const postIndex = posts.findIndex(p => p.id == req.params.id);
  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
  }
  const referrer = req.get('Referrer') || '/';
  res.redirect(referrer.includes('/posts') ? '/posts' : '/');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
