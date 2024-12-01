import mongoose from "mongoose";

// Define your Blog schema
const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
}, {
  timestamps: true, // This will add createdAt and updatedAt fields
});

// Check if the model is already defined to avoid overwriting it in development mode
const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
