exports.index = (req, res) => {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    } else {
        let mess = req.flash('message')[0];
        let data = req.flash('data')[0];

        let notify = {
            pass: null,
            username: null,
            save: null
        };

        if (mess === 'password') {
            notify.pass = 'Mật khẩu không trùng khớp'
        }
        else if (mess === 'username') {
            notify.username = 'Tên đăng nhập đã tồn tại'
        }
        else if (mess === 'save' || mess == 'disfull') {
            notify.save = 'Có lỗi xảy ra @@! Xin thử lại'
        }
        res.render('home/login', {notify});
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