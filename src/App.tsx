import Router from './routes/Router'
import GlobalStyles from './styles/GlobalStyles'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Router />
    </QueryClientProvider>
  )
}

export default App
