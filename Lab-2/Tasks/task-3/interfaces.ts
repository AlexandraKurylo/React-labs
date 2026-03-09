// Створіть інтерфейс Order, який містить: ідентифікатор замовлення,
// кількість одиниць товару, роль користувача та статус замовлення з п.1.3.
// Продемонструйте використання інтерфейсу.

type TUserRole = 'admin' | 'manager' | 'customer';
type TOrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

interface Order {
    orderId: string;      
    quantity: number;     
    userRole: TUserRole;  
    status: TOrderStatus; 
}

const newOrder: Order = {
    orderId: "ABC-12345",
    quantity: 3,
    userRole: "customer",
    status: "pending"
};

function printOrderDetails(order: Order): void {
    console.log(`Інформація про замовлення`);
    console.log(`ID: ${order.orderId}`);
    console.log(`Кількість: ${order.quantity} шт.`);
    console.log(`Хто створив: ${order.userRole}`);
    console.log(`Поточний статус: ${order.status}`);
}

printOrderDetails(newOrder);