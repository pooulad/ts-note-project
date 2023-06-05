import { Outlet } from "react-router";
import { memo } from "react";
import ClientLayout from "../../layouts/Client";
import "../../styles/Note.css"

const IndexNote = memo(function IndexNote() {
  return (
    <ClientLayout>
      <Outlet />
    </ClientLayout>
  );
});

export default IndexNote;
