import * as yup from "yup";

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  role: null,
  email: "",
};

export const TABLE_ROW_DATA = [
  {
    name: "Ronald Richards",
    role: "Owner",
    email: "alber@borer.com",
    createdAt: "Feb 8, 2021",
    profile: "",
  },
  {
    name: "Jacob Jones",
    role: "Owner",
    email: "alber@borer.com",
    createdAt: "Feb 9, 2021",
    profile: "https://i.pravatar.cc/300",
  },
  {
    name: "Ronald Richards",
    role: "Owner",
    email: "alber@borer.com",
    createdAt: "Feb 8, 2021",
    profile: "",
  },
  {
    name: "Jacob Jones",
    role: "Owner",
    email: "alber@borer.com",
    createdAt: "Feb 9, 2021",
    profile: "https://i.pravatar.cc/300",
  },
  {
    name: "Ronald Richards",
    role: "Owner",
    email: "alber@borer.com",
    createdAt: "Feb 8, 2021",
    profile: "",
  },
];

export const ROLES = [
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "Non-Admin",
    value: "non-admin",
  },
];

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("Enter First Name"),
  lastName: yup.string().required("Enter Last Name"),
  email: yup.string().email("Invalid e-mail format").required("Email required"),
  role: yup
    .object({
      label: yup.string().oneOf(ROLES.map(role => role.label)),
      value: yup.string().oneOf(ROLES.map(role => role.value)),
    })
    .nullable()
    .required("Select a role"),
});
