type OrderStatus = 'new' | 'paid';
type OrderId = number;

interface Order {
    orderId: OrderId;
    total: number;
    status: OrderStatus;
}

function payOrder(order: Order): Order {
    return {
        ...order,
        status: 'paid'
    };
}

const myOrder: Order = {
    orderId: 15,
    total: 1500,
    status: 'new'
};

console.log("Status 'new':", myOrder);

const processedOrder = payOrder(myOrder);

console.log("Status 'paid':", processedOrder);