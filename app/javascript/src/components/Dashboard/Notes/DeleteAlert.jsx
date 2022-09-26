import React from "react";

import { Alert } from "neetoui";

const DeleteAlert = ({
  onClose,
  selectedNoteId,
  setNotes,
  setShowDeleteAlert,
}) => {
  const handleDelete = noteId => {
    setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId));
    setShowDeleteAlert(false);
  };

  return (
    <Alert
      isOpen
      message="Are you sure you want to delete this note? This action cannot be undone."
      title="Delete Note"
      onClose={onClose}
      onSubmit={() => {
        handleDelete(selectedNoteId);
      }}
    />
  );
};

export default DeleteAlert;
