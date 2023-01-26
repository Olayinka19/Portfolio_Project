const express = require("express");
const portfolios = express.Router();
const {
    getAllPortfolios,
    getPortfolio,
    createPortfolio,
    deletePortfolio,
    updatePortfolio
  } = require("../queries/portfolios.js");
  const { checkName, checkBoolean, validateUrl } = require("../validations/checkPortfolios")
  // Extends our app so that we can create a new route for our portfolioS resource
  // we need to make this ASYNC as well
//   portfolios.use("/:portfolioId/reviews", reviewsController);
  
  portfolios.get("/", async (req, res) => {
    const allPortfolios = await getAllPortfolios();
    if (allPortfolios[0]) {
      // if there is one index that gets returned then the data exists - John P 8/2/2022
      // an empty array is TRUTHY - so we need to check for an element
      res.status(200).json(allPortfolios);
    } else {
      res.status(500).json({ error: "server error!" });
    }
  });
  
  portfolios.get("/:id", async (req, res) => {
    const { id } = req.params;
    const portfolio = await getPortfolio(id);
    if (portfolio) {
      res.json(portfolio);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });
  
  portfolios.post("/", checkName, validateUrl, checkBoolean, async (req, res) => {
    try {
      const portfolio = await createPortfolio(req.body);
      res.json(portfolio)
    } catch (error) {
      return error;
    }
  });
  
  portfolios.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedPortfolio = await deletePortfolio(id);
    // if our response has an ID we are good to go!
    // an error will NOT have an id
    if (deletedPortfolio.id) {
      res.status(200).json(deletedPortfolio)
    } else {
      res.status(404).json("portfolio not found!");
    }
  });
  
  portfolios.put("/:id", validateUrl, checkBoolean, checkName, async (req, res) => {
    const { id } = req.params;
    // updatedportfolio will either be a MASSIVE error object from SQL
    // OR it will be a portfolio with the keys and values we expected
    const updatedPortfolio = await updatePortfolio(req.body, id);
    if (updatedPortfolio.id) {
      res.status(200).json(updatedPortfolio);
    } else {
      res.status(404).json({error: "portfolio not updated for some reason...."});
    }
  })
  
  module.exports = portfolios;