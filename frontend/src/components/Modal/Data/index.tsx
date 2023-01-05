import { useContext } from 'react';
import { Dialog } from '@headlessui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ChildrenProps } from '@type/index';
import type { ProductType } from '@type/Product';
import { useForm } from 'react-hook-form';
import { addProductFields } from 'src/constants/fieldNames';

import { AddInputButton } from '@components/Buttons';
import { IconButton, IconTextButton } from '@components/Buttons/IconButton';
import { FormColumn, FormRow } from '@components/Form';
import { FormInput, FormTextArea } from '@components/Input';
import { NutritionTable } from '@components/NutritionalTable';

import { ModalContext } from '@context/ModalContext';

import { AddSymbol, CloseSymbol } from '@assets/icons';
import { addProductSchema } from '@lib/validations/addProduct';

export const DefaultModal = () => {
  const { setModalState } = useContext(ModalContext);
  return (
    <Dialog.Panel className={'w-full max-w-sm rounded bg-white'}>
      <DialogTopBar>Unknown</DialogTopBar>
      <Dialog.Description>This modal is default for unhandled modal content.</Dialog.Description>
      <p>Please provide proper modal content data.</p>
      <button onClick={() => setModalState && setModalState(false)}>Cancel</button>
    </Dialog.Panel>
  );
};
interface DialogTitleProps {
  onClose?: () => void;
}

