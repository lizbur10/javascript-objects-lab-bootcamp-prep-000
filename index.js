var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
<<<<<<< HEAD
  return Object.assign({}, object, { [key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
=======
  Object.assign({}, {key: value});
>>>>>>> c9e98dbd36a8e2343a6aaaea112ba9cd578e2f09
}
