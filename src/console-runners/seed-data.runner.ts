import { getAccomodationContext } from '#dals/accomodation/accomodation.context.js';
import { db } from '#dals/mock-data.js';

export const run = async () => {
  for (const accomodation of db.accomodations) {
    await getAccomodationContext().insertOne({
      ...accomodation,
    });
  }
};