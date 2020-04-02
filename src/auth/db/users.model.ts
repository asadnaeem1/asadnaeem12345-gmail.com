import { Document } from 'mongoose';

export class Users extends Document {
  constructor(public email: string, public courses?: Array<object>) {
    super();
  }
}
