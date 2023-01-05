import type { ProductTypeKeys } from '@type/Product';
import type { FieldData } from '@type/utlityTypes';

export const addProductFields: FieldData<ProductTypeKeys> = {
  name: {
    labelName: 'Product Name',
    fieldName: 'name',
  },
  brand: {
    labelName: 'Brand Name',
    fieldName: 'brand',
  },
  energy: {
    labelName: 'Energy',
    fieldName: 'energy',
  },
  description: {
    labelName: 'Description',
    fieldName: 'description',
  },
  fats: {
    labelName: 'Fats',
    fieldName: 'fats',
  },
  saturatedFats: {
    labelName: 'SFA',
    fieldName: 'saturatedFats',
  },
  monoUnsaturatedFats: {
    labelName: 'MUFA',
    fieldName: 'monoUnsaturatedFats',
  },
  polyUnsaturatedFats: {
    labelName: 'PUFA',
    fieldName: 'polyUnsaturatedFats',
  },
  salt: {
    labelName: 'Salt',
    fieldName: 'salt',
  },
  proteins: {
    labelName: 'Proteins',
    fieldName: 'proteins',
  },
  carbohydrates: {
    labelName: 'Carbs',
    fieldName: 'carbohydrates',
  },
  sugar: {
    labelName: 'Sugar',
    fieldName: 'sugar',
  },
  fiber: {
    labelName: 'Fiber',
    fieldName: 'fiber',
  },
};
