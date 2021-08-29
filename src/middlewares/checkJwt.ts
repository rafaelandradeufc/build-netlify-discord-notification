import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const checkJwt = (
  request: Request,
  response: Response,
  next: NextFunction,
): Response | void => {

    const signature = request.headers['x-webhook-signature'].toLocaleString();
    
    jwt.verify(signature, process.env.KEY_SECRET,function(err) {
        if (err) {
            console.log(err.message);
            response.sendStatus(401).send({
                message: err.message,
            });
        }
      });

    return next();

};
