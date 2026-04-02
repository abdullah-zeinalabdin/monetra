import { Stack } from "@mui/material"
import Navbar from './header/Navbar.tsx'
import Dashboard from "./dashboard/Dashboard.tsx"
function App() {
  return (
    <Stack height="100vh" bgcolor={'background.default'}>
      <Navbar />
      <Dashboard />
    </Stack>
  )
}

export default App
