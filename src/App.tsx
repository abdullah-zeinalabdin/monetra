import { Stack } from "@mui/material"
import Navbar from './header/Navbar.tsx'
import Dashboard from "./dashboard/Dashboard.tsx"
import { TransactionProvider } from "./provider/TransactionProvider.tsx"
function App() {
  return (
    <Stack minHeight="100vh" bgcolor={'background.default'}>
      <Navbar />
      <TransactionProvider>
        <Dashboard />
      </TransactionProvider>
    </Stack>
  )
}

export default App
