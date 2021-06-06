type Brand<K, T> = K & { __brand: T };

type Stat = Brand<number, 'Stat'>;
