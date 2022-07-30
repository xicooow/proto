const { Types } = require("mongoose");

const Health = require("../../models/Health");

module.exports = async (_req, res) => {
  const sort = { "cre_date": "desc" };
  const data = { diagnosis: "alive", cre_date: new Date() };
  const query = { ...data, cre_date: { $exists: true } };
  const entity = new Health(data);

  const crash = (message = "Something went wrong...") => {
    res.status(503);
    res.json({ message });
  };

  try {
    await entity.save();

    const findResult = await Health.find(query).sort(sort);

    if (!Array.isArray(findResult) || findResult.length === 0) {
      crash("MongoDB service is not working...");
      return;
    }

    const [diagnosis] = findResult;

    if (findResult.length > 1) {
      const deleteQuery = {
        _id: {
          $ne: new Types.ObjectId(diagnosis._id)
        }
      };

      await Health.deleteMany(deleteQuery);
    }

    res.json(diagnosis);
  } catch (error) {
    crash(error.message);
  }
};
