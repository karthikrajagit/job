import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  { 
    username: {type: String, required: true},
    userEmail: {type: String, required: true},
    title: { type: String, required: true },
    description: { type: String, required: true },
    company: { type: String, required: true },
    experience: { type: String, required: true },
    salary: { type: String, required: true },
    location: { type: String, required: true },
    skills: { type: String, required: true },
    lastdate: { type: Date, required: true },
  },
  { timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;