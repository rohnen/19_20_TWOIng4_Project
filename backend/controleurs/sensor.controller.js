const Sensor = require('../models/sensor.model.js');

// Create and Save a new sensor
exports.create = (req, res) => {
  // Validate request
  if (!req.body.firstName) {
    // If firstName is not present in body reject the request by
    // sending the appropriate http code
    return res.status(400).send({
      message: 'first name can not be empty'
    });
  }

  // Create a new sensor
  const sensor = new Sensor({
    creationDate: req.body.creationDate,
    location: req.body.location,
    userId : req.body.userId,

  });

  // Save sensor in the database
  sensor
    .save()
    .then(data => {
      // we wait for insertion to be complete and we send the newly sensor integrated
      res.send(data);
    })
    .catch(err => {
      // In case of error during insertion of a new sensor in database we send an
      // appropriate message
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the sensor.'
      });
    });
};

// Retrieve and return all sensors from the database.
exports.findAll = (req, res) => {
  Sensor.find()
    .then(sensors => {
      res.send(sensors);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving measures.'
      });
    });
};

// Find a single measure with a sensorId
exports.findOne = (req, res) => {
  Sensor.findById(req.params.sensorId)
    .then(sensor => {
      if (!sensor) {
        return res.status(404).send({
          message: 'sensor not found with id ' + req.params.sensorId
        });
      }
      res.send(sensor);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'sensor not found with id ' + req.params.sensorId
        });
      }
      return res.status(500).send({
        message: 'Error retrieving sensor with id ' + req.params.sensorId
      });
    });
};

// Update a sensor identified by the sensorId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.firstName) {
    return res.status(400).send({
      message: 'first name can not be empty'
    });
  }

  // Find sensor and update it with the request body
  Sensor.findByIdAndUpdate(
    req.params.sensorId,
    {
        creationDate: req.body.creationDate,
        location: req.body.location,
        userId : req.body.userId,
    },
    { new: true }
  )
    .then(sensor => {
      if (!sensor) {
        return res.status(404).send({
          message: 'sensor not found with id ' + req.params.sensorId
        });
      }
      res.send(sensor);
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'sensor not found with id ' + req.params.sensorId
        });
      }
      return res.status(500).send({
        message: 'Error updating sensor with id ' + req.params.sensorId
      });
    });
};

// Delete a sensor with the specified sensorId in the request
exports.delete = (req, res) => {
  Sensor.findByIdAndRemove(req.params.sensorId)
    .then(sensor => {
      if (!sensor) {
        return res.status(404).send({
          message: 'sensor not found with id ' + req.params.sensorId
        });
      }
      res.send({ message: 'sensor deleted successfully!' });
    })
    .catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'sensor not found with id ' + req.params.sensorId
        });
      }
      return res.status(500).send({
        message: 'Could not delete sensor with id ' + req.params.sensorId
      });
    });
};