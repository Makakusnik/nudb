export interface Product {
  id: string;
  name: string;
  description?: string;
  brand?: string;
  energy: number;
  fats: number;
  saturatedFats: number;
  unsaturatedMonoFats: number;
  unsaturatedPolyFats: number;
  proteins: number;
  carbohydrates: number;
  sugar: number;
  fiber: number;
  salt: number;
}
