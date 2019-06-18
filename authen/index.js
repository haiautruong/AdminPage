const LocalStrategy = require('passport-local').Strategy;
const Admin = require('../models/admin');
const bcrypt = require('bcrypt');

const serializeUser = (user, done) => {
    done(null, user._id);
}

const deserializeUser = (id, done) => {
    Admin.findById(id, (err, user) => {
        done(err, user);
    });
}

const signupStrategy = new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, (req, username, password, done) => {
    const confirmPassword = req.body.confirm_password;
    const phone = req.body.phone;
    const address = req.body.address;
    const fullname = req.body.fullname;
    const email = req.body.email;



    if (username && password && confirmPassword && email && phone && address && fullname) {
        let data = {
            username,
            password,
            confirmPassword,
            phone,
            address,
            fullname,
            email
        }

        if (password != confirmPassword) {
            return done(null, false, req.flash('message', 'pass'), req.flash('data', data));
        }
        
        Admin.findOne({ 'uasername': username}, (err, user) => {
            if (user) {
                return done(null, false, req.flash('message', 'uasername'), req.flash('data', data));
            }
            
            const newAdmin = new Admin({
                username: username,
                password: password,
                email: email,
                phone: phone,
                address: address,
                fullname: fullname
            });
            newAdmin.save(err => {
                if (err) {
                    console.log('err', err);
                    return done(null, false, req.flash('message', 'save'));
                } else {
                    return done(null, newAdmin);
                }
            });
        });

    } else {
        return done(null, false, req.flash('message', 'disfull'));
    }
});

const loginStrategy = new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
}, (req, username, password, done) => {

    Admin.findOne({ 'username': username }, (err, user) => {
        if (err) {
            done(err);
        }

        if (!user) {
            console.log('Admin not found username', username);
            return done(null, false, req.flash('message', 'username'));
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if (err || result == false) {
                return done(null, false, req.flash('message', 'password'));
            }

            return done(null, user);
        });
    });
});

module.exports = {
    serializeUser,
    deserializeUser,
    signupStrategy,
    loginStrategy
}