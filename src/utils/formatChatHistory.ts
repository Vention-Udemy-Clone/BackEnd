import { Content } from '@google/generative-ai';

export const formatChatHistory = (history: Content[]) => {
  return history.map((item, index) => {
    return {
      role: item.role,
      text: index === 0 ? item.parts[1].text : item.parts[0].text,
    };
  });
};
