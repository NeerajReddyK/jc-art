import mongoose, { Schema, Document, model, models } from "mongoose";

// Define the interface for the Comment document
export interface IComment extends Document {
  name: string;
  text: string;
  parentId?: mongoose.Types.ObjectId | null;
  replies?: IComment[]; // Optional field for replies
}

// Create the Comment schema
const commentSchema = new Schema<IComment>({
  name: {
    type: String,
    default: "Anonymous User",
  },
  text: {
    type: String,
    required: true,
  },
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
    default: null,
  },
}, { timestamps: true });

// Add the model to the exports
const Comment = models.Comment || model<IComment>("Comment", commentSchema);
export default Comment;
