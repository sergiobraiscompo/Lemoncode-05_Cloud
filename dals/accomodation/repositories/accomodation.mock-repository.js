import { db } from "../mock-data.js";
import { getAccomodationContext } from "../accomodation.context.js";
const paginateAccomodationList = (accomodationList, page, pageSize) => {
    let paginatedAccomodationList = [...accomodationList];
    if (page && pageSize) {
        const startIndex = (page - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize, paginatedAccomodationList.length);
        paginatedAccomodationList = paginatedAccomodationList.slice(startIndex, endIndex);
    }
    return paginatedAccomodationList;
};
export const mockRepository = {
    getAccomodationList: async (page, pageSize) => paginateAccomodationList(db.accomodations, page, pageSize),
    getAccomodation: async (id) => db.accomodations.find((a) => a._id.toHexString() === id),
    addReview: async (accomodation, newReview) => {
        return await getAccomodationContext()
            .findOneAndUpdate({
            _id: accomodation._id,
        }, { $push: { reviews: newReview } }, { upsert: true, returnDocument: 'after' });
    },
};
