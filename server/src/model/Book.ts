import mongoose from 'mongoose';
import UserModel from './User';

export interface BookDocument extends mongoose.Document {
  title: string;
  authur: string;
  owner: object;
  isPrivate?: boolean;
  imgURL?: string;
  imgAlt?: string;
  description?: string;
}

const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    targetDate: { type: String, default: String },
    isPrivate: { type: Boolean, default: false },
    imgURL: { type: String, default: null },
    imgAlt: { type: String, default: null },
    description: { type: String },
  },
  { timestamps: true, collection: 'books', versionKey: false }
);

export default mongoose.model<BookDocument>('Book', BookSchema);
