import { Button, Stack, Typography, Box } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { AdminLayout } from "layouts";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import demoData from "components/products/ProductList/demo.json";

const Products = () => {
  const columns: GridColDef[] = [
    { field: "id", hide: true },
    { field: "name", headerName: "Name", width: 100 },

    { field: "airlineName", headerName: "Airline Name", width: 130 },
    {
      field: "roomType",
      headerName: "Room Type",
      width: 100,
    },
    {
      field: "numberOfGuests",
      headerName: "Guests",
      type: "number",
      width: 50,
    },
  ];

  const rows = demoData;

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
          <Link href="/products/new" passHref>
            <Button variant="contained" startIcon={<AddIcon />}>
              New Product
            </Button>
          </Link>
        </Stack>
        <DataGrid rows={rows} columns={columns} />
      </Box>
    </AdminLayout>
  );
};

export default Products;
