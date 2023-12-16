import { Request, Response } from 'express';

export function get(_: Request, res: Response) {
  res.status(200).send('pong');
}

const pingController = {
  get
};

export default pingController;
