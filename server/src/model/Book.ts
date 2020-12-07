import mongoose from 'mongoose';

export interface BookDocument extends mongoose.Document {
  title: string;
  authur: string;
  _id?: string;
  isOpen?: boolean;
  imgURL?: string;
  imgAlt?: string;
  description?: string;
}

const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: User
    // },
    isOpen: { type: Boolean, default: true },
    imgURL: { type: String, default: null },
    imgAlt: { type: String, default: null },
    description: { type: String },
  },
  { timestamps: true, collection: 'books' }
);

export const BookModel = mongoose.model<BookDocument>('Book', BookSchema);
