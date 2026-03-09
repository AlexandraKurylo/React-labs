// Фільтр товарів у каталозі.
// У каталозі інтернет-магазину користувач може фільтрувати товари за
// різними критеріями.
// Фільтр може бути:
// − пошук за назвою
// − доступність
// − мінімальний рейтинг
// Створи змінну productFilter, яка може приймати різні типи залежно від того,
// який фільтр обрано.
// Навести приклад використання змінної для пошук за назвою, доступністю
// та мінімальним рейтингом.

interface Product {
  id: number;
  name: string;
  isAvailable: boolean;
  rating: number;
}

interface NameFilter {
  type: 'search';
  query: string;
}

interface AvailabilityFilter {
  type: 'availability';
  isAvailable: boolean;
}

interface RatingFilter {
  type: 'rating';
  minRating: number;
}

type ProductFilter = NameFilter | AvailabilityFilter | RatingFilter;


function applyFilter(products: Product[], filter: ProductFilter): Product[] {
  switch (filter.type) {
    case 'search':
      return products.filter(p => 
        p.name.toLowerCase().includes(filter.query.toLowerCase())
      );
    case 'availability':
      return products.filter(p => p.isAvailable === filter.isAvailable);
    case 'rating':
      return products.filter(p => p.rating >= filter.minRating);
    default:
      return products;
  }
}

// Тестовий масив товарів
const catalog: Product[] = [
  { id: 1, name: 'iPhone', isAvailable: true, rating: 4.8 },
  { id: 2, name: 'Samsung', isAvailable: false, rating: 4.5 },
  { id: 3, name: 'Xiaomi Redmi', isAvailable: true, rating: 3.9 },
  { id: 4, name: 'Nokia', isAvailable: true, rating: 5.0 },
];

//Приклади використання

// 1. Пошук за назвою
const searchFilter: ProductFilter = { type: 'search', query: 'Samsung' };
console.log("Результат пошуку за назвою:", applyFilter(catalog, searchFilter));

// 2. Фільтр за доступністю (тільки ті, що в наявності)
const availabilityFilter: ProductFilter = { type: 'availability', isAvailable: true };
console.log("Товари в наявності:", applyFilter(catalog, availabilityFilter));

// 3. Фільтр за мінімальним рейтингом (4.5 і вище)
const ratingFilter: ProductFilter = { type: 'rating', minRating: 4.5 };
console.log("Товари з високим рейтингом:", applyFilter(catalog, ratingFilter));