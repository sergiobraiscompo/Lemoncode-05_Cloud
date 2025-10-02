import { ObjectId } from "mongodb";
import { getAccomodationContext } from "../accomodation.context.js";
export const mongoDBRepository = {
    getAccomodationList: async (page, pageSize) => {
        const skip = Boolean(page) ? (page - 1) * pageSize : 0;
        const limit = pageSize ?? 0;
        return await getAccomodationContext().find().skip(skip).limit(limit).toArray();
    },
    getAccomodation: async (id) => {
        return await getAccomodationContext().findOne({
            _id: new ObjectId(id),
        });
    },
    addReview: async (accomodation, newReview) => {
        return await getAccomodationContext()
            .findOneAndUpdate({
            _id: accomodation._id,
        }, { $push: { reviews: newReview } }, { upsert: true, returnDocument: 'after' });
    },
};
