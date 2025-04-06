export interface IBaseRepository<T> {
  create: (entity: T) => Promise<T>;
  findOne: (filter: Partial<T>) => Promise<T | null>;
  findMany: (filter: any) => Promise<{
    data: T[] | [];
    page: number;
    totalPages: number;
    totalItems: number;
  }>;
  updateOne: (filter: Partial<T>, entity: Partial<T>) => Promise<T | boolean>;
  delete: (entity: T) => Promise<T | boolean>;
}
