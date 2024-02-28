// const botToken = '6879731950:AAHCLqq2BjUAKGMQ2BCXYEUo3b86SPLJ8Jo';
// const chatId = '@SablinSendMessageBot';


import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
const port = 3001; // Порт, на котором будет работать ваш сервер

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/sendMessage', (req, res) => {
  const { name, lastName, email, phoneNumber, message } = req.body;

  // Создание сообщения для отправки в Telegram
  const messageToTelegram = `
    Новая заявка!\n\n
    Имя: ${name}\n
    Фамилия: ${lastName}\n
    Email: ${email}\n
    Телефон: ${phoneNumber}\n
    Сообщение: ${message}
  `;

  // Отправка сообщения в Telegram
  const botToken = '6879731950:AAHCLqq2BjUAKGMQ2BCXYEUo3b86SPLJ8Jo';
  const chatId = '@SablinSendMessageBot';
  const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const telegramData = {
    chat_id: chatId,
    text: messageToTelegram,
  };

  axios.post(telegramUrl, telegramData)
    .then(response => {
      console.log('Сообщение успешно отправлено в Telegram');
      res.json({ success: true });
    })
    .catch(error => {
      console.error('Ошибка отправки сообщения в Telegram:', error);
      res.status(500).json({ success: false, error: 'Ошибка отправки сообщения в Telegram' });
    });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
