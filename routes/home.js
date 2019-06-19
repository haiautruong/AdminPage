const express = require('express');
const router = express.Router();
const passport = require('passport');


/**
 * Routing for home
 */

const controller = require("../controllers/HomeController");

router.get("/", (req,res) => controller.index(req,res));
router.get("/logout", (req,res) => controller.logout(req,res));
router.get("/signup", (req,res) => controller.signup(req,res));
router.get("/update", (req,res) => controller.update(req,res));
router.post("/update", (req,res) => controller.saveUpdate(req,res));


router.get("/forget", (req,res) => controller.forget(req,res));

router.post("/login", passport.authenticate('login'), (req, res) => {
    console.log("authen login")
    if (req.isAuthenticated()) {
        res.redirect(req.session.returnTo || '/dashboard');
        delete req.session.returnTo;
    } else {
        res.redirect('/');
    }
});

router.post("/signup", passport.authenticate('signup'), (req, res) => {
    if (req.isAuthenticated()) {
        res.redirect(req.session.returnTo || '/dashboard');
        delete req.session.returnTo;
    } else {
        res.redirect('/signup');
    }
});
router.get("/dashboard", (req,res) => controller.dashboard(req,res));
module.exports = router;