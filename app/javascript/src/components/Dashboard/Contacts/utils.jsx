import React from "react";

import { MenuVertical } from "neetoicons";
import { Avatar, Typography, Dropdown } from "neetoui";

const { Menu, MenuItem } = Dropdown;

export const tableColumnData = setShowDeleteAlert => [
  {
    title: "Name & Role",
    dataIndex: "name",
    key: "name",
    width: "40",
    render: (name, { role, profile }) => (
      <div className="flex flex-row items-center">
        <Avatar
          className="mr-2"
          user={{
            name,
            imageUrl: profile,
          }}
        />
        <div>
          <Typography style="h4">{name}</Typography>
          <Typography style="body2">{role}</Typography>
        </div>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "30",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    width: "20",
  },
  {
    title: "",
    dataIndex: "menu",
    key: "menu",
    width: "10",
    render: () => (
      <div>
        <Dropdown buttonStyle="text" icon={MenuVertical}>
          <Menu>
            <MenuItem.Button> Edit </MenuItem.Button>
            <MenuItem.Button
              style="danger"
              onClick={() => {
                setShowDeleteAlert(true);
              }}
            >
              Delete
            </MenuItem.Button>
          </Menu>
        </Dropdown>
      </div>
    ),
  },
];
