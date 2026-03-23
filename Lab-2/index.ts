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

const root = document.getElementById('root');

if (root) {
    root.innerHTML = `
        <div style="background: #1e1e1e; color: #d4d4d4; font-family: 'Courier New', monospace; padding: 20px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">
            <h2 style="color: #4ec9b0; border-bottom: 1px solid #333; padding-bottom: 10px;">Terminal Output</h2>
            
            <div style="margin-top: 20px;">
                <span style="color: #ce9178;">> Status 'new':</span>
                <pre style="background: #2d2d2d; padding: 10px; color: #9cdcfe; border-radius: 4px;">${JSON.stringify(myOrder, null, 2)}</pre>
            </div>

            <div style="margin-top: 20px;">
                <span style="color: #ce9178;">> Status 'paid':</span>
                <pre style="background: #2d2d2d; padding: 10px; color: #b5cea8; border-radius: 4px;">${JSON.stringify(processedOrder, null, 2)}</pre>
            </div>
            
            <p style="margin-top: 30px; color: #6a9955; font-style: italic;">// Код виконано успішно. Об'єкти виведено на екран.</p>
        </div>
    `;
}