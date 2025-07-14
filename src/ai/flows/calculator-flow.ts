'use server';
/**
 * @fileOverview A health coffee calculator AI flow.
 *
 * - coffeeCalculator - A function that calculates coffee recommendations.
 * - CoffeeCalculatorInput - The input type for the coffeeCalculator function.
 * - CoffeeCalculatorOutput - The return type for the coffeeCalculator function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

export const CoffeeCalculatorInputSchema = z.object({
  weight: z.number().describe('User weight in kilograms.'),
  age: z.number().describe('User age in years.'),
  coffeeHabit: z.string().describe('User daily coffee consumption habit (e.g., "1", "2", "3", "4+").'),
  goal: z.string().describe('User health goal (e.g., "Turun Berat Badan", "Antioksidan", "Jaga Imun").'),
});
export type CoffeeCalculatorInput = z.infer<typeof CoffeeCalculatorInputSchema>;

export const CoffeeCalculatorOutputSchema = z.object({
  recommendation: z.object({
    gramsPerDay: z.string().describe('Recommended daily grams of Green Bean Coffee. Example: "5-10"'),
  }),
  calories: z.object({
    burnedPerDay: z.string().describe('Estimated calories burned per day. Example: "50-100"'),
  }),
  timing: z.object({
    bestTime: z.string().describe('The best time to drink the coffee. Example: "Pagi hari"'),
    reason: z.string().describe('A short reason for the best time. Example: "untuk metabolisme"'),
  }),
});
export type CoffeeCalculatorOutput = z.infer<typeof CoffeeCalculatorOutputSchema>;


const prompt = ai.definePrompt({
  name: 'coffeeCalculatorPrompt',
  input: { schema: CoffeeCalculatorInputSchema },
  output: { schema: CoffeeCalculatorOutputSchema },
  prompt: `You are a health consultant for a Green Bean Coffee product. Based on the user's data, provide a personalized recommendation in Bahasa Indonesia.

The product is a mix of green coffee, cinnamon, and ginger. A standard serving is 5 grams.

User Data:
- Berat Badan: {{{weight}}} kg
- Umur: {{{age}}} tahun
- Kebiasaan Minum Kopi: {{{coffeeHabit}}} cangkir per hari
- Tujuan: {{{goal}}}

Your Task:
1.  **Rekomendasi Takaran (gramsPerDay):**
    - Base: 5g for everyone.
    - If goal is "Turun Berat Badan" and weight > 75kg, suggest "5-10".
    - If coffeeHabit is "3" or "4+", suggest "5".
    - Otherwise, suggest "5".
    - Present as a string, e.g., "5" or "5-10".

2.  **Estimasi Kalori Terbakar (burnedPerDay):**
    - Base: "30-50".
    - If goal is "Turun Berat Badan", make it "70-120".
    - If age < 30, add 20 to the range (e.g., "50-70").
    - If weight > 80, add 30 to the range.
    - If goal is "Turun Berat Badan" AND weight > 80, make it "100-150".
    - Present as a string range, e.g., "70-120".

3.  **Waktu Terbaik Minum Kopi (bestTime & reason):**
    - If goal is "Turun Berat Badan", suggest "Pagi sebelum aktivitas" with reason "untuk memulai metabolisme".
    - If goal is "Antioksidan", suggest "Siang hari" with reason "untuk melawan radikal bebas".
    - If goal is "Jaga Imun", suggest "Pagi atau siang" with reason "untuk menjaga daya tahan".
    - Default to "Pagi hari" with reason "untuk energi dan fokus".

Provide only the JSON output based on the output schema.`,
});


const coffeeCalculatorFlow = ai.defineFlow(
  {
    name: 'coffeeCalculatorFlow',
    inputSchema: CoffeeCalculatorInputSchema,
    outputSchema: CoffeeCalculatorOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('AI failed to generate a response.');
    }
    return output;
  }
);


export async function coffeeCalculator(input: CoffeeCalculatorInput): Promise<CoffeeCalculatorOutput> {
  return coffeeCalculatorFlow(input);
}
