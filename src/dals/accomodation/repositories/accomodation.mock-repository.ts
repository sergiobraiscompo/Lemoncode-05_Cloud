
import { Accomodation, Review } from "../accomodation.model.js";
import { db } from "../../mock-data.js";
import { ObjectId } from "mongodb";
import { AccomodationRepository } from "./accomodation.repository.js";
import { getAccomodationContext } from "../accomodation.context.js";

const paginateAccomodationList = (
  accomodationList: Accomodation[],
  page: number,
  pageSize: number
): Accomodation[] => {
  let paginatedAccomodationList = [...accomodationList];
  if (page && pageSize) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, paginatedAccomodationList.length);
    paginatedAccomodationList = paginatedAccomodationList.slice(startIndex, endIndex);
  }

  return paginatedAccomodationList;
};

export const mockRepository: AccomodationRepository = {
  getAccomodationList: async (page?: number, pageSize?: number) =>
    paginateAccomodationList(db.accomodations, page, pageSize),
  getAccomodation: async (id: string) => db.accomodations.find((a) => a._id.toHexString() === id),
  addReview: async (accomodation: Accomodation, newReview: Review) => {
    return await getAccomodationContext()
      .findOneAndUpdate(
        {
          _id: accomodation._id,
        },
        { $push: { reviews: newReview } },
        { upsert: true, returnDocument: 'after' }
      )

  },
};
