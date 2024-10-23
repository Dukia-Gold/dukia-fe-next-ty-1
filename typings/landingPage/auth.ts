type AccountType = {
  id: string;
  icon: string;
  name: string;
  text: string;
};

export type AccountTypes = AccountType[];

type FieldOptions = {
  value: string;
  label: string;
};

type FormField = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
  valid?: string;
  dateFormat?: string;
  options?: FieldOptions[];
};

export type formFields = {
  accountType: string;
  fields: FormField[];
};
