import React, { Fragment } from "react";
import Form from "./Form";
import Leads from "./Lead";
import { Login } from "../accounts/Login";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Leads />
    </Fragment>
  );
}
