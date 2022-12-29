type SelectedOptional<Base, T extends (string | number | symbol) & keyof Base> = {
  [Key in keyof Base]: Base[Key];
} & {
  [Key in T]: Base[Key];
};

type SelectedNever<Base, T extends string | number | symbol> = {
  [Key in keyof Base]: Base[Key];
} & {
  [Key in T]?: never;
};

export type Dependant<BaseAttributes, DependantAttributes extends keyof BaseAttributes> =
  | SelectedOptional<BaseAttributes, DependantAttributes>
  | SelectedNever<BaseAttributes, DependantAttributes>;
