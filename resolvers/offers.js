import Offer from "../models/offers.js"
import tryCatchHandler from "../utils/tryCatch.js"

const OffersResolver = {
        Query: {
            getAllOffers: tryCatchHandler(() => {
                return Offer.find()
            })
        },

        Mutation: {
            createOffer: tryCatchHandler(async(_, {offer}) => {
                const newOffer = new Offer({
                    ...offer
                })
                await newOffer.save()
                return newOffer
            }),

            updateOffer: tryCatchHandler(async(_, {offerID, updatedOffer}) => {
                const index = await Offer.findIndex(item => item._id === offerID)
                if (index !== -1) {
                    Offer[index] = {...Offer[index], ...updatedOffer}
                    return Offer[index]
                }
               return null
            }),
            deleteOffer: tryCatchHandler(async(_, {offerID}) => {
                const index = await Offer.findIndex(item => item._id === offerID)
                if (index !== -1) {
                    const [deletedOffer] = Offer.splice(index, 1)
                    return deletedOffer
                }
               return null
            })
        }
}

export default OffersResolver