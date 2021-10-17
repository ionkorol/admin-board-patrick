import {
  Alert,
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { getIn, useFormikContext } from "formik";
import React from "react";
import { CustomFieldProp, ProductProp } from "utils/interfaces";
import DeleteIcon from "@mui/icons-material/Delete";

const CustomFieldsForm = () => {
  const formik = useFormikContext<ProductProp>();
  console.log(formik.values.customFields);
  return (
    <Box>
      <Stack spacing={3}>
        <Typography variant="h5" component="h2">
          Custom Fields
        </Typography>
        {!formik.values.customFields.length && (
          <Alert severity="info">There are no custom fields!</Alert>
        )}
        {formik.values.customFields.map((customField, index) => (
          <Grid container spacing={1} key={index}>
            <Grid item xs={4}>
              <TextField
                fullWidth
                name={`customFields.${index}.fieldName`}
                label="Name"
                value={formik.values.customFields[index].fieldName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name={`customFields.${index}.fieldValue`}
                label="Value"
                value={formik.values.customFields[index].fieldValue}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  getIn(formik.touched, `customFields.${index}.fieldValue`) &&
                  Boolean(
                    getIn(formik.errors, `customFields.${index}.fieldValue`)
                  )
                }
                helperText={
                  getIn(formik.touched, `customFields.${index}.fieldValue`) &&
                  getIn(formik.errors, `customFields.${index}.fieldValue`)
                }
              />
            </Grid>
            <Grid
              sx={{ display: "flex", justifyContent: "center" }}
              item
              xs={2}
            >
              <IconButton
                onClick={() =>
                  formik.setFieldValue(
                    "customFields",
                    formik.values.customFields.filter(
                      (customField, currentIndex) => index !== currentIndex
                    )
                  )
                }
                color="error"
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}
        <Button
          sx={{ marginTop: 3 }}
          variant="outlined"
          onClick={() =>
            formik.setFieldValue("customFields", [
              ...formik.values.customFields,
              { fieldName: "", fieldValue: "" },
            ])
          }
        >
          Add Custom Field
        </Button>
      </Stack>
    </Box>
  );
};

export default CustomFieldsForm;
