import { faker } from "@faker-js/faker";
import { json } from "@remix-run/node";

export const loader = async () => {
  const users = Array.from({ length: 15000 }, (_, index) => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    personalId: index,
    affiliateStatus: faker.helpers.arrayElement([
      "active",
      "inactive",
      "pending",
    ]),
    updatedAt: faker.date.recent({ days: 30 }).toISOString(),
  }));

  return json({ users });
};
