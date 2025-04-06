import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
  name: number;
  cpf: string;
  email: string;
  observation: string;
  colorId: number;
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
