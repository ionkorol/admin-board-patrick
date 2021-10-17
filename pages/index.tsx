import Head from "next/head";
import Image from "next/image";
import { AdminLayout } from "layouts";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <AdminLayout>
      <Typography>Hello</Typography>
    </AdminLayout>
  );
}
