const db = require("../db.json");

module.exports = (req, res, next) => {
  string = "/statistics/";
  if (req.method == 'GET' && req._parsedOriginalUrl.path == string) {
    const miss_at_least_one = [
      ...new Set(db["stocks"].filter((s) => s.stock < 1).map((s) => s.barId)),
    ];

    const all_stocks = db["bars"]
      .filter((b) => miss_at_least_one.indexOf(b.id) === -1)
      .map((b) => b.id);

    res.send({
      all_stocks,
      miss_at_least_one,
    });
  } else {
    next();
  }
};
