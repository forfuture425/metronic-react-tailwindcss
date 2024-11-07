import { useEffect, useState } from 'react';
import {  BrowserRouter as Router, useLocation, Routes, Route } from 'react-router-dom';

import DefaultLayout from './layout/DefaultLayout';
import Loader from './common/Loader';
import Dashborad from './pages/dashboard';
import Market from './pages/market';
import Agents from './pages/agents';
import PromptTemplate from './pages/PromptTemplates';
import Oracles from "./pages/Oracles";
import Inference from "./pages/Inference";
import Prompts from "./pages/prompts";
import Training from "./pages/Training";
import Nodes from "./pages/Nodes";
import Models from "./pages/Models";
import DataBlocks from "./pages/DataBlocks";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Router>
      <DefaultLayout>
        <Routes>
          <Route index element={ <Dashborad /> } />
          <Route path='/market' element={ <Market /> } />
          <Route path='/agents' element={ <Agents /> } />
          <Route path='/prompttemplates' element={ <PromptTemplate /> } />
          <Route path='/oracles' element={ <Oracles /> } />
          <Route path='/inference' element={ <Inference /> } />
          <Route path='/prompts' element={ <Prompts /> } />
          <Route path='/training' element={ <Training /> } />
          <Route path='/models' element={ <Models /> } />
          <Route path='/nodes' element={ <Nodes /> } />
          <Route path='/datablocks' element={ <DataBlocks /> } />
        </Routes>
      </DefaultLayout>
    </Router>
  );
}

export default App;
