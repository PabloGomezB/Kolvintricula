'use strict';


/**
 * Añade una nueva matricula
 * Petición POST en la cual se pasará en el body todos los datos necesarios para crear la matricula al nuevo estudiante 
 *
 * enrolmentData AddEnrolmentData Objeto con los datos de la nueva matricula (optional)
 * no response value expected for this operation
 **/
exports.addEnrolment = function(enrolmentData) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Muestra los datos de un estudiante
 * Petición GET con la que obtenemos todos los datos del estudiante pasandole como parámetro en la URL su NIF 
 *
 * nif String NIF del estudiante a buscar
 * returns List
 **/
exports.getStudentById = function(nif) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date_birth" : "1998-03-23",
  "last_name1" : "Abascal",
  "email_personal" : "santivox@derechas.com",
  "last_name2" : "Conde",
  "name" : "Santiago",
  "email_pedralbes" : "a21sanabacon@inspedralbes.cat",
  "nif" : "48184496W",
  "id" : 1,
  "mobile_number" : 6.83456524E8,
  "enrolment_status" : "MATRICULADO",
  "photo_path" : "448558383.png"
}, {
  "date_birth" : "1998-03-23",
  "last_name1" : "Abascal",
  "email_personal" : "santivox@derechas.com",
  "last_name2" : "Conde",
  "name" : "Santiago",
  "email_pedralbes" : "a21sanabacon@inspedralbes.cat",
  "nif" : "48184496W",
  "id" : 1,
  "mobile_number" : 6.83456524E8,
  "enrolment_status" : "MATRICULADO",
  "photo_path" : "448558383.png"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Lista de cursos
 * Petición GET que devuelve una lista de todos los cursos actuales 
 *
 * returns List
 **/
exports.listaCursos = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "DAM",
  "description" : "Desarrollo de Aplicaciones Multiplataforma",
  "id" : 1,
  "state" : "MATRICULA",
  "type" : "CFGS"
}, {
  "name" : "DAM",
  "description" : "Desarrollo de Aplicaciones Multiplataforma",
  "id" : 1,
  "state" : "MATRICULA",
  "type" : "CFGS"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Muestra toda la estructura de un curso
 * Petición GET con la que obtenemos todos los módulos con sus correspondientes UF de un año y curso determinados 
 *
 * id BigDecimal Id del curso sobre el que construir la respuesta
 * returns List
 **/
exports.modules_ufsGenerator = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "year" : 1,
  "modules" : [ "{}", "{}" ]
}, {
  "year" : 1,
  "modules" : [ "{}", "{}" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Busca el estudiante con los argumentos solicitados
 * Petición POST en la cual se pasará en el body los argumentos necesarios para buscar y obtener de vuelta los datos de un estudiante en concreto. 
 *
 * studentData SearchStudentData Objeto con los parametros del estudiante a buscar (optional)
 * no response value expected for this operation
 **/
exports.searchStudent = function(studentData) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

