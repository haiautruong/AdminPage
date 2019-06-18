exports.index = (req, res) => {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    } else {
        let mess = req.flash('message')[0];
        console.log('mess', mess);
        res.render('home/login', {loginNotify: mess });
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