const { Reviews } = require("../../DB");

const putReview = async (idReview, updateData) => {
  console.log(updateData);
  try {
    await Reviews.update(updateData, {
      where: { idReview },
    });
    const review = await Reviews.findByPk(idReview);
    return review;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  putReview,
};
