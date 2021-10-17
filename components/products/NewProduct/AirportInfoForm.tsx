import { DatePicker } from "@mui/lab";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  FormHelperText,
} from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";
import { ProductProp } from "utils/interfaces";

interface Props {}

const AirportInfoForm: React.FC<Props> = (props) => {
  const formik = useFormikContext<ProductProp>();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <FormControl
          fullWidth
          error={
            formik.touched.airlineName && Boolean(formik.errors.airlineName)
          }
        >
          <InputLabel>Airline Name</InputLabel>
          <Select
            name="airlineName"
            value={formik.values.airlineName}
            label="Airline Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <MenuItem value="Punta Cana">Punta Cana</MenuItem>
            <MenuItem value="Santo Domingo">Santo Domingo</MenuItem>
            <MenuItem value="La Romana">La Romana</MenuItem>
            <MenuItem value="Santiago Cibao">Santiago Cibao</MenuItem>
            <MenuItem value="Puerto Plata">Puerto Plata</MenuItem>
            <MenuItem value="Samana">Samana</MenuItem>
          </Select>
          <FormHelperText>
            {formik.touched.airlineName && formik.errors.airlineName}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          name="flightNumber"
          label="Flight Number"
          value={formik.values.flightNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.flightNumber && Boolean(formik.errors.flightNumber)
          }
          helperText={formik.touched.flightNumber && formik.errors.flightNumber}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <DatePicker
          label="Arrival Date"
          value={formik.values.arrivalDate}
          onChange={(value) => formik.setFieldValue("arrivalDate", value)}
          renderInput={(params) => (
            <TextField
              fullWidth
              {...params}
              name="arrivalDate"
              onBlur={formik.handleBlur}
              error={
                formik.touched.arrivalDate && Boolean(formik.errors.arrivalDate)
              }
              helperText={
                formik.touched.arrivalDate && formik.errors.arrivalDate
              }
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <DatePicker
          label="Departure Date"
          value={formik.values.departureDate}
          onChange={(value) => formik.setFieldValue("departureDate", value)}
          renderInput={(params) => (
            <TextField
              fullWidth
              {...params}
              name="departureDate"
              onBlur={formik.handleBlur}
              error={
                formik.touched.departureDate &&
                Boolean(formik.errors.departureDate)
              }
              helperText={
                formik.touched.departureDate && formik.errors.departureDate
              }
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

export default AirportInfoForm;
