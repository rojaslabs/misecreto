const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const SecretSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "El título es obligatorio."],
		unique: true,
		minlength: [5, "El título del secreto debe ser de al menos 5 caracteres."],
		maxlength: [25, "El título del secreto debe ser de máximo 25 caracteres."]
	},
	content: {
		type: String,
		required: [true, "El secreto es obligatorio."],
		minlength: [10, "El contenido del secreto debe ser de al menos 10 caracteres."],
		maxlength: [500, "El contenido del secreto debe ser de máximo 500 caracteres."],
	},
	age: {
		type: Number,
		required: [true, "La edad es obligatoria."]
	},
	gender: {
		type: String,
		required: [true, "El género es obligatorio."],
	},
	likes: {
		type: Number,
		default: 0
	},
	comments: [{
		content: {
			type: String,
			required: [true, "El contenido del comentario es obligatorio."]
			// minlength: [10, "El comentario debe ser de al menos 10 caracteres."],
			// maxlength: [500, "El comentario debe ser de máximo 500 caracteres."],
		},
		timestamp: {
			type: Date,
			default: Date.now
		}
	}]
}, { timestamps: true });

SecretSchema.plugin(uniqueValidator, { message: "El título ya existe, escriba otro." })

const Secret = mongoose.model("Secret", SecretSchema);

module.exports = Secret;