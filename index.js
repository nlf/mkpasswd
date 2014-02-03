#!/usr/bin/env node
var crypto = require('crypto');
var sha512crypt = require('sha512crypt-node');
var pw = require('pw');
var salt = crypto.randomBytes(10).toString('base64');

process.stdout.write('Password: ');
pw(function (password) {
    process.stdout.write('Password (confirm): ');
    pw(function (password2) {
        if (password !== password2) {
            console.error('Passwords do not match');
            process.exit(1);
        }
        console.log(sha512crypt.sha512crypt(password, salt));
        process.exit(0);
    });
});
