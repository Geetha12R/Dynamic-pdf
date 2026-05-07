"use client";

import store from "@/store/store";
import { Provider } from "react-redux";

// Wrapper class to wrap children with store
export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}