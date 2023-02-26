const db = require("../db/dbConfig.js");

// async await is the modern way to handle promises
// we tried to show you earlier :'(
const getAllPortfolios = async () => {
  try {
    // .any() CAN return ANYTHING from the query
    // returns ALL rows that match the QUERY
    // that we pass
    const allPortfolios = await db.any("SELECT * FROM portfolios");
    return allPortfolios;
  } catch (err) {
    return err;
  }
};

const getPortfolio = async (id) => {
  try {
    // db one takes a string of SQL command;
    // id=$1 allows us to interpolate our second parameter safely
    // we CAN pass multiple values to one query in this manner
    const onePortfolio = await db.one("SELECT * FROM portfolios WHERE id=$1", id);
    return onePortfolio;
  } catch (error) {
    // with using db.one() we will not hit our catch block even if we have no
    // record with the corresponding ID - there are MANY ways to handle this
    // db.oneOrNone() is one way - there are also others.
    return error;
  }
};

const createPortfolio = async (portfolio) => {
  const { name, url,  image, category, is_favorite } = portfolio;
  try {
    const newPortfolio = await db.one(
      "INSERT INTO portfolios (name, url, image, category, is_favorite) VALUES ($1, $2, $3, $4 , $5) RETURNING *",
      [name, url , image, category, is_favorite]
    );
    return newPortfolio;
  } catch (error) {
    return error;
  }
};

const deletePortfolio = async (id) => {
  try {
    const deletedPortfolio = await db.one("DELETE FROM portfolios WHERE id = $1 RETURNING *", id);
    return deletedPortfolio;
  } catch (err) {
    return err;
  }
};
// We need to pass in the portfolio - the information to change
// && the ID of the portfolio to access it in the DB
const updatePortfolio = async (portfolio, id) => {
  const { name, url , image, category, is_favorite } = portfolio;
  try {
    // first argument is the QUERY string
    // second argument is the actual DATA 
    const updatedPortfolio = await db.one("UPDATE portfolios SET name = $1, url=$2 , image = $3, category = $4, is_favorite = $5 WHERE id = $6 RETURNING *",
    // remember the order MATTERS here 
    // $1  $2   $3        $4           $5
    [name, url , image, category, is_favorite, id]);
    return updatedPortfolio;
  } catch (err) {
    return err;
  }
}

// we will have a bunch of exports, hence the object;
module.exports = { 
  getAllPortfolios, 
  getPortfolio, 
  createPortfolio, 
  deletePortfolio,
  updatePortfolio
};
