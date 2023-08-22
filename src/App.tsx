
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Math from './components/Math/Math';
import English from './components/English/English';
import Find from './components/Find/Find';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <HashRouter >
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/math' element={<Math/>}/>
          <Route path='/english' element={<English/>}/>
          <Route path='/find' element={<Find/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
