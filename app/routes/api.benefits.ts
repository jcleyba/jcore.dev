import { faker } from "@faker-js/faker";
import { json } from "@remix-run/node";

export const loader = async () => {
  const users = Array.from({ length: 15000 }, (_, index) => ({
    quantity: faker.number.int({ min: 1, max: 10 }),
    userId: index,
    name: faker.commerce.productName(),
    deliveredBy: faker.person.fullName(),
    deliveredAt: faker.date.recent({ days: 30 }).toISOString(),
  }));

  return json({ users });
};
