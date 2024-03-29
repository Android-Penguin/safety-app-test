import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/global.css';
import Matrix from './pages/Matrix';
import Splash from './pages/Splash';
import Resize from './pages/ResizingDivs';
import StackedIcons from './pages/StackedIcons';
import NestedTA from './pages/NestedTA';
import ImagePage from './pages/ImagePage';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/risk-assessment-matrix">
          <Matrix />
        </Route>
        <Route exact path="/splash">
          <Splash />
        </Route>
        <Route exact path="/resizable">
          <Resize />
        </Route>
        <Route exact path="/stacked-icons">
          <StackedIcons />
        </Route>
        <Route exact path="/nested-ta">
          <NestedTA />
        </Route>
        <Route exact path="/image-viewer">
          <ImagePage />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
