import * as React from "react";
import Dashboard from "../Components/Dashboard/Dashboard";
import connectDb from "../utils/db";

connectDb();

export default function Page() {
  return (
    <main>
      <Dashboard />
    </main>
  );
}
