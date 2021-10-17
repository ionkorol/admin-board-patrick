import { DatePicker } from "@mui/lab";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Stack,
  IconButton,
} from "@mui/material";
import { getIn, useFormikContext } from "formik";
import moment from "moment";
import React from "react";
import { ProductProp } from "utils/interfaces";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {}

const GeneralInfoForm: React.FC<Props> = (props) => {
  const formik = useFormikContext<ProductProp>();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          rows={2}
          name="description"
          label="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          rows={2}
          name="tos"
          label="Terms of Service"
          value={formik.values.tos}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.tos && Boolean(formik.errors.tos)}
          helperText={formik.touched.tos && formik.errors.tos}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <DatePicker
          label="Available Dates From"
          value={getIn(formik.values.availableDates, "from")}
          onChange={(value) =>
            formik.setFieldValue("availableDates.from", value)
          }
          renderInput={(params) => (
            <TextField
              fullWidth
              {...params}
              name="availableDates.from"
              onBlur={formik.handleBlur}
              error={
                getIn(formik.touched.availableDates, "from") &&
                Boolean(getIn(formik.errors.availableDates, "from"))
              }
              helperText={
                getIn(formik.touched.availableDates, "from") &&
                getIn(formik.errors.availableDates, "from")
              }
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <DatePicker
          label="Available Dates To"
          value={getIn(formik.values.availableDates, "to")}
          onChange={(value) => formik.setFieldValue("availableDates.to", value)}
          renderInput={(params) => (
            <TextField
              fullWidth
              {...params}
              name="availableDates.to"
              onBlur={formik.handleBlur}
              error={
                getIn(formik.touched.availableDates, "to") &&
                Boolean(getIn(formik.errors.availableDates, "to"))
              }
              helperText={
                getIn(formik.touched.availableDates, "to") &&
                getIn(formik.errors.availableDates, "to")
              }
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <DatePicker
          label="Check In Date"
          value={formik.values.checkInDate}
          onChange={(value) => {
            formik.setFieldValue("checkInDate", value);
            formik.setFieldValue("arrivalDate", value);
          }}
          renderInput={(params) => (
            <TextField
              fullWidth
              {...params}
              name="checkInDate"
              onBlur={formik.handleBlur}
              error={
                formik.touched.checkInDate && Boolean(formik.errors.checkInDate)
              }
              helperText={
                formik.touched.checkInDate && formik.errors.checkInDate
              }
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <DatePicker
          label="Check Out Date"
          value={formik.values.checkOutDate}
          onChange={(value) => {
            formik.setFieldValue("checkOutDate", value);
            formik.setFieldValue("departureDate", value);
          }}
          renderInput={(params) => (
            <TextField
              fullWidth
              {...params}
              name="checkOutDate"
              onBlur={formik.handleBlur}
              error={
                formik.touched.checkOutDate &&
                Boolean(formik.errors.checkOutDate)
              }
              helperText={
                formik.touched.checkOutDate && formik.errors.checkOutDate
              }
            />
          )}
        />
      </Grid>
      <Grid item>
        <Box>
          <Typography>Extra Nights</Typography>
          {!formik.values.extraNights.length && (
            <Typography color="error">No Extra Nights!</Typography>
          )}
          <Stack spacing={3}>
            {formik.values.extraNights.map((extraNight, index) => (
              <Stack alignItems="flex-start" direction="row" key={index}>
                <DatePicker
                  label="Extra Night"
                  value={formik.values.extraNights[index]}
                  onChange={(value) =>
                    formik.setFieldValue(`extraNights.${index}`, value)
                  }
                  renderInput={(params) => (
                    <TextField
                      fullWidth
                      {...params}
                      name={`extraNights.${index}`}
                      onBlur={formik.handleBlur}
                      error={
                        getIn(formik.touched, `extraNights.${index}`) &&
                        Boolean(getIn(formik.errors, `extraNights.${index}`))
                      }
                      helperText={
                        getIn(formik.touched, `extraNights.${index}`) &&
                        getIn(formik.errors, `extraNights.${index}`)
                      }
                    />
                  )}
                />
                <IconButton
                  color="error"
                  onClick={() => {
                    formik.setFieldValue(
                      "extraNights",
                      formik.values.extraNights.filter(
                        (extraNight, currentIndex) => currentIndex !== index
                      )
                    );
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Stack>
            ))}
            <Button
              onClick={() =>
                formik.setFieldValue("extraNights", [
                  ...formik.values.extraNights,
                  new Date(),
                ])
              }
            >
              Add Extra Night
            </Button>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default GeneralInfoForm;
