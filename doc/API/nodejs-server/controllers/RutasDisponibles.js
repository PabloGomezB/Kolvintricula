'use strict';

var utils = require('../utils/writer.js');
var RutasDisponibles = require('../service/RutasDisponiblesService');

module.exports.addEnrolment = function addEnrolment (req, res, next) {
  var enrolmentData = req.swagger.params['enrolmentData'].value;
  RutasDisponibles.addEnrolment(enrolmentData)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getStudentById = function getStudentById (req, res, next) {
  var nif = req.swagger.params['nif'].value;
  RutasDisponibles.getStudentById(nif)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listaCursos = function listaCursos (req, res, next) {
  RutasDisponibles.listaCursos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modules_ufsGenerator = function modules_ufsGenerator (req, res, next) {
  var id = req.swagger.params['id'].value;
  RutasDisponibles.modules_ufsGenerator(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchStudent = function searchStudent (req, res, next) {
  var studentData = req.swagger.params['studentData'].value;
  RutasDisponibles.searchStudent(studentData)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
