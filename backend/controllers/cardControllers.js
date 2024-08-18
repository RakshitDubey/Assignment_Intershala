// controllers/cardController.js
const Card = require('../model/carModel');
// POST: Create a new card
const createCard = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Create a new card instance
    const newCard = new Card({
      title,
      description,
    });

    // Save the card to the database
    await newCard.save();

    // Respond with the created card
    res.status(201).json({ message: 'Card created successfully', card: newCard });
  } catch (error) {
    res.status(500).json({ message: 'Error creating card', error: error.message });
  }
};

const getAllCards = async (req, res) => {
  try {
    // Fetch all cards from the database
    const cards = await Card.find();

    // Respond with the list of cards
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cards', error: error.message });
  }
};
const getCardByTitle = async (req, res) => {
  try {
    const { title } = req.params;

    // Find a card with the specified title
    const card = await Card.findOne({ title: title.trim() });

    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    // Respond with the card details
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching card', error: error.message });
  }
};


module.exports = {
  createCard,getAllCards,getCardByTitle
};
