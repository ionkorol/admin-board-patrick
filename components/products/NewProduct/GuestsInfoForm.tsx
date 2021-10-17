import {
  Alert,
  Box,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { FieldArray, FormikProps, useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import { GuestProp, ProductProp } from "utils/interfaces";
import AddGuestModal from "./AddGuestModal";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {}

const GuestsInfoForm: React.FC<Props> = (props) => {
  const {} = props;
  const [showAdd, setShowAdd] = useState(false);

  const formik = useFormikContext<ProductProp>();

  useEffect(() => {
    console.log(formik.values.guestList);
  }, [formik.values.guestList]);

  return (
    <Box>
      <Stack spacing={3}>
        <Typography>Guest List</Typography>
        <List>
          {formik.values.guestList.map((guest, index) => (
            <ListItem
              secondaryAction={
                <IconButton
                  onClick={() => {
                    formik.setFieldValue(
                      "guestList",
                      formik.values.guestList.filter(
                        (guest, currentIndex) => index !== currentIndex
                      )
                    );
                  }}
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              }
              key={index}
            >
              <ListItemText primary={`${guest.firstName} ${guest.lastName}`} />
            </ListItem>
          ))}
          {!formik.values.guestList.length && (
            <Alert severity="error">{formik.errors.guestList}</Alert>
          )}
        </List>
        <Button disabled={formik.values.guestList.length === formik.values.numberOfGuests} variant="outlined" onClick={() => setShowAdd(true)}>
          Add Guest
        </Button>
      </Stack>
      <AddGuestModal
        open={showAdd}
        onClose={() => setShowAdd(false)}
        addGuest={(obj: GuestProp) =>
          formik.setFieldValue("guestList", [...formik.values.guestList, obj])
        }
      />
    </Box>
  );
};

export default GuestsInfoForm;
