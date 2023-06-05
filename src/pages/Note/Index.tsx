import { Outlet } from "react-router";
import { memo } from "react";
import ClientLayout from "../../layouts/Client";

const IndexNote = memo(function IndexNote() {
  return (
    <ClientLayout>
      <Outlet />
    </ClientLayout>
  );
});

export default IndexNote;
