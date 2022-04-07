import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  validateRequest,
  NotFoundError,
  BadRequestError,
  requireAuth,
  NotAuthorizedError,
  Gender
} from '@ohbiohealth/common';
import { Profile } from '../models/profile';
import { Order } from '../models/order'

import { natsWrapper } from '../nats-wrapper';
import { DeviceBoughtPublisher } from '../events/publishers/device-bought-publisher';

const router = express.Router();

router.post(
  '/api/profiles/orders',
  requireAuth,
  [
    body('orderNumber').not().isEmpty().withMessage('Order number is required'),
    body('total').not().isEmpty().withMessage('Order total is required'),
    body('total').isNumeric().withMessage('Invalid order total value'),
    body('items').not().isEmpty().withMessage('Order items are required')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const profile = await Profile.findById(req.currentUser!.id);

    if (!profile) {
      throw new NotFoundError();
    }

    const order = Order.build({
        _id: req.body.orderNumber,
        orderDate: new Date(),
        total: req.body.total,
        items: req.body.items
    });
    await order.save();

    profile.set({
        orders: [...profile.orders!, req.body.orderNumber]
    })

    await new DeviceBoughtPublisher(natsWrapper.client).publish({
      email: req.currentUser!.email
    })

    await profile.save();
    res.send(profile);
  }
);

export { router as newOrderRouter };
