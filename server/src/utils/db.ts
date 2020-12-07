import * as mongoose from 'mongoose';
import { BookModel, BookDocument } from '../model/Book';

class DB {
  public static async read(
    query: object
  ): Promise<mongoose.Query<BookDocument[], BookDocument>> {
    return await BookModel.find(query);
  }
  public static async create(document: BookDocument): Promise<BookDocument> {
    return await BookModel.create(document);
  }
  public static async update(
    document: BookDocument
  ): Promise<mongoose.UpdateQuery<BookDocument>> {
    return await BookModel.updateOne({ _id: document._id }, { ...document });
  }
  public static async delete(_id: string): Promise<void> {
    await BookModel.remove({ _id }, err => {
      console.error(err);
    });
  }
}

export default DB;
