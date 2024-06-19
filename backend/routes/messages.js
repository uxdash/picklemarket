const express = require('express');
const Message = require('../models/Message');

const router = express.Router();

router.get('/:conversationId', async (req, res) => {
  const messages = await Message.find({ conversationId: req.params.conversationId });
  res.send(messages);
});

router.post('/:conversationId', async (req, res) => {
  const { senderId, content } = req.body;
  const message = new Message({
    conversationId: req.params.conversationId,
    senderId,
    content,
  });
  await message.save();
  res.status(201).send(message);
});

module.exports = router;
