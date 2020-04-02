import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  courses: Array,
});
