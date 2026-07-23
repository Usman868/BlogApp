import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const main = async (prompt) => {
  const interaction = await ai.interactions.create({
    model: "gemini-3.6-flash",
    input: prompt,
  });
  return interaction.output_text;
};

export default main;
