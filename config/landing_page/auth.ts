import { AccountTypes, formFields } from "@/typings/landingPage/auth";

export const accountType: AccountTypes = [
  {
    id: "individual",
    icon: "",
    name: "Individual Account",
    text: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: "joint",
    icon: "",
    name: "Joint Account",
    text: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: "corporate",
    icon: "",
    name: "Corporate Account",
    text: "Lorem ipsum dolor sit amet consectetur.",
  },
];

export const formFieldsArray: formFields[] = [
  {
    accountType: "individual",
    fields: [
      {
        label: "First Name",
        name: "first_name",
        type: "text",
        placeholder: "Tunde",
        required: true,
      },
      {
        label: "Middle Name",
        name: "middle_name",
        type: "text",
        placeholder: "Ayoola",
        required: false,
      },
      {
        label: "Last Name",
        name: "last_name",
        type: "text",
        placeholder: "Fagbemi",
        required: true,
      },
      {
        label: "Email Address",
        name: "email",
        type: "email",
        placeholder: "ta***@****.com",
        required: true,
      },
      {
        label: "Phone Number",
        name: "phone",
        type: "tel",
        placeholder: "+234**********",
        required: true,
      },
      {
        label: "Nationality",
        name: "nationality",
        type: "text",
        placeholder: "Nigerian",
        required: true,
      },
      {
        label: "Gender",
        name: "gender",
        type: "select",
        placeholder: "Male/Female",
        options: [
          {
            value: "male",
            label: "Male",
          },
          {
            value: "female",
            label: "Female",
          },
        ],
        required: true,
      },
      {
        label: "Date of Birth",
        name: "birthday",
        type: "date",
        valid: "2024-10-23",
        dateFormat: "YYYY-MM-DD",
        placeholder: "",
        required: true,
      },
      {
        label: "Password",
        name: "password",
        type: "password",
        placeholder: "***********",
        required: true,
      },
      {
        label: "Confirm Password",
        name: "password_confirmation",
        type: "password",
        placeholder: "**********",
        required: true,
      },
    ],
  },
  {
    accountType: "joint",
    fields: [
      //       {
      //         label: "First Name",
      //         name: "first_name",
      //         type: "text",
      //         placeholder: "Tunde",
      //       },
      //       {
      //         label: "Middle Name",
      //         name: "middleName",
      //         type: "text",
      //         placeholder: "Ayoola",
      //       },
      //       {
      //         label: "Last Name",
      //         name: "last_name",
      //         type: "text",
      //         placeholder: "Fagbemi",
      //       },
      //       {
      //         label: "Email Address",
      //         name: "email",
      //         type: "email",
      //         placeholder: "ta***@****.com",
      //       },
      //       {
      //         label: "Phone Number",
      //         name: "phone",
      //         type: "text",
      //         placeholder: "+234**********",
      //       },
      //       {
      //         label: "Nationality",
      //         name: "nationality",
      //         type: "text",
      //         placeholder: "Nigerian",
      //       },
      //       {
      //         label: "Gender",
      //         name: "gender",
      //         type: "select",
      //         placeholder: "Male/Female",
      //       },
      //       {
      //         label: "Date of Birth",
      //         name: "birthday",
      //         type: "select",
      //         placeholder: "",
      //       },
      //       {
      //         label: "Password",
      //         name: "password",
      //         type: "password",
      //         placeholder: "***********",
      //       },
      //       {
      //         label: "Confirm Password",
      //         name: "password_confirmation",
      //         type: "password",
      //         placeholder: "**********",
      //       },
    ],
  },
  {
    accountType: "corporate",
    fields: [
      {
        label: "Corporate Name",
        name: "company_name",
        type: "text",
        placeholder: "Dukia Precious Metals",
        required: true,
      },
      {
        label: "Company Type",
        name: "company_type",
        type: "select",
        placeholder: "Partnership",
        options: [
          {
            value: "public-listed-company",
            label: "Public Listed Company",
          },
          {
            value: "private-company",
            label: "Private Company",
          },
          {
            value: "partnership",
            label: "Partnership",
          },
          {
            value: "individual",
            label: "Individual/Sole Proprietor",
          },
          {
            value: "cooperative",
            label: "Cooperative",
          },
          {
            value: "trust",
            label: "Trust",
          },
        ],
        required: true,
      },
      {
        label: "Company TIN",
        name: "company_tax_identification_number",
        type: "text",
        placeholder: "**********-****",
        required: true,
      },
      {
        label: "Date of Incorporation",
        name: "company_date_of_incorporation",
        type: "date",
        placeholder: "2022-10-23",
        required: true,
      },
      //       {
      //         label: "Email Address",
      //         name: "email",
      //         type: "email",
      //         placeholder: "ta***@****.com",
      //       },
      //       {
      //         label: "Phone Number",
      //         name: "phone",
      //         type: "text",
      //         placeholder: "+234**********",
      //       },
      //       {
      //         label: "Nationality",
      //         name: "nationality",
      //         type: "text",
      //         placeholder: "Nigerian",
      //       },
      //       {
      //         label: "Gender",
      //         name: "gender",
      //         type: "select",
      //         placeholder: "Male/Female",
      //       },
      //       {
      //         label: "Date of Birth",
      //         name: "birthday",
      //         type: "select",
      //         placeholder: "",
      //       },
      //       {
      //         label: "Password",
      //         name: "password",
      //         type: "password",
      //         placeholder: "***********",
      //       },
      //       {
      //         label: "Confirm Password",
      //         name: "password_confirmation",
      //         type: "password",
      //         placeholder: "**********",
      //       },
    ],
  },
];
