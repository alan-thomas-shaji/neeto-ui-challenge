import * as yup from "yup";

import { buildSelectOptions } from "../utils";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignee: null,
  tags: [],
};

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const NOTES_CARD_DATA = [
  {
    id: 1,
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    tag: "Getting Started",
    status: "Created",
    createdAt: "Wednesday, September 21, 2022 4:00 PM",
    profilePicture: "https://i.pravatar.cc/300",
  },
  {
    id: 2,
    title: "What is a question?",
    description:
      "A question is a sentence that seeks an answer for information collection, tests, and research. Right questions produce accurate responses and aids in collecting actionable quantitative and qualitative data.",
    tag: "Getting Started",
    status: "Drafted",
    createdAt: "Wednesday, September 21, 2022 4:00 PM",
    profilePicture: "https://i.pravatar.cc/300",
  },
  {
    id: 3,
    title: "Do weekends really help you to chill after a hectic week?",
    description: "There is a reason why weekends exist.",
    tag: "Getting Started",
    status: "Drafted",
    createdAt: "Wednesday, September 21, 2022 4:00 PM",
    profilePicture: "https://i.pravatar.cc/300",
  },
];

export const ASSIGNEES = buildSelectOptions([
  "Oliver Smith",
  "Eve Smith",
  "Sam Smith",
]);

export const TAGS = buildSelectOptions([
  "Getting Started",
  "Onboarding",
  "User Flow",
  "UX",
  "Bugs",
  "V2",
]);

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignee: yup
    .object({
      label: yup.string().oneOf(ASSIGNEES.map(assignee => assignee.label)),
      value: yup.string().oneOf(ASSIGNEES.map(assignee => assignee.value)),
    })
    .nullable()
    .required("Assignee required"),
  tags: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().oneOf(TAGS.map(tag => tag.label)),
        value: yup.string().oneOf(TAGS.map(tag => tag.value)),
      })
    )
    .min(1, "Atleast one tag required")
    .required("Tags required"),
});
