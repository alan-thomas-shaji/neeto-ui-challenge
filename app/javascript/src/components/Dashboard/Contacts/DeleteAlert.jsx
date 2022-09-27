import React from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ onClose, setShowDeleteAlert }) => (
  <Alert
    isOpen
    message="Are you sure you want to delete this contact? These changes cannot be undone."
    title="Delete Contact"
    onClose={onClose}
    onSubmit={() => {
      Toastr.success("Deleted Contact Successfully");
      setShowDeleteAlert(false);
    }}
  />
);

export default DeleteAlert;
