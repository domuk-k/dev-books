import mongoose, { CallbackError } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel, { UserDocument } from '../model/User';

const IS_THIS_SECRET = 'devooksecret';

export class UserClass extends mongoose.Model {
  comparePassword(
    plainPassword: string,
    cb: (e: CallbackError, b?: boolean) => void
  ) {
    try {
      const doesMatch = bcrypt.compareSync(plainPassword, this.password);
      cb(null, doesMatch);
    } catch (error) {
      cb(error);
    }
  }

  generateToken(
    this: UserDocument,
    cb: (e: CallbackError, doc?: UserDocument) => void
  ) {
    const user = this;

    const token = jwt.sign(user._id.toHexString(), IS_THIS_SECRET);

    user.token = token;

    user.save((err, user) => {
      if (err) return cb(err);

      cb(null, user);
    });
  }

  static findByToken(
    token: string,
    cb: (e: CallbackError, user?: UserDocument) => void
  ) {
    jwt.verify(token, IS_THIS_SECRET, (err, decode) => {
      UserModel.findOne(
        { _id: decode, token },
        (err: Error | null, user: UserDocument) => {
          if (err) return cb(err);
          cb(null, user);
        }
      );
    });
  }
}
