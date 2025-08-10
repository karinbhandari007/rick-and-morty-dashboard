import { ApolloProvider } from "@apollo/client";
import { AuthProvider } from "./contexts";
import { Provider } from "./contexts/ChakraProvider";
import { AppRoutes } from "./routes";
import client from "./configs/apollo-client";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Provider>
          <AppRoutes />
        </Provider>
      </AuthProvider>
    </ApolloProvider>
  );
}
