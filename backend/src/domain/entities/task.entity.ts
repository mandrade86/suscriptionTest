import { BaseEntity } from './base.entity';

export interface TaskAttributes {
  id: string;
  title: string;
  completed: boolean;
  completedAt: Date | null;
}

export class Task extends BaseEntity implements TaskAttributes {
  public id!: string;
  public title!: string;
  public completed!: boolean;
  public completedAt!: Date | null;
}