const DialogTopBar = ({ children, onClose }: DialogTitleProps & ChildrenProps) => {
  const { setModalState } = useContext(ModalContext);

  const handleClose = () => {
    onClose && onClose();
    setModalState(false);
  };
  return (
    <Dialog.Title className={'flex justify-between text-2xl font-medium'}>
      {children}
      <IconButton onClick={handleClose} icon={CloseSymbol} colorType="close"></IconButton>
    </Dialog.Title>
  );
};

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
  const { register, handleSubmit } = useForm<ProductType>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: AddProductModalDefaults,
    shouldFocusError: true,
    resolver: zodResolver(addProductSchema),
  });

  const clickHandler = () => {
    handleSubmit(
      (data) => console.log('Data: ', data),
      (errors) => console.log('Errors: ', errors),
    )();
  };

  return (
    <Dialog.Panel className={'w-full max-w-2xl rounded-md bg-white p-6'}>
      <DialogTopBar>Add Product</DialogTopBar>
      <Dialog.Description className="mt-4 flex" as="div">
        {
          // TODO poriadne sprav submitovanie
        }
        <form className="flex w-full flex-col flex-wrap gap-y-4">
          <FormRow>
            <FormColumn width="w-1/2">
              <FormInput
                id={addProductFields.name.fieldName}
                label={`${addProductFields.name.labelName}:`}
                placeholder=""
                type="text"
                autoComplete="false"
                {...register(addProductFields.name.fieldName)}
              />
            </FormColumn>
            <FormColumn width="w-1/2">
              <FormInput
                id={addProductFields.brand.fieldName}
                label={`${addProductFields.name.labelName}:`}
                placeholder=""
                type="text"
                {...register(addProductFields.brand.fieldName)}
              />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <FormTextArea
                id={`${'description'}`}
                label={`${addProductFields.name.labelName}:`}
                placeholder=""
                type="text"
                {...register(addProductFields.description.fieldName)}
              />
            </FormColumn>
          </FormRow>
          <FormColumn alignItems="items-center">
            <FormColumn alignItems="items-center" width="w-4/6">
              <FormRow>
                <FormInput
                  classLabel="flex items-center"
                  id={addProductFields.energy.fieldName}
                  label={`${addProductFields.energy.labelName}:`}
                  type="numeric"
                  {...register(addProductFields.energy.fieldName)}
                />
              </FormRow>
              {/* Fats - Proteins */}
              <FormRow>
                <FormColumn width="w-1/2">
                  <FormRow justifyContent="justify-between">
                    <FormInput
                      width="w-1/2"
                      classLabel="flex items-center"
                      id={addProductFields.fats.fieldName}
                      label={`${addProductFields.fats.labelName}:`}
                      type="numeric"
                      {...register(addProductFields.fats.fieldName)}
                    />
                  </FormRow>
                </FormColumn>
                <FormColumn width="w-1/2">
                  <FormRow justifyContent="justify-between">
                    <FormInput
                      width="w-1/2"
                      classLabel="flex items-center"
                      id={addProductFields.proteins.fieldName}
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
                    <FormInput
                      width="w-1/2"
                      classLabel="pl-4 flex items-center"
                      id={addProductFields.saturatedFats.fieldName}
                      label={`${addProductFields.saturatedFats.labelName}:`}
                      type="numeric"
                      {...register(addProductFields.saturatedFats.fieldName)}
                    ></FormInput>
                  </FormRow>
                </FormColumn>
                <FormColumn width="w-1/2">
                  <FormRow justifyContent="justify-between">
                    <FormInput
                      width="w-1/2"
                      classLabel="flex items-center"
                      id={addProductFields.carbohydrates.fieldName}
                      label={`${addProductFields.carbohydrates.labelName}:`}
                      type="numeric"
                      {...register(addProductFields.carbohydrates.fieldName)}
                    ></FormInput>
                  </FormRow>
                </FormColumn>
              </FormRow>
              {/* MUFA - Sugar */}
              <FormRow>
                <FormColumn width="w-1/2">
                  <FormRow justifyContent="justify-between">
                    <FormInput
                      width="w-1/2"
                      classLabel="pl-4 flex items-center"
                      id={addProductFields.monoUnsaturatedFats.fieldName}
                      label={`${addProductFields.monoUnsaturatedFats.labelName}:`}
                      type="numeric"
                      {...register(addProductFields.monoUnsaturatedFats.fieldName)}
                    ></FormInput>
                  </FormRow>
                </FormColumn>
                <FormColumn width="w-1/2">
                  <FormRow justifyContent="justify-between">
                    <FormInput
                      width="w-1/2"
                      classLabel="pl-4 flex items-center"
                      id={addProductFields.sugar.fieldName}
                      label={`${addProductFields.sugar.labelName}:`}
                      type="numeric"
                      {...register(addProductFields.sugar.fieldName)}
                    ></FormInput>
                  </FormRow>
                </FormColumn>
              </FormRow>
              {/* PUFA - Fiber */}
              <FormRow>
                <FormColumn width="w-1/2">
                  <FormRow justifyContent="justify-between">
                    <FormInput
                      width="w-1/2"
                      classLabel="pl-4 flex items-center"
                      id={addProductFields.polyUnsaturatedFats.fieldName}
                      label={`${addProductFields.polyUnsaturatedFats.labelName}:`}
                      type="numeric"
                      {...register(addProductFields.polyUnsaturatedFats.fieldName)}
                    ></FormInput>
                  </FormRow>
                </FormColumn>
                <FormColumn width="w-1/2">
                  <FormRow justifyContent="justify-between">
                    <FormInput
                      width="w-1/2"
                      classLabel="pl-4 flex items-center"
                      id={addProductFields.fiber.fieldName}
                      label={`${addProductFields.fiber.labelName}:`}
                      type="numeric"
                      {...register(addProductFields.fiber.fieldName)}
                    ></FormInput>
                  </FormRow>
                </FormColumn>
              </FormRow>
              {/* Salt */}
              <FormRow justifyContent="justify-center">
                <FormColumn width="w-1/3">
                  <FormRow justifyContent="justify-between">
                    <FormInput
                      width="w-full"
                      classLabel="flex items-center"
                      id={addProductFields.salt.fieldName}
                      label={`${addProductFields.salt.labelName}:`}
                      type="numeric"
                      {...register(addProductFields.salt.fieldName)}
                    ></FormInput>
                  </FormRow>
                </FormColumn>
              </FormRow>
            </FormColumn>
          </FormColumn>
        </form>
      </Dialog.Description>
      <div className="mt-4 flex w-full justify-end">
        <IconTextButton onClick={clickHandler} icon={AddSymbol}>
          Add Food
        </IconTextButton>
      </div>
    </Dialog.Panel>
  );
};

interface FoodDetailProps {
  product: ProductType;
}
export const FoodDetailModal = ({ product }: FoodDetailProps) => {
  return (
    <Dialog.Panel className={'w-full max-w-2xl rounded-md bg-white p-6'}>
      <DialogTopBar>
        <span>
          {product.name}
          <span className="ml-1 text-base font-normal">{product.brand}</span>
        </span>
      </DialogTopBar>
      <Dialog.Description className="mt-4 flex" as="div">
        <div className="flex w-full justify-between">
          <div className="tooltip-top flex w-full flex-col bg-slate-500" data-tooltip="This feature is in development">
            <h3 className="text-xl font-normal">Prices</h3>
            <div className="flex"></div>
          </div>
          <div className="flex w-full max-w-[16rem] flex-col px-4">
            <h3 className="mb-2 text-xl font-normal">Nutrition Values</h3>
            <div className="flex w-full max-w-screen-xs">
              <NutritionTable data={product}></NutritionTable>
            </div>
          </div>
        </div>
      </Dialog.Description>
      <div className="mt-4 flex w-full justify-end">
        <AddInputButton>Add Food</AddInputButton>
      </div>
    </Dialog.Panel>
  );
};
