import * as React from "react";
import { UploadButton } from "../utils/uploadthing";
import Image from "next/image";
import { uploadProduct } from "../utils/product";
import Uploads from "../Components/ProductUploads";
import connectDb from "../utils/db";

connectDb();

export default function Dashboard() {
  return <Uploads />;
}
