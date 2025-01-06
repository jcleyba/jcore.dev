import { faker } from "@faker-js/faker";
import { json } from "@remix-run/node";

export const loader = async () => {
  const users = Array.from({ length: 15000 }, () => ({
    id: faker.number.int({ min: 10000000, max: 10015000 }),
    nombre_completo: faker.person.fullName(),
    cuit: faker.string.uuid(),
    afiliado: Math.random() > 0.5 ? "Si" : "No",
    created_at: faker.date.recent({ days: 30 }).toISOString(),
  }));

  return json({ users });
};
