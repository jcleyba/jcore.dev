import { faker } from "@faker-js/faker";
import { json } from "@remix-run/node";

export const loader = async () => {
  const benefits = Array.from({ length: 15000 }, () => ({
    id: faker.string.uuid(),
    cantidad: faker.number.int({ min: 1, max: 10 }),
    user_id: faker.number.int({ min: 10000000, max: 10015000 }),
    beneficio: faker.commerce.productName(),
    entregado_por: faker.person.fullName(),
    entregado_el: faker.date.recent({ days: 30 }).toISOString(),
  }));

  return json({ benefits });
};
