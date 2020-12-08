import mongoose, { CallbackError } from 'mongoose';
import bcrypt from 'bcrypt';
import { UserClass } from '../utils/UserClass';

export interface UserDocument extends mongoose.Document {
  comparePassword: (
    plainPassword: string,
    cb: (e: CallbackError, b?: boolean | undefined) => void
  ) => void;
  generateToken: (
    cb: (e: CallbackError, doc?: UserDocument | undefined) => void
  ) => void;
  email: string;
  password: string;
  username?: string;
  profile_img?: string;
  marked_books?: Array<object>;
  done_books?: Array<object>;
  token?: string;
}

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: { type: String, required: true },
    username: String,
    profile_img: String,
    marked_books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    done_books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    token: {
      type: String,
    },
  },
  { timestamps: true, collection: 'users', versionKey: false }
);

UserSchema.pre<UserDocument>('save', function (next) {
  const user = this;

  if (user.isModified('password')) {
    console.log('password changed');
    try {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(user.password, salt);
      user.password = hash;
      next(null);
    } catch (error) {
      next(error);
    }
  } else {
    console.log('password hasnt been modified');
    next(null);
  }
});

UserSchema.loadClass(UserClass);

export default mongoose.model<UserDocument>('User', UserSchema);
