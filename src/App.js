import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ClientProvider } from './context/ClientProvider'
import ViewButtons from './views/ViewButtons'

function App() {

  return (
    <BrowserRouter>
      <ClientProvider>
        <Routes>
          <Route path="/" element={<ViewButtons />}>
            <Route index element={<ViewButtons />} />
          </Route>
        </Routes>
      </ClientProvider>
    </BrowserRouter>
  );
}

export default App;
