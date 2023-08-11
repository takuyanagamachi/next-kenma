import { Schema, model, models } from 'mongoose'

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
}, { timestamps: true })

export const Post = models.Post || model('Post', PostSchema);
