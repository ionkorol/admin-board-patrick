import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";
import { ProductProp } from "utils/interfaces";

interface Props {}

const RoomInfoForm: React.FC<Props> = (props) => {
  const formik = useFormikContext<ProductProp>();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <FormControl
          fullWidth
          error={formik.touched.roomType && Boolean(formik.errors.roomType)}
        >
          <InputLabel>Room Type</InputLabel>
          <Select
            name="roomType"
            value={formik.values.roomType}
            label="Room Type"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <MenuItem value="1">Room Type 1</MenuItem>
            <MenuItem value="2">Room Type 2</MenuItem>
            <MenuItem value="3">Room Type 3</MenuItem>
          </Select>
          <FormHelperText>
            {formik.touched.roomType && formik.errors.roomType}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl
          fullWidth
          error={
            formik.touched.numberOfGuests &&
            Boolean(formik.errors.numberOfGuests)
          }
        >
          <InputLabel>Number of Guests</InputLabel>
          <Select
            name="numberOfGuests"
            value={formik.values.numberOfGuests}
            label="Number of Guests"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
          <FormHelperText>
            {formik.touched.numberOfGuests && formik.errors.numberOfGuests}
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={formik.values.upgradeRequested}
              onChange={(e) =>
                formik.setFieldValue("upgradeRequested", e.target.checked)
              }
            />
          }
          label="Request Upgrade"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl
          fullWidth
          error={
            formik.touched.upgradeType && Boolean(formik.errors.upgradeType)
          }
          disabled={!formik.values.upgradeRequested}
        >
          <InputLabel>Upgrade Type</InputLabel>
          <Select
            name="upgradeType"
            value={formik.values.upgradeType}
            label="Upgrade Type"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="King Bed">King Bed</MenuItem>
            <MenuItem value="Two Queen Beds">Two Queen Beds</MenuItem>
          </Select>
          <FormHelperText>
            {formik.touched.upgradeType && formik.errors.upgradeType}
          </FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default RoomInfoForm;
