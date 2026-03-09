// Система керування замовленням
// Для систему обробки замовлень в інтернет-магазині:
// 1. Створіть тип UserRole, який забезпечить наступні ролі: admin, manager,
// customer (можна використати свій набір ролей).
// 2. Створіть тип Статусу замовлення, який забезпечить ведення наступних
// статусів: pending, processing, shipped, delivered, cancelled.
// Примітка. Ім’я типу оберіть самостійно, на початку імені типу
// можна використовувати літеру Т, яка буде свідчити, що це тип.
// Виходячи з такого підходу запису імен UserRole з п.1 буде TUserRole.
// Зверніть увагу, що використання в імені Т для типів, та І для
// інтерфейсів в сучасному TypeScript не є обов’язковим, але зручно для
// розуміння і може бути як правило на деяких проєктах .
// 3. Продемонструйте використання створених типів.

type TUserRole = 'admin' | 'manager' | 'customer';
type TOrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

interface TOrder {
    id: number;
    status: TOrderStatus;
}

const currentUserRole: TUserRole = 'manager';

const myOrder: TOrder = {
    id: 1,
    status: 'pending'
};

function changeStatus(order: TOrder, newStatus: TOrderStatus, role: TUserRole) {
    if (role === 'admin' || role === 'manager') {
        order.status = newStatus;
        console.log(`Статус замовлення №${order.id} змінено на: ${newStatus}`);
    } else {
        console.log("Помилка: У клієнта немає прав для зміни статусу.");
    }
}

changeStatus(myOrder, 'processing', currentUserRole);