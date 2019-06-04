"use strict";
var handlebars = require("handlebars");
var handlebarsUtilObj = require("../handlebarsUtil");

var mongoose = require("mongoose"),
  bcrypt = require("bcrypt"),
  User = mongoose.model("User"),
  path = require("path"),
  async = require("async"),
  crypto = require("crypto"),
  _ = require("lodash"),
  email = "timbukmovetest@gmail.com",
  pass = "Timbukmove123!",
  nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass
  }
});

exports.register = function(req, res) {
  var newUser = new User(req.body);
  newUser.hash_password = bcrypt.hashSync(req.body.hash_password, 10);
  newUser.save(function(err, user) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      user.hash_password = undefined;
      return res.json(user);
    }
  });
};

exports.index = function(req, res) {
  return res.sendFile(path.resolve("./public/home.html"));
};

exports.render_forgot_password_template = function(req, res) {
  return res.sendFile(path.resolve("./public/forgot-password.html"));
};

exports.render_reset_password_template = function(req, res) {
  return res.sendFile(path.resolve("./public/reset-password.html"));
};

exports.render_register_template = function(req, res) {
  return res.sendFile(path.resolve("./public/register-user.html"));
};

/**
 * Forgot Password
 */
exports.forgot_password = function(req, res) {
  async.waterfall(
    [
      function(done) {
        User.findOne({
          email: req.body.email
        }).exec(function(err, user) {
          if (user) {
            console.log("find user");
            done(err, user);
          } else {
            done("User not found.");
          }
        });
      },
      function(user, done) {
        // create the random token
        console.log("Create token");
        crypto.randomBytes(20, function(err, buffer) {
          var token = buffer.toString("hex");
          done(err, user, token);
        });
      },
      function(user, token, done) {
        console.log("Find the user and update document");
        User.findByIdAndUpdate(
          { _id: user._id },
          {
            reset_password_token: token,
            reset_password_expires: Date.now() + 200000
          },
          { upsert: true, new: true }
        ).exec(function(err, new_user) {
          done(err, token, new_user);
        });
      },
      function(token, user, done) {
        console.log("Sending email");
        handlebarsUtilObj.readHTMLFile(
          __dirname + "/../templates/forgot-password-email.html",
          function(err, html) {
            var template = handlebars.compile(html);
            var replacements = {
              reset_password_link:
                "http://localhost:3000/auth/reset_password?token=" + token
            };
            var htmlToSend = template(replacements);
            var data = {
              to: user.email,
              from: email,
              subject: "Password help has arrived!",
              html: htmlToSend
            };
            smtpTransport.sendMail(data, function(err) {
              if (!err) {
                return res.json({
                  message: "Kindly check your email for further instructions"
                });
              } else {
                return done(err);
              }
            });
          }
        );
      }
    ],
    function(err) {
      return res.status(422).json({ message: err });
    }
  );
};

/**
 * Reset password
 */
exports.reset_password = function(req, res, next) {
  User.findOne({
    reset_password_token: req.body.token,
    reset_password_expires: {
      $gt: Date.now()
    }
  }).exec(function(err, user) {
    if (!err && user) {
      if (req.body.newPassword === req.body.verifyPassword) {
        user.hash_password = bcrypt.hashSync(req.body.newPassword, 10);
        user.reset_password_token = undefined;
        user.reset_password_expires = undefined;
        user.save(function(err) {
          if (err) {
            return res.status(422).send({
              message: err
            });
          } else {
            handlebarsUtilObj.readHTMLFile(
              __dirname + "/../templates/reset-password-email.html",
              function(err, html) {
                var template = handlebars.compile(html);
                var replacements = {};
                var htmlToSend = template(replacements);
                var data = {
                  to: user.email,
                  from: email,
                  subject: "Password Reset Confirmation",
                  html: htmlToSend
                };

                smtpTransport.sendMail(data, function(err) {
                  if (!err) {
                    return res.json({ message: "Password reset" });
                  } else {
                    return done(err);
                  }
                });
              }
            );
          }
        });
      } else {
        return res.status(422).send({
          message: "Passwords do not match"
        });
      }
    } else {
      return res.status(400).send({
        message: "Password reset token is invalid or has expired."
      });
    }
  });
};
