import { validate } from "../../src/Middlewares/validate";
import { Request, Response } from "express";
import Joi from "joi";

describe("validate middleware", () => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  const next = jest.fn();

  const mockRes = () => {
    const res: Partial<Response> = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res as Response;
  };

  beforeEach(() => {
    next.mockClear();
  });

  it("should call next() if data is valid", () => {
    const req = { body: { name: "Julio" } } as Request;
    const res = mockRes();

    validate(schema)(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  it("should respond with 400 if data is invalid", () => {
    const req = { body: {} } as Request;
    const res = mockRes();

    validate(schema)(req, res, next);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: "Some of the fields provided are incorrect",
    });
    expect(next).not.toHaveBeenCalled();
  });
});