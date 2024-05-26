// Toaster is a foregin library that is not adjusted to Next.js 13 app router
// Hence, we need to create a provider / wrapper to make it a "client parent" for it to work properly
"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return <Toaster />;
};

export default ToasterProvider;
