import { faker } from "@faker-js/faker";
import { json } from "@remix-run/node";

export const loader = async () => {
  const benefits = Array.from({ length: 15000 }, (_, index) => ({
    id: faker.string.uuid(),
    cantidad: faker.number.int({ min: 1, max: 10 }),
    user_id: index.toString(),
    beneficio: faker.commerce.productName(),
    entregado_por: faker.person.fullName(),
    entregado_el: faker.date.recent({ days: 30 }).toISOString(),
  }));

  return json({ benefits });
};
