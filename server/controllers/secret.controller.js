const Secret = require("../models/secret.model");

module.exports.findAllSecrets = (req, res) => {
  Secret.find().sort({ createdAt: -1 })
    .then(allDaSecrets => res.json({ secrets: allDaSecrets }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findAllSecretsByLikes = (req, res) => {
  Secret.find().sort({ likes: -1 })
    .then(allDaSecrets => res.json({ secrets: allDaSecrets }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findAllSecretsByComments = (req, res) => {
  Secret.find().sort({ comments: -1 })
    .then(allDaSecrets => res.json({ secrets: allDaSecrets }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleSecret = (req, res) => {
	Secret.findOne({ _id: req.params.id })
		.then(oneSingleSecret => res.json({ secret: oneSingleSecret }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewSecret = (req, res) => {
  Secret.create(req.body)
    .then(newlyCreatedSecret => res.json({ secret: newlyCreatedSecret }))
    .catch(err => res.status(400).json(err));
};

module.exports.updateExistingSecret = (req, res) => {
  Secret.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedSecret => res.json({ secret: updatedSecret }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingSecret = (req, res) => {
  Secret.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
