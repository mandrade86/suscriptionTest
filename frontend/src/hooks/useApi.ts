import { useState } from "react";
import { notifications } from "@mantine/notifications";

export function useApi() {
  const [loading, setLoading] = useState(false);

  const request = async <T>(fn: () => Promise<T>, messages?: { success?: string; error?: string }) => {
    try {
      setLoading(true);
      const result = await fn();
      if (messages?.success) {
        notifications.show({
          title: "Success",
          message: messages.success || "Job done successfully",
          color: "green",
          autoClose: 2000,
        });
      }
      return result;
    } catch (err: any) {
      notifications.show({
        title: `Error ${err.status ?? ""}`,
        message: err.message || messages?.error || "Unexpected error",
        color: "red",
        autoClose: 2000,
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { request, loading };
}
