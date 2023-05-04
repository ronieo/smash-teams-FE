import Router from './routes/Router'
import GlobalStyles from './styles/GlobalStyles'
import { QueryClient, QueryClientProvider } from 'react-query'
import { worker } from '../src/mocks/browsers'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Router />
    </QueryClientProvider>
  )
}

export default App
