import mongoose from 'mongoose';

interface OrderAttrs {
    _id: string;
    orderDate?: Date;
    total?: Number;
    items: [
        {
            product: {
                price: Number;
                name: string;
                sku: string;
                url: string;
            },
            quantity: Number;
        }
    ]
}

export interface OrderDoc extends mongoose.Document {
    _id: string;
    orderDate?: Date;
    total?: Number;
    items: [
        {
            product: {
                price: Number;
                name: string;
                sku: string;
                url: string;
            },
            quantity: Number;
        }
    ]
}

interface OrderModel extends mongoose.Model<OrderDoc> {
    build(attrs: OrderAttrs): OrderDoc;
}

const orderSchema = new mongoose.Schema<OrderDoc, OrderModel>(
    {
        _id: {
            type: String,
            required: true,
        },
        orderDate: {
            type: String,
            required: true,
            default: new Date()
        },
        total: {
            type: Number,
            required: true
        },
        items: [
            {
                product: {
                    price: Number,
                    name: String,
                    sku: String,
                    url: String
                },
                quantity: Number
            }
        ]
    },
    {
        _id: false   
    }
);

orderSchema.statics.build = (attrs: OrderAttrs) => {
    return new Order(attrs);
};

const Order = mongoose.model<OrderDoc, OrderModel>('Order', orderSchema);

export { Order };