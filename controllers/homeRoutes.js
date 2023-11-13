const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// login
router.get("/login", (req, res) => {
    if (req.session.logged_in) {
        res.redirect("/dashboard");
        return;
    }
    res.render("login");
});

// signup
router.get("/signup", (req, res) => {
    if (req.session.logged_in) {
        res.redirect("/dashboard");
        return;
    }
    res.render("signup");
});

// homepage
router.get("/", async (req, res) => {
    try {
        const postInfo = await Post.findAll({
            include: [{ model: User, attributes: ["username"] }],
        });
        const posts = postInfo.map((post) => post.get({ plain: true }));
        res.render("homepage", {
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// dashboard
router.get("/dashboard", withAuth, async (req, res) => {
    try {
        const postInfo = await Post.findAll({
            where: { user_id: req.session.user_id },
            include: [{ model: User, attributes: ["username"] }],
        });
        const posts = postInfo.map((post) => post.get({ plain: true }));

        res.render("dashboard", {
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// individual post
router.get("/post/:id", withAuth, async (req, res) => {
    try {
        const postInfo = await Post.findByPk(req.params.id, {
            include: [
                { model: User, attributes: ["username"] },
                {
                    model: Comment,
                    include: [{ model: User, attributes: ["username"] }],
                },
            ],
        });

        const post = postInfo.get({ plain: true });
        //console.log(`ESTO ES EL POST: ${Object.keys(post.User)}`);
        res.render("post", {
            ...post,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// new post
router.get("/newpost", (req, res) => {
    if (req.session.logged_in) {
        res.render("newpost");
        return;
    }
    res.redirect("/login");
});

//edit post
router.get("/editpost/:id", async (req, res) => {
    try {
        const postInfo = await Post.findByPk(req.params.id, {
            include: [
                { model: User, attributes: ["username"] },
                {
                    model: Comment,
                    include: [{ model: User, attributes: ["username"] }],
                },
            ],
        });

        const post = postInfo.get({ plain: true });

        res.render("editpost", {
            ...post,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;