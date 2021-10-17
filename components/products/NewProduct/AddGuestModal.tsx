import { DatePicker } from "@mui/lab";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  Typography,
  TextField,
} from "@mui/material";
import { getIn, useFormik } from "formik";
import moment from "moment";
import React from "react";
import { GuestProp } from "utils/interfaces";
import { guestSchema } from "./ValidationSchemas";

interface Props {
  open: boolean;
  onClose: () => void;
  addGuest: (obj: any) => void;
}

const AddGuestModal: React.FC<Props> = (props) => {
  const { open, onClose, addGuest } = props;

  const formik = useFormik({
    validationSchema: guestSchema,
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: {
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipCode: "",
      },
      dateOfBirth: moment(),
      passportPhoto: "",
      passportNumber: "",
      shirtSize: "",
      hatSize: "",
      shoeSize: "",
      favoriteSportsTeam: "",
    } as GuestProp,
    onSubmit: (values, helpers) => {
      addGuest(values);
      helpers.resetForm();
      onClose();
    },
  });

  return (
    <Modal open={open} onClose={onClose}>
      <Paper
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60%",
          height: "80%",
          boxShadow: 24,
          p: 3,
          overflowY: "scroll",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" component="h2">
              Add Guest
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name="firstName"
              label="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name="lastName"
              label="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name="email"
              label="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name="phoneNumber"
              label="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="address.address1"
              label="address.address1"
              value={getIn(formik.values.address, "address1")}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                getIn(formik.touched.address, "address1") &&
                Boolean(getIn(formik.errors.address, "address1"))
              }
              helperText={
                getIn(formik.touched.address, "address1") &&
                getIn(formik.errors.address, "address1")
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="address.address2"
              label="address.address2"
              value={getIn(formik.values.address, "address2")}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                getIn(formik.touched.address, "address2") &&
                Boolean(getIn(formik.errors.address, "address2"))
              }
              helperText={
                getIn(formik.touched.address, "address2") &&
                getIn(formik.errors.address, "address2")
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              name="address.city"
              label="address.city"
              value={getIn(formik.values.address, "city")}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                getIn(formik.touched.address, "city") &&
                Boolean(getIn(formik.errors.address, "city"))
              }
              helperText={
                getIn(formik.touched.address, "city") &&
                getIn(formik.errors.address, "city")
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              name="address.state"
              label="address.state"
              value={getIn(formik.values.address, "state")}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                getIn(formik.touched.address, "state") &&
                Boolean(getIn(formik.errors.address, "state"))
              }
              helperText={
                getIn(formik.touched.address, "state") &&
                getIn(formik.errors.address, "state")
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              name="address.zipCode"
              label="address.zipCode"
              value={getIn(formik.values.address, "zipCode")}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                getIn(formik.touched.address, "zipCode") &&
                Boolean(getIn(formik.errors.address, "zipCode"))
              }
              helperText={
                getIn(formik.touched.address, "zipCode") &&
                getIn(formik.errors.address, "zipCode")
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DatePicker
              label="Date Of Birth"
              value={formik.values.dateOfBirth}
              onChange={(value) => {
                formik.setFieldValue("dateOfBirth", value);
              }}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  {...params}
                  name="dateOfBirth"
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.dateOfBirth &&
                    Boolean(formik.errors.dateOfBirth)
                  }
                  helperText={
                    formik.touched.dateOfBirth && formik.errors.dateOfBirth
                  }
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name="passportNumber"
              label="passportNumber"
              value={formik.values.passportNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.passportNumber &&
                Boolean(formik.errors.passportNumber)
              }
              helperText={
                formik.touched.passportNumber && formik.errors.passportNumber
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="passportPhoto"
              label="passportPhoto"
              value={formik.values.passportPhoto}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.passportPhoto &&
                Boolean(formik.errors.passportPhoto)
              }
              helperText={
                formik.touched.passportPhoto && formik.errors.passportPhoto
              }
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel>shirtSize</InputLabel>
              <Select
                name="shirtSize"
                value={formik.values.shirtSize}
                label="shirtSize"
                onChange={formik.handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="S">S</MenuItem>
                <MenuItem value="M">M</MenuItem>
                <MenuItem value="L">L</MenuItem>
                <MenuItem value="XL">XL</MenuItem>
                <MenuItem value="XXL">XXL</MenuItem>
                <MenuItem value="XXXL">XXXL</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel>hatSize</InputLabel>
              <Select
                name="hatSize"
                value={formik.values.hatSize}
                label="hatSize"
                onChange={formik.handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="S">S</MenuItem>
                <MenuItem value="M">M</MenuItem>
                <MenuItem value="L">L</MenuItem>
                <MenuItem value="XL">XL</MenuItem>
                <MenuItem value="XXL">XXL</MenuItem>
                <MenuItem value="XXXL">XXXL</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel>hatSize</InputLabel>
              <Select
                name="shoeSize"
                value={formik.values.shoeSize}
                label="shoeSize"
                onChange={formik.handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="S">S</MenuItem>
                <MenuItem value="M">M</MenuItem>
                <MenuItem value="L">L</MenuItem>
                <MenuItem value="XL">XL</MenuItem>
                <MenuItem value="XXL">XXL</MenuItem>
                <MenuItem value="XXXL">XXXL</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="favoriteSportsTeam"
              label="favoriteSportsTeam"
              value={formik.values.favoriteSportsTeam}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.favoriteSportsTeam &&
                Boolean(formik.errors.favoriteSportsTeam)
              }
              helperText={
                formik.touched.favoriteSportsTeam &&
                formik.errors.favoriteSportsTeam
              }
            />
          </Grid>
        </Grid>
        <Button sx={{ marginTop: 3 }} onClick={formik.handleSubmit as any}>
          Add Guest
        </Button>
      </Paper>
    </Modal>
  );
};

export default AddGuestModal;
