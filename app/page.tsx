import { Suspense } from "react";
import { HomePage } from "@/components/home/page";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function Page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomePage />
    </Suspense>
  );
}