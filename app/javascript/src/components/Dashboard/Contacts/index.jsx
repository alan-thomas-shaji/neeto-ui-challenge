import React, { useState } from "react";

import { Button, Pagination, Table } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { TABLE_ROW_DATA } from "./constants";
import DeleteAlert from "./DeleteAlert";
import Menu from "./Menu";
import NewContactPane from "./Pane/Create";
import { tableColumnData } from "./utils";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);
  const [showContactPane, setShowContactPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  return (
    <>
      <Menu showMenu={isMenuBarOpen} />
      <Container>
        <Header
          menuBarToggle={() => setIsMenuBarOpen(open => !open)}
          title="All Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add Contact"
              onClick={() => setShowContactPane(true)}
            />
          }
          searchProps={{
            value: searchTerm,
            placeholder: "Search Name, Email, Phone Number, Etc.",
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <Table
          allowRowClick
          columnData={tableColumnData(setShowDeleteAlert)}
          rowData={TABLE_ROW_DATA}
          onRowClick={() => {}}
        />
        <div className="mt-8 mb-8 flex w-full flex-row justify-end">
          <Pagination count={10} navigate={() => {}} pageNo={1} pageSize={9} />
        </div>
        <NewContactPane
          setShowPane={setShowContactPane}
          showPane={showContactPane}
        />
        {showDeleteAlert && (
          <DeleteAlert
            setShowDeleteAlert={setShowDeleteAlert}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
      </Container>
    </>
  );
};

export default Contacts;
