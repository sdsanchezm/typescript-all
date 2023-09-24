import mongoose, { Schema, Document } from 'mongoose';


export interface IRevokedToken extends Document {
    token: string;
}

const revokedTokenSchema = new Schema({
    token: String,
});

export default mongoose.model<IRevokedToken>('RevokedToken', revokedTokenSchema);
