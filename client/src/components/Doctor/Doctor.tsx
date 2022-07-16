import { FunctionComponent } from "react";
import { useQuery } from "react-query";

const Doctor: FunctionComponent = () => {
  const { data, status, error } = useQuery<IStatus, Error>(
    ["status_query_key"],
    async () => {
      try {
        const response = await fetch("/health");
        return await response.json();
      } catch (_e) {
        throw new Error("Failed to fetch for health...");
      }
    },
    {
      initialData: {
        diagnosis: "unknown"
      }
    }
  );

  const render = () => {
    switch (status) {
      case "loading":
        return <i>Loading...</i>;
      case "error":
        return <strong style={{ color: "red" }}>{error.message}</strong>;
      case "success":
        return (
          <details open>
            <summary>Server health</summary>
            <code>
              <pre>
                {JSON.stringify(data, null, 2)}
              </pre>
            </code>
          </details>
        );
    }
  };

  return render();
};

export interface IStatus {
  diagnosis: "unknown" | "alive" | "dead"
};

export default Doctor;
