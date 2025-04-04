import { NextFunction, Request, Response } from 'express';
import { checkSchema, Schema } from 'express-validator';
import { DefaultSchemaKeys } from 'express-validator/lib/middlewares/schema';

export function validator(schema: Schema<DefaultSchemaKeys>) {

  return async (req: Request, res: Response, next: NextFunction) => {

    const validations = await checkSchema(schema).run(req);

    for (const validation of validations) {
      if (!validation.isEmpty()) {
        res.status(400).json({ errors: validation.mapped() });
        return;
      }
    }
  
    next();
  };
}
