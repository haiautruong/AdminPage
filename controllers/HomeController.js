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

exports.update = (req, res) => {
    if (req.isAuthenticated()) {
        let userSession = req.user;
        res.render('home/updateInfo', {userSession});
    }
    else {
        req.session.returnTo = '/update';
        res.redirect('/')
    }
}

exports.logout = (req, res) => {
    req.logout();
    res.redirect('/');
}

exports.saveUpdate = (req, res) => {
    console.log("Cập nhật thành công");
    res.redirect('/update');
}

exports.dashboard = (req, res) => {
    if (req.isAuthenticated()) {
        res.render('home/index');
    }
    else {
        req.session.returnTo = '/dashboard';
        res.redirect('/')
    }
}