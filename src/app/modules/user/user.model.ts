import { model, Schema } from 'mongoose';
import { User } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

const userSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // FOR createdAt, updatedAt
  },
);

//! pre save middleware / hook will work on create () save()
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; //! 'this' will refer current document

  //! hashing password and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

// post save middleware / hook //! For hidden password by set "<empty string>" after saving password
userSchema.post('save', async function (doc, next) {
  doc.password = '';
  next();
});

export const UserModel = model<User>('User', userSchema);

