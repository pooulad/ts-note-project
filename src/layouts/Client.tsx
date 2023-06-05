import React, { memo } from "react";

type ClientType = {
  children: React.ReactNode;
};
const ClientLayout = memo(function Client({ children }: ClientType) {
  return (
    <>
      <main className="client_layout_content">{children}</main>
    </>
  );
});

export default ClientLayout;
