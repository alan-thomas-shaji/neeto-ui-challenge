import React, { useState } from "react";

import { Button, Pagination, Table } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { TABLE_ROW_DATA } from "./constants";
import Menu from "./Menu";
import { tableColumnData } from "./utils";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openMenuBar, setOpenMenuBar] = useState(false);

  return (
    <>
      <Menu showMenu={openMenuBar} />
      <Container>
        <Header
          menuBarToggle={() => setOpenMenuBar(open => !open)}
          title="All Contacts"
          actionBlock={
            <Button icon="ri-add-line" label="Add Contact" onClick={() => {}} />
          }
          searchProps={{
            value: searchTerm,
            placeholder: "Search Name, Email, Phone Number, Etc.",
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <Table
          allowRowClick
          columnData={tableColumnData}
          rowData={TABLE_ROW_DATA}
          onRowClick={() => {}}
        />
        <div className="mt-8 mb-8 flex w-full flex-row justify-end">
          <Pagination count={10} navigate={() => {}} pageNo={1} pageSize={9} />
        </div>
      </Container>
    </>
  );
};

export default Contacts;
