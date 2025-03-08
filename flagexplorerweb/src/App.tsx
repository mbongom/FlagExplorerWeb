import { Suspense } from 'react';
import './App.css';
import { OMixLayout } from './layout/OMiXLayout';
import OMiXSpinner from './layout/OMiXSpinner';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Countries from './pages/Countries';
import CountryDetails from './pages/CountryDetails';

import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <OMixLayout>
        <Suspense fallback={<OMiXSpinner />}>
          <Routes>
            <Route path='/' Component={Countries} />
            <Route path='/details' Component={CountryDetails} />
          </Routes>
        </Suspense>
      </OMixLayout>
      <ToastContainer />
    </div>
  );
}

export default App;
