import Joi from 'joi';
import { BadRequestException } from '../../../../exceptions/index';

export class CreateTaskDto {
  static validationSchema = Joi.object({
    title: Joi.string().min(3).max(200).required(),
  });

  static validate(input: Partial<CreateTaskDto>) {
    const { error, value } = CreateTaskDto.validationSchema.validate(input, { abortEarly: false });
    if (error) {
      throw new BadRequestException(
        `Validation failed: ${error.details.map((err) => err.message).join(', ')}`,
      );
    }
    return value;
  }
}
