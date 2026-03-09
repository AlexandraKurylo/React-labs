// Для системи керування користувачами створіть функцію, яка реєструє
// нового користувача: приймає основні дані (id, ім’я, роль, email) та повертає об’єкт
// типу User (використати інтерфейс User зі зразка п.1.4). Якщо email не передано –
// він залишається undefined, а користувач за замовчуванням активний.
// В результаті повинна бути строго типізована функція, де параметр role має
// літеральний тип ('admin' | 'user'), email є необов’язковим, а результат завжди
// відповідає інтерфейсу User.

interface User {
  id: number;
  name: string;
  email?: string;
  role: 'admin' | 'user';
  isActive: boolean;
}

function registerUser( id: number, name: string, role: 'admin' | 'user', email?: string): User {
  const newUser: User = {
    id,
    name,
    role,
    isActive: true
  };

  if (email !== undefined) {
    newUser.email = email;
  }
  return newUser;
}

const user1 = registerUser(1, "Олександра", "user");
const user2 = registerUser(2, "Марія", "admin", "maria@test.com");

console.log(user1);
console.log(user2);