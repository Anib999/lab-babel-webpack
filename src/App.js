
import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import loadlogo from './assets/images/logo1.png';
import { AsyncNotFound, AsyncLogin, AsyncPublicLayout } from './App/asyncComponent';
import AllRoute from './AllRoute'
import ReportRoute from './ReportRoute';
import PublicRoute from './Routes/PublicRoute';

function App(props) {
  const { showReport } = props
  return (
    <Suspense
      fallback={
        <div className='fallback-container'>
          <img src={loadlogo} alt="" />
        </div>
      }
    >
      <Switch>

        <PublicRoute
          exact
          path='/login'
          component={AsyncLogin}
          layout={AsyncPublicLayout}
        />

        {
          showReport ?
            <ReportRoute /> : <AllRoute />
        }

        <Route component={AsyncNotFound} />

      </Switch>
    </Suspense>
  )
}

export default App;