exports.index = (req, res) => {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    } else {
        console.log("login")
        res.render('home/login');
    }
}

exports.signup = (req, res) => {
    res.render('home/signup');
}

exports.forget = (req, res) => {
    res.render('home/forget');
}

exports.dashboard = (req, res) => {
    res.render('home/index');
}