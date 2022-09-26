import React from "react";

import { Clock, MenuVertical } from "neetoicons";
import { Avatar, Dropdown, Tag, Tooltip, Typography } from "neetoui";

import { formatWithShortDate, formatWithDayAndDate } from "./utils";

const { Menu, MenuItem } = Dropdown;

const Note = ({ note, setShowDeleteAlert, setSelectedNoteId }) => (
  <div className="mb-3 w-full  border border-gray-300 bg-white p-4 shadow-md  dark:border-gray-700 dark:bg-gray-800 ">
    <div className="flex justify-between">
      <Typography style="h4" weight="bold">
        {note.title}
      </Typography>
      <Dropdown buttonStyle="text" icon={MenuVertical}>
        <Menu>
          <MenuItem.Button> Edit </MenuItem.Button>
          <MenuItem.Button
            style="danger"
            onClick={() => {
              setShowDeleteAlert(true);
              setSelectedNoteId(note.id);
            }}
          >
            Delete
          </MenuItem.Button>
        </Menu>
      </Dropdown>
    </div>
    <Typography className="mb-2">{note.description}</Typography>
    <hr />
    <div className="flex justify-between">
      <div className="mt-3">
        <Tag label="Getting Started" size="small" />
      </div>
      <div className="mt-3 flex items-center space-x-1">
        <Clock size={15} />
        <Tooltip
          content={formatWithDayAndDate(note.createdAt)}
          position="bottom"
        >
          <Typography style="body3">
            Created {formatWithShortDate(note.createdAt)}
          </Typography>
        </Tooltip>
        <Avatar
          size="small"
          user={{
            imageUrl: "https://i.pravatar.cc/300",
          }}
        />
      </div>
    </div>
  </div>
);

export default Note;
