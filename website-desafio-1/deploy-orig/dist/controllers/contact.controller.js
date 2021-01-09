"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactController = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ContactModel = require('../models/Contact.model');

var spValidate = require('sp-validate');

var ContactController = {
  receiveDatasForm: function receiveDatasForm(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _req$body, firstName, lastName, email, phoneNumber, company, role, message, errors, contact;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, email = _req$body.email, phoneNumber = _req$body.phoneNumber, company = _req$body.company, role = _req$body.role, message = _req$body.message;
              errors = {};

              if (spValidate.isLength(firstName, 3)) {
                errors.firstName = 'Your FirstName is very short';
              }

              if (spValidate.isEmpty(firstName)) {
                errors.firstName = 'FirstName must not be empty';
              }

              if (spValidate.isLength(lastName, 3)) {
                errors.lastName = 'Your lastName is very short';
              }

              if (spValidate.isEmpty(lastName)) {
                errors.lastName = 'lastName must not be empty';
              }

              if (!spValidate.isEmail(email)) {
                errors.email = 'email must be valid';
              }

              if (spValidate.isLength(email)) {
                errors.email = 'Your email is very short';
              }

              if (spValidate.isEmpty(email)) {
                errors.email = 'email must not be empty';
              }

              if (spValidate.isLength(company, 3)) {
                errors.company = 'Your company is very short';
              }

              if (spValidate.isEmpty(company)) {
                errors.company = 'company must not be empty';
              }

              if (spValidate.isLength(role, 3)) {
                errors.role = 'Your role is very short';
              }

              if (spValidate.isEmpty(role)) {
                errors.role = 'role must not be empty';
              }

              if (spValidate.isLength(message, 100)) {
                errors.message = 'Your message is very short';
              }

              if (spValidate.isEmpty(message)) {
                errors.message = 'message must not be empty';
              }

              if (spValidate.isPhone(phoneNumber)) {
                errors.phoneNumber = 'Your phoneNumber must be valid';
              }

              if (spValidate.isLength(phoneNumber, 9)) {
                errors.phoneNumber = 'Your phoneNumber is very short';
              }

              if (spValidate.isEmpty(phoneNumber)) {
                errors.phoneNumber = 'phoneNumber must not be empty';
              }

              if (!(Object.keys(errors).length > 0)) {
                _context.next = 20;
                break;
              }

              return _context.abrupt("return", res.json(errors));

            case 20:
              contact = new ContactModel({
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNumber: phoneNumber,
                company: company,
                role: role,
                message: message
              });
              _context.next = 23;
              return contact.save().then(function (data) {
                return res.json(data);
              })["catch"](function (err) {
                return res.json(err);
              });

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
};
exports.ContactController = ContactController;
//# sourceMappingURL=contact.controller.js.map