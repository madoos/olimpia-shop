import { Product } from './interfaces';
import faker from  'faker';
import { times } from 'ramda';

export const fakeProduct = () : Product => ({
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    slug: faker.lorem.slug(),
    price: faker.commerce.price(),
    photos: [
        'https://www.226ers.com/wp-content/uploads/2020/05/226ERS-mask12.jpg',
        'https://assets.kogan.com/files/product/etail/Xiaomi-/KHXMPMFML_1.jpg?auto=webp&canvas=753%2C502&fit=bounds&height=502&quality=75&width=753',
        'https://cdn.shopify.com/s/files/1/2217/8859/products/OURAAirMask_Black_Reverse_960x.jpg?v=1592846313',
        'https://cdn.shopify.com/s/files/1/1363/2499/products/mask-colors.jpg?v=1588352212',
        'https://erdem.com/media/catalog/product/cache/d821533610e9ffb1a01fea2b9986d692/7/b/7bae6483-02cd-401f-8d1a-c3915f7d2c8b.jpg',
        'https://www.al.com/resizer/IEB_Yqz3Jk7WcspvyGGQ_J3zcSI=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/BYMAZ4PXUFGLLAQYXXDKXWLGLY.JPG',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFWMxk57pbbNWJySwlOzfAZggzpvSZD1IBcQ&usqp=CAU'
    ].sort(() => Math.random() - 0.5)
});

export const fakeProducts = (n: number): Product[] => times(fakeProduct, n);