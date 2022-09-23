import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import { NOTES_CARD_DATA } from "./constants";
import DeleteAlert from "./DeleteAlert";
import Menu from "./Menu";
import Note from "./Note";
import NewNotePane from "./Pane/Create";

const Notes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [openMenuBar, setOpenMenuBar] = useState(true);
  const [notes, setNotes] = useState(NOTES_CARD_DATA);
  const [selectedNoteId, setSelectedNoteId] = useState([]);
  const [showNewNotePane, setShowNewNotePane] = useState(false);

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
              onClick={() => setShowNewNotePane(true)}
            />
          }
          searchProps={{
            value: searchTerm,
            placeholder: "Search Name, Email, Phone Number, Etc.",
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {notes.length ? (
          notes.map(note => (
            <Note
              key={note.id}
              note={note}
              setSelectedNoteId={setSelectedNoteId}
              setShowDeleteAlert={setShowDeleteAlert}
            />
          ))
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => {}}
            primaryActionLabel="Add New Note"
            subtitle="Add your notes to send customized emails to them."
            title="Looks like you don't have any notes!"
          />
        )}
        <NewNotePane
          setShowPane={setShowNewNotePane}
          showPane={showNewNotePane}
        />
        {showDeleteAlert && (
          <DeleteAlert
            selectedNoteId={selectedNoteId}
            setNotes={setNotes}
            setShowDeleteAlert={setShowDeleteAlert}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
