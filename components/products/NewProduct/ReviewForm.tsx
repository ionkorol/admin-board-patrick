import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";
import { ProductProp } from "utils/interfaces";

const ReviewForm = () => {
  const formik = useFormikContext<ProductProp>();
  console.log(formik.values);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h2">
          {formik.values.name}
        </Typography>
        <Typography variant="body1">{formik.values.description}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle2">Available Dates</Typography>
        <Typography>
          {formik.values.availableDates.from.toDate().toLocaleDateString()} -{" "}
          {formik.values.availableDates.to.toDate().toLocaleDateString()}
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="subtitle2">Check In Date</Typography>
        <Typography>
          {formik.values.checkInDate.toDate().toLocaleDateString()}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle2">Check Out Date</Typography>
        <Typography>
          To: {formik.values.checkOutDate.toDate().toLocaleDateString()}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle2">Airline Name</Typography>
        <Typography>{formik.values.airlineName}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle2">Flight Number</Typography>
        <Typography>{formik.values.flightNumber}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle2">Arrival Date</Typography>
        <Typography>
          {formik.values.arrivalDate.toDate().toDateString()}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle2">Departure Date</Typography>
        <Typography>
          {formik.values.departureDate.toDate().toDateString()}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle2">Room Type</Typography>
        <Typography>{formik.values.roomType}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle2">Number Of Guests</Typography>
        <Typography>{formik.values.numberOfGuests}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle2">Upgrade Requested</Typography>
        <Typography>
          {formik.values.upgradeRequested ? formik.values.upgradeType : "None"}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle2">Guest List</Typography>
        <List dense >
          {formik.values.guestList.map((guest, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${guest.firstName} ${guest.lastName}`}
                secondary={guest.email}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle2">Custom Fields</Typography>
        <List>
          {formik.values.customFields.map((customField, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={customField.fieldName}
                secondary={customField.fieldValue}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default ReviewForm;
