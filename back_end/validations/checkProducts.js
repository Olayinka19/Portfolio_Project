
const checkName = (req, res, next) => {
    if (req.body.name) {
      next();
    } else {
      res.status(400).json({ error: 'We need a name...' });
    }
  };
  const checkPrice = (req, res, next) => {
    console.log('price is being checked');
    if (req.body.price) {
      console.log("we've got a name here!");
      next();
    } else {
      res.status(400).json({ error: 'We need a name...' });
    }
  };
  const checkImage = (req, res, next) => {
    console.log('protein is being checked');
    if (req.body.image) {
      console.log("we've got an image here!");
      next();
    } else {
      res.status(400).json({ error: 'We need a name...' });
    }
  };

  const checkCategory = (req, res, next) => {
    console.log('category is being checked');
    if (req.body.category) {
      console.log("we've got a name here!");
      next();
    } else {
      res.status(400).json({ error: 'We need a name...' });
    }
  };
  const checkBlockChain_id = (req, res, next) => {
    console.log('blockchain_id is being checked');
    if (req.body.blockchain_id) {
      console.log("we've got a block here!");
      next();
    } else {
      res.status(400).json({ error: 'We need a blockchain_id...' });
    }
  };

  const checkIs_favorite = (req, res, next) => {
    console.log('is_favorite is being checked');
    if (req.body.is_favorite) {
      console.log("we've got a name here!");
      next();
    } else {
      res.status(400).json({ error: 'We need a name...' });
    }
  };
  module.exports = {checkName, checkPrice,  checkImage , checkCategory , checkBlockChain_id , checkIs_favorite}