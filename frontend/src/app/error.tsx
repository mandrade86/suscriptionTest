"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h2 className="mb-[10px] text-blue-500">Something went wrong!</h2>
      <Button>
        <Link href="/">Go back to the home page.</Link>
      </Button>
    </div>
  );
}
