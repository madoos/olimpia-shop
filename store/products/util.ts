import { Product } from './interfaces';
import faker from  'faker';
import { times } from 'ramda';

export const fakeProduct = () : Product => ({
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    slug: faker.lorem.slug(),
    price: faker.commerce.price(),
   photos: times(() => faker.image.cats(), 10)
});

export const fakeProducts = (n: number): Product[] => times(fakeProduct, n);