import type { z } from 'zod';

import type { addProductSchema } from '@lib/validations/addProduct';

export type ProductType = z.infer<typeof addProductSchema>;

export type ProductTypeKeys = keyof ProductType;
