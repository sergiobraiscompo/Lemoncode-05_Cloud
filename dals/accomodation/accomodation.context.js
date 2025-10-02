import { dbServer } from "#core/servers/db.server.js";
export const getAccomodationContext = () => dbServer.db?.collection('listingsAndReviews');
