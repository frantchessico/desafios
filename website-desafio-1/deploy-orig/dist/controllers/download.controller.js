"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DownloadController = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var EmailModel = require('../models/Download.model');

var nodemailer = require('nodemailer');

var spValidate = require('sp-validate');

var DownloadModel = require('../models/Download.model');

var DownloadController = {
  sendEmail: function sendEmail(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _req$body, email, firstName, lastName, company, role, website, errors, transporter, download;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _req$body = req.body, email = _req$body.email, firstName = _req$body.firstName, lastName = _req$body.lastName, company = _req$body.company, role = _req$body.role, website = _req$body.website;
              errors = {};

              if (!spValidate.isEmail(email)) {
                errors.email = 'Email must be valid';
              }

              if (spValidate.isLength(firstName, 3)) {
                errors.firstName = 'Your first name is too short';
              }

              if (spValidate.isEmpty(firstName)) {
                errors.firstName = 'First name must not be empty';
              }

              if (spValidate.isLength(lastName, 3)) {
                errors.lastName = 'Your last name is too short';
              }

              if (spValidate.isEmpty(lastName)) {
                errors.lastName = 'Last name must not be empty';
              }

              if (spValidate.isLength(company, 2)) {
                errors.company = 'Your company name is too short';
              }

              if (spValidate.isEmpty(company)) {
                errors.company = 'Company name must not be empty';
              }

              if (spValidate.isLength(role, 3)) {
                errors.role = 'Your role name is too short';
              }

              if (spValidate.isEmpty(role)) {
                errors.role = 'Role must not be empty';
              }

              if (spValidate.isLength(website, 3)) {
                errors.website = 'Your website url  is too short';
              }

              if (spValidate.isEmpty(website)) {
                errors.website = 'Website must not be empty';
              }

              if (!(Object.keys(errors).length > 0)) {
                _context2.next = 15;
                break;
              }

              return _context2.abrupt("return", res.json(errors));

            case 15:
              transporter = nodemailer.createTransport({
                service: 'gmail',
                host: 'smtp.gmail.com',
                port: 993,
                auth: {
                  user: 'jaimeinoque20@gmail.com',
                  pass: 'Jovyta@jaime1996'
                }
              });
              download = new DownloadModel({
                email: email,
                firstName: firstName,
                lastName: lastName,
                company: company,
                role: role,
                website: website
              });
              _context2.next = 19;
              return download.save().then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return transporter.sendMail({
                          from: "Francisco Inoque - noreply<mycv@franciscoinoque.tech>",
                          to: email,
                          subject: 'Thank you for downloading my CV',
                          html: "<h1>Hello ".concat(firstName, "</h1>\n                <br>\n                <br>\n                <strong>Here is Francisco, to download my CV just click on the link: </strong><br>\n                <a href=\"https://drive.google.com/file/d/19gvFFGESD5Fk9j3XF9NfEW6oU7AYSw79/view?usp=sharing\">Click me!</a>\n                \n                <h3>Contacts: </h3>\n                <ul>\n                <li>Skype: <span style=\"color: #8e2ddd\">tchessico@live.com</span> </li>\n                <li>Email: <span style=\"color: #8e2ddd\">jaimeinoque20@gmail.com</span> </li>\n                </ul>\n                \n                ")
                        }).then(function () {
                          return res.json({
                            success: 'Your message sent successfully'
                          });
                        })["catch"](function (err) {
                          return res.json(err);
                        });

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })));

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
exports.DownloadController = DownloadController;
//# sourceMappingURL=download.controller.js.map