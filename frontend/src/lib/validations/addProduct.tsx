import { z } from 'zod';

const name = z.string().min(1).max(48);
const brand = z.string().min(1).max(48);
const description = z.string().min(1).max(1500);
const energy = z.coerce.number().min(0).max(10000);
const nutrient = z.coerce.number().min(0).max(100);

export const addProductSchema = z.object({
  name,
  brand,
  description,
  energy,
  fats: nutrient,
  saturatedFats: nutrient,
  monoUnsaturatedFats: nutrient,
  polyUnsaturatedFats: nutrient,
  salt: nutrient,
  carbohydrates: nutrient,
  sugar: nutrient,
  fiber: nutrient,
  proteins: nutrient,
});
