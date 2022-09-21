import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import { NOTES_CARD_DATA as notes_content } from "./constants";
import Menu from "./Menu";
import Note from "./Note";

const Notes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [openMenuBar, setOpenMenuBar] = useState(true);

  return (
    <>
      <Menu showMenu={openMenuBar} />
      <Container>
        <Header
          menuBarToggle={() => setOpenMenuBar(open => !open)}
          title=" All Notes"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add New Note"
              onClick={() => {}}
            />
          }
          searchProps={{
            value: searchTerm,
            placeholder: "Search Name, Email, Phone Number, Etc.",
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {notes_content.length ? (
          notes_content.map(note => <Note key={note.id} note={note} />)
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => {}}
            primaryActionLabel="Add New Note"
            subtitle="Add your notes to send customized emails to them."
            title="Looks like you don't have any notes!"
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
