import React, { Suspense } from "react";

//@ts-ignore
const VisorComponent = React.lazy(() => import("app2/components/Visor"));

export function Visor() {
  return (
    <Suspense fallback={"loading..."}>
      <VisorComponent/>
    </Suspense>
  )
}