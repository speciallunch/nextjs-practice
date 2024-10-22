// next.js 지정 파일 (layout, page, not-found)

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return <h1>NOT FOUND</h1>;
}
