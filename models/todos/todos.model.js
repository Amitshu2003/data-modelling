import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    // Array of Subtodos
    subTodos: [
      {
        // type: String
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ]
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
