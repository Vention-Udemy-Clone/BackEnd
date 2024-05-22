import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const geminiAI = async (prompt: string) => {
  const model = genAI.getGenerativeModel({
    model: 'gemini-pro',
  });

  return await model.generateContent(prompt);
};
