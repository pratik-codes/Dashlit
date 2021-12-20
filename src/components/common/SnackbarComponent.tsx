import React from "react";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";
import PropTypes from "prop-types";

interface Props {
  setOpen: boolean;
  setSnackbarOpen: any;
  color: string | undefined;
  message: string;
}

const SnackbarComponent: React.FC<Props> = ({
  setOpen,
  setSnackbarOpen,
  color,
  message
}) => {
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={setOpen}
        autoHideDuration={5000}
        onClose={() => setSnackbarOpen(false)}
        message={<span id="message-id">Sign Up Successful</span>}>
        <SnackbarContent
          style={{
            backgroundColor: `${color}`
          }}
          message={
            <span className="font-bold" id="client-snackbar">
              {message}
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={() => setSnackbarOpen(false)}
              className="focus:outline-none h-4 w-4 font-bold">
              x
            </IconButton>
          ]}
        />
      </Snackbar>
    </div>
  );
};

export default SnackbarComponent;
SnackbarComponent.propTypes = {
  setOpen: PropTypes.bool.isRequired,
  setSnackbarOpen: PropTypes.any,
  message: PropTypes.string.isRequired,
  color: PropTypes.string
};
