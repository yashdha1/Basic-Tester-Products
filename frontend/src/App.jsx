import * as React from 'react'
import { Box, Button } from "@chakra-ui/react"
import { Route, Routes } from 'react-router-dom'

import CreatePage from './Pages/CreatePage'
import Navbar from './components/Navbar'
import Homepage from './Pages/Homepage'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
     <Box minH={"100vh"}>
        <Navbar /> 
        <Routes>
            <Route path='/' element={<Homepage />} / >
            <Route path='/create' element= {<CreatePage />} / >
        </Routes>
     </Box>
  )
}


export default App 