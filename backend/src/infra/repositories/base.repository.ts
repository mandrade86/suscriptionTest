export class BaseRepository<T> {
  constructor(protected model: any) {}

  async create(entity: T): Promise<T> {
    return this.model.create(entity);
  }

  async findOne(filter: Partial<T>): Promise<T | null> {
    return this.model.findOne(filter);
  }

  async findMany(filter: any): Promise<{
    data: T[] | [];
    page: number;
    totalPages: number;
    totalItems: number;
  }> {
    const {
      page,
      limit,
      sortBy,
      order,
    } = filter;
  
    const skip = (Number(page) - 1) * Number(limit);
    const sortOrder = order === 'desc' ? -1 : 1;
    const totalItems = await this.model.countDocuments();
    const totalPages = Math.ceil(totalItems / Number(limit));
    const data = await this.model
      .find()
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(Number(limit))
      .lean();
    return {
      data: data,
      page: Number(page),
      totalPages,
      totalItems,
    };
  }

  async updateOne(filter: Partial<T>, data: Partial<T>): Promise<T | boolean> {
    const res = await this.model.updateOne(filter, data);
    return res.modifiedCount > 0;
  }

  async delete(filter: Partial<T>): Promise<boolean> {
    const res = await this.model.deleteOne(filter);
    return res.deletedCount > 0;
  }
}