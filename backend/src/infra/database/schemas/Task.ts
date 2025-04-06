import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
  title: number;
  completed: boolean;
  completedAt: Date;
}

const TaskSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    completedAt: {
      type: Date,
      default: null
    }
  },
  {
    timestamps: true,
    collection: 'tasks',
  }
);

export default mongoose.model<ITask>('Task', TaskSchema);
