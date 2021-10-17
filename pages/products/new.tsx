import {
  Stack,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { useFormik, FormikProvider } from "formik";
import { AdminLayout } from "layouts";
import React, { useState } from "react";
import { ProductProp } from "utils/interfaces";
import {
  AirportInfoForm,
  CustomFieldsForm,
  GeneralInfoForm,
  GuestsInfoForm,
  ReviewForm,
  RoomInfoForm,
} from "components/products/NewProduct";
import { productSchema } from "components/products/NewProduct/ValidationSchemas";
import moment from "moment";

const NewProduct = () => {
  const formik = useFormik({
    validationSchema: productSchema,
    initialValues: {
      name: "",
      description: "",
      tos: "",
      availableDates: {
        from: moment(),
        to: moment(),
      },
      checkInDate: moment(),
      checkOutDate: moment(),
      extraNights: [],
      airlineName: "Punta Cana",
      flightNumber: "",
      arrivalDate: moment(),
      departureDate: moment(),
      roomType: "",
      numberOfGuests: 1,
      upgradeRequested: false,
      upgradeType: "",
      guestList: [],
      customFields: [],
    } as ProductProp,
    onSubmit: (values) => console.log(values),
  });

  const [step, setStep] = useState(0);

  const renderStep = () => {
    switch (step) {
      case 0:
        return <GeneralInfoForm />;
      case 1:
        return <AirportInfoForm />;
      case 2:
        return <RoomInfoForm />;
      case 3:
        return <GuestsInfoForm />;
      case 4:
        return <CustomFieldsForm />;
      case 5:
        return <ReviewForm />;
      default:
        return <Typography color="error">No Form Found!</Typography>;
    }
  };

  return (
    <AdminLayout>
      <Box sx={{ flexGrow: 1 }}>
        <Stack
          sx={{ paddingBottom: 3 }}
          direction="row"
          justifyContent="space-between"
        >
          <Typography variant="h4" component="h2">
            Products
          </Typography>
          <Button variant="contained">Cancel</Button>
        </Stack>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            rowGap: 5,
          }}
        >
          <Stepper activeStep={step} sx={{ width: "50%" }} alternativeLabel>
            <Step>
              <StepLabel>General Info</StepLabel>
            </Step>
            <Step>
              <StepLabel>Airport Info</StepLabel>
            </Step>
            <Step>
              <StepLabel>Room Info</StepLabel>
            </Step>
            <Step>
              <StepLabel>Guests Info</StepLabel>
            </Step>
            <Step>
              <StepLabel>Custom Fields</StepLabel>
            </Step>
            <Step>
              <StepLabel>Review</StepLabel>
            </Step>
          </Stepper>
          <Card sx={{ width: "50%" }}>
            <CardContent>
              <FormikProvider value={formik}>{renderStep()}</FormikProvider>
              <Stack
                justifyContent="space-between"
                direction="row"
                marginTop={3}
              >
                <Button
                  disabled={step === 0}
                  variant="text"
                  onClick={() => setStep((prevState) => prevState - 1)}
                >
                  Back
                </Button>
                {step === 5 ? (
                  <Button onClick={formik.handleSubmit as any}>Submit</Button>
                ) : (
                  <Button
                    onClick={async () => {
                      const errors = await formik.validateForm();
                      if (
                        !stepDictonary[step].some((value) =>
                          Object.keys(errors).includes(value)
                        )
                      ) {
                        setStep((prevState) => prevState + 1);
                        formik.setTouched({});
                      } else {
                        formik.handleSubmit();
                        console.log("Step has errors");
                      }
                    }}
                  >
                    Next
                  </Button>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </AdminLayout>
  );
};

export default NewProduct;

const stepDictonary = [
  // General Info
  [
    "name",
    "description",
    "tos",
    "availableDates.from",
    "availableDates.to",
    "checkInDate",
    "checkOutDate",
    "extraNights",
  ],
  ["airlineName", "flightNumber", "arrivalDate", "departureDate"],
  ["roomType", "numberOfGuests", "upgradeRequested", "upgradeType"],
  ["guestList"],
  ["customFields"],
];
