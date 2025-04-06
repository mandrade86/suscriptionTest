import Joi from 'joi';
import { BadRequestException } from '../../../../exceptions/index';

export class ListTaskDto {
  static validationSchema = Joi.object({
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).max(100).default(10),
    sortBy: Joi.string().valid('completed', 'createdAt').default('createdAt'),
    order: Joi.string().valid('asc', 'desc').default('asc'),
  });

  static validate(input: Partial<ListTaskDto>) {
    const { error, value } = ListTaskDto.validationSchema.validate(input, { abortEarly: false });
    if (error) {
      throw new BadRequestException(
        `Validation failed: ${error.details.map((err) => err.message).join(', ')}`,
      );
    }
    return value;
  }
}
