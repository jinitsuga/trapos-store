"use client";
import { UploadButton } from "../utils/uploadthing";

export default function Dashboard() {
  return (
    <section className="flex flex-col justify-center items-center p-8">
      <UploadButton
        className="border-2 border-white"
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />{" "}
    </section>
  );
}
