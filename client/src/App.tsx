import { FunctionComponent } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Doctor from "./components/Doctor";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false
    }
  }
});

const App: FunctionComponent = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Doctor />
      </main>
    </QueryClientProvider>
  );
}

export default App;
