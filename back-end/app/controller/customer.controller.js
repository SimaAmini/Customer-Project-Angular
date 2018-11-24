const db = require("../config/db.config.js");
const Customer = db.customers;
// Post a Customer
exports.create = (req, res) => {
  // Save to MySQL database
  Customer.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    email: req.body.email
  }).then(customer => {
    // Send created customer to client
    res.send(200, { success: true, customer });
  });
};

// FETCH all Customers
exports.findAll = (req, res) => {
  Customer.findAll().then(customers => {
    // Send all customers to Client
    res.send(customers);
  });
};

// Find a Customer by Id
exports.findById = (req, res) => {
  Customer.findById(req.params.customerId).then(customer => {
    res.send(customer);
  });
};

// Update a Customer
exports.update = (req, res) => {
  const id = req.params.customerId;
  Customer.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      email: req.body.email
    },
    { where: { id: req.params.customerId } }
  ).then(() => {
    res.status(200).send({ success: true, id:Number(id) });
  });
};

// Delete a Customer by Id
exports.delete = (req, res) => {
  const id = req.params.customerId;
  // let itemID = Number(id);
  Customer.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send({ success: true, id:Number(id) });
  });
};
