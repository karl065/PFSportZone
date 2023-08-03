const { Reviews, Inventarios } = require("../../DB");

const createReviewDB = async (idUser, id_inventory, message, evaluation) => {
  try {
    const review = await Reviews.create({
      idUser: idUser,
      id_inventory: id_inventory,
      message: message,
      evaluation: evaluation,
      like: 0,
      dislike: 0,
    });
    return review;
  } catch (error) {
    return error.message;
  }
};

// const addLikeOrDislike = async (idReview, type) => {
//   try {
//     const review = await Reviews.findByPk(idReview);

//     if (!review) throw new Error("Review not found...");

//     if (type === "like") review.like += 1;
//     else if (type === "dislike") review.dislike += 1;

//     await review.save();

//     return review;
//   } catch (error) {
//     return error.message;
//   }
// };

// const addProductRating = async (id_inventory, rating) => {
//   try {
//     const inventory = await Inventarios.findByPk(id_inventory);

//     if (!inventory) throw new Error("Inventory item not found...");

//     const existingReviews = await Reviews.findAll({
//       where: { id_inventory: id_inventory },
//     });

//     const totalReviews = existingReviews.length;
//     const existingRatingSum = existingReviews.reduce(
//       (sum, review) => sum + parseInt(review.evaluation),
//       0
//     );
//     const newTotalReviews = totalReviews + 1;
//     const newRatingSum = existingRatingSum + parseInt(rating);

//     console.log(totalReviews);

//     // inventory.rating = newRatingSum / newTotalReviews;

//     // await inventory.save;

//     // return inventory;

//     return newRatingSum / newTotalReviews;
//   } catch (error) {}
// };

module.exports = {
  createReviewDB,
};
