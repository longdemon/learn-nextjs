import { useRouter } from "next/router";
import * as React from "react";

export interface DetailPageProps {}

export default function DetailPage(props: DetailPageProps) {
    const router = useRouter();
  return <div>
      <h1>Post detail Page</h1>

      <p>Param: {JSON.stringify(router.query)}</p>
  </div>;
}
