import { Dialog } from '@headlessui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ProductType } from '@type/Product';
import { useForm } from 'react-hook-form';
import { addProductFields } from 'src/constants/fieldNames';

import { IconTextButton } from '@components/Buttons/IconButton';
import { FormColumn, FormRow } from '@components/Form';
import { FormTextArea, HorizontalInput, VerticalInput } from '@components/Input';

import { AddSymbol } from '@assets/icons';
import { addProductSchema } from '@lib/validations/addProduct';

import { DialogTopBar } from '..';

const AddProductModalDefaults: Partial<ProductType> = {
  name: '',
  brand: '',
  description: '',
  energy: 0,
  carbohydrates: 0,
  fats: 0,
  fiber: 0,
  monoUnsaturatedFats: 0,
  polyUnsaturatedFats: 0,
  proteins: 0,
  salt: 0,
  saturatedFats: 0,
  sugar: 0,
};

export const AddProductModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductType>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: AddProductModalDefaults,
    shouldFocusError: true,
    resolver: zodResolver(addProductSchema),
    shouldUnregister: true,
    shouldUseNativeValidation: true,
  });

  const buttonClickHandler = () => {
    handleSubmit(
      (data) => {
        console.log('Data: ', data);
      },
      (errors) => {
        console.log('Errors: ', errors);
      },
    )();
  };

  return (
    <Dialog.Panel className={'w-full max-w-2xl rounded-md bg-white p-6'}>
      <DialogTopBar>Add Product</DialogTopBar>
      <Dialog.Description className="mt-4 flex" as="div">
        {
          // TODO poriadne sprav submitovanie
        }
        <form className="flex w-full flex-col flex-wrap gap-y-4" noValidate>
          <FormRow>
            <FormColumn width="w-1/2">
              <VerticalInput
                id={addProductFields.name.fieldName}
                label={`${addProductFields.name.labelName}:`}
                type="text"
                autoComplete="false"
                errors={errors[addProductFields.name.fieldName]?.message}
                {...register(addProductFields.name.fieldName)}
              />
            </FormColumn>
            <FormColumn width="w-1/2">
              <VerticalInput
                id={addProductFields.brand.fieldName}
                errors={errors[addProductFields.brand.fieldName]?.message}
                label={`${addProductFields.brand.labelName}:`}
                type="text"
                {...register(addProductFields.brand.fieldName)}
              />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <FormTextArea
                id={addProductFields.description.fieldName}
                errors={errors[addProductFields.description.fieldName]?.message}
                label={`${addProductFields.description.labelName}:`}
                {...register(addProductFields.description.fieldName)}
              />
            </FormColumn>
          </FormRow>
          <FormColumn alignItems="items-center">
            <FormColumn alignItems="items-center" width="w-4/6">
              <FormRow>
                <HorizontalInput
                  id={addProductFields.energy.fieldName}
                  errors={errors[addProductFields.energy.fieldName]?.message}
                  label={`${addProductFields.energy.labelName}:`}
                  type="numeric"
                  {...register(addProductFields.energy.fieldName)}
                />
              </FormRow>
              {/* Fats - Proteins */}
              <FormRow>
                <FormColumn width="w-1/2">
                  <FormRow justifyContent="justify-between">
                    <HorizontalInput
                      width="w-1/2"
                      id={addProductFields.fats.fieldName}
                      errors={errors[addProductFields.fats.fieldName]?.message}
                      label={`${addProductFields.fats.labelName}:`}
                      type="numeric"
                      {...register(addProductFields.fats.fieldName)}
                    />
                  </FormRow>
                </FormColumn>
                <FormColumn width="w-1/2">
                  <FormRow justifyContent="justify-between">
                    <HorizontalInput
                      width="w-1/2"
                      id={addProductFields.proteins.fieldName}
                      errors={errors[addProductFields.proteins.fieldName]?.message}
                      label={`${addProductFields.proteins.labelName}:`}
                      type="numeric"
                      {...register(addProductFields.proteins.fieldName)}
                    />
                  </FormRow>
                </FormColumn>
              </FormRow>
              {/* SFA - Carbs */}
              <FormRow>
                <FormColumn width="w-1/2">
                  <FormRow justifyContent="justify-between">
                    <HorizontalInput
                      width="w-1/2"
                      id={addProductFields.saturatedFats.fieldName}
                      errors={errors[addProductFields.saturatedFats.fieldName]?.message}
                      label={<abbr title="Saturated Fatty Acids">{addProductFields.saturatedFats.labelName}:</abbr>}
                      type="numeric"
                      {...register(addProductFields.saturatedFats.fieldName)}
                    />
                  </FormRow>
                </FormColumn>
                <FormColumn width="w-1/2">
                  <FormRow justifyContent="justify-between">
                    <HorizontalInput
                      width="w-1/2"
                      id={addProductFields.carbohydrates.fieldName}
                      errors={errors[addProductFields.carbohydrates.fieldName]?.message}
                      label={`${addProductFields.carbohydrates.labelName}:`}
                      type="numeric"
                      {...register(addProductFields.carbohydrates.fieldName)}
                    />
                  </FormRow>
                </FormColumn>
              </FormRow>
              {/* MUFA - Sugar */}
              <FormRow>
                <FormColumn width="w-1/2">
                  <FormRow justifyContent="justify-between">
                    <HorizontalInput
                      width="w-1/2"
                      id={addProductFields.monoUnsaturatedFats.fieldName}
                      errors={errors[addProductFields.monoUnsaturatedFats.fieldName]?.message}
                      label={
                        <abbr title="Mono Unsaturated Fatty Acids">
                          {addProductFields.monoUnsaturatedFats.labelName}:
                        </abbr>
                      }
                      type="numeric"
                      {...register(addProductFields.monoUnsaturatedFats.fieldName)}
                    />
                  </FormRow>
                </FormColumn>
                <FormColumn width="w-1/2">
                  <FormRow justifyContent="justify-between">
                    <HorizontalInput
                      width="w-1/2"
                      id={addProductFields.sugar.fieldName}
                      errors={errors[addProductFields.sugar.fieldName]?.message}
                      label={`${addProductFields.sugar.labelName}:`}
                      type="numeric"
                      {...register(addProductFields.sugar.fieldName)}
                    />
                  </FormRow>
                </FormColumn>
              </FormRow>
              {/* PUFA - Fiber */}
              <FormRow>
                <FormColumn width="w-1/2">
                  <FormRow justifyContent="justify-between">
                    <HorizontalInput
                      width="w-1/2"
                      id={addProductFields.polyUnsaturatedFats.fieldName}
                      errors={errors[addProductFields.polyUnsaturatedFats.fieldName]?.message}
                      label={`${addProductFields.polyUnsaturatedFats.labelName}:`}
                      type="numeric"
                      {...register(addProductFields.polyUnsaturatedFats.fieldName)}
                    />
                  </FormRow>
                </FormColumn>
                <FormColumn width="w-1/2">
                  <FormRow justifyContent="justify-between">
                    <HorizontalInput
                      width="w-1/2"
                      id={addProductFields.fiber.fieldName}
                      errors={errors[addProductFields.fiber.fieldName]?.message}
                      label={`${addProductFields.fiber.labelName}:`}
                      type="numeric"
                      {...register(addProductFields.fiber.fieldName)}
                    />
                  </FormRow>
                </FormColumn>
              </FormRow>
              {/* Salt */}
              <FormRow justifyContent="justify-center">
                <FormColumn alignItems="items-center">
                  <FormRow width="w-1/2">
                    <HorizontalInput
                      width="w-1/2"
                      id={addProductFields.salt.fieldName}
                      errors={errors[addProductFields.salt.fieldName]?.message}
                      label={`${addProductFields.salt.labelName}:`}
                      type="numeric"
                      {...register(addProductFields.salt.fieldName)}
                    />
                  </FormRow>
                </FormColumn>
              </FormRow>
            </FormColumn>
          </FormColumn>
        </form>
      </Dialog.Description>
      <div className="mt-4 flex w-full justify-end">
        <IconTextButton onClick={buttonClickHandler} icon={AddSymbol}>
          Add Food
        </IconTextButton>
      </div>
    </Dialog.Panel>
  );
};
