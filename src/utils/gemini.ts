import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: 'gemini-pro',
});

export const geminiAI = async (prompt: string) => {
  return await model.generateContent(prompt);
};

export const startChat = () => {
  return model.startChat({
    history: [],
    generationConfig: { maxOutputTokens: 300 },
  });
};
