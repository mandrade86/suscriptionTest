import Joi from 'joi';
import { BadRequestException } from '../../../../exceptions/index';

export class ToogleTaskDto {
  static validationSchema = Joi.object({
    id: Joi.string().required(),
  });

  static validate(input: Partial<ToogleTaskDto>) {
    const { error, value } = ToogleTaskDto.validationSchema.validate(input, { abortEarly: false });
    if (error) {
      throw new BadRequestException(
        `Validation failed: ${error.details.map((err) => err.message).join(', ')}`,
      );
    }
    return value;
  }
}
