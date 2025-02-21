import React from "react";
import { withProtectedRoute } from "../hoc/withProtectedRoute";

const ProtectPage = () => {
  return <div>ProtectPage</div>;
};

export default withProtectedRoute(ProtectPage);
