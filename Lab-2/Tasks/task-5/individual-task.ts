// Для кожного варіанту необхідно:
// 1. Створити Інтерфейс для описаної сутності (з вказаними полями).
// 2. Створити Функцію, яка приймає цю сутність як аргумент та виконує
// вказану дію (з поверненням типізованого результату).
// 3. Продемонструвати виклик функції з тестовим об'єктом.
// Варіант 7: 
// -Сутність(interface): Order
// -Поля: orderId, total, status(new/paid)
// -Завдання для функції: Функція змінює статус замовлення на 'paid' і повертає оновлений об'єкт.

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
