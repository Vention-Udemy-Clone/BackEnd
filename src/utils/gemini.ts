import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: 'gemini-pro',
});

const modelPro = genAI.getGenerativeModel({
  model: 'gemini-1.5-pro',
});

export const geminiAI = async (prompt: string) => {
  return await model.generateContent(prompt);
};

export const geminiAIPro = async (prompt: string) => {
  return await modelPro.generateContent(prompt);
};

export const startChat = () => {
  return model.startChat({
    history: [],
    generationConfig: { maxOutputTokens: 300 },
  });
};
