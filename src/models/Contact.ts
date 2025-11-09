// models/Contact.ts
import mongoose, { Schema, model, models } from 'mongoose';

const ContactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
  },
  subject: {
    type: String,
    required: [true, 'Subject is required.'],
  },
  message: {
    type: String,
    required: [true, 'Message is required.'],
  },
}, { timestamps: true });

// Check if the model already exists to prevent redefinition errors in Next.js
const ContactModel = models.Contact || model('Contact', ContactSchema);

export default ContactModel;