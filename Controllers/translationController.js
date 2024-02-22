import expressAsyncErrors from 'express-async-errors';
import { translate } from '@vitalets/google-translate-api';

export const translateLang = async (req, res) => {
  const inputText = req.body.text;

  const translated = await translate(inputText , { to: 'fr' });
  const translatedString = translated.text
  res.status(200).json({
    translation: translatedString
  })
};
