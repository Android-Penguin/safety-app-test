import { IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { alert, car, chatboxEllipses, checkbox, checkmark, documentText, medkit } from 'ionicons/icons'
import ExploreContainer from '../components/ExploreContainer';
import NavBar from '../components/NavBar';
import ActivityCard from '../components/ActivityCard';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <NavBar />
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid id="activities-grid" fixed={true}>
          <IonRow>
            {/* #1 */}
            <ActivityCard
              cardIcon={chatboxEllipses}
              cardTitle="Toolbox Talk"
              cardContent="Record health & safety site meetings" />
            {/* #2 */}
            <ActivityCard
              cardIcon={checkmark}
              cardTitle="Site Observations"
              cardContent="Identifying and recording site hazards" />
            {/* #3 */}
            <ActivityCard
              cardIcon={alert}
              cardTitle="Proactive Risk Assessment (PRA)"
              cardContent="Identify hazards in the work area to stay safe" />
            {/* #4 */}
            <ActivityCard
              cardIcon={checkbox}
              cardTitle="Job Analysis (SWMS)"
              cardContent="AKA Task Analysis / JSA / JSEA" />
            {/* #5 */}
            <ActivityCard
              cardIcon={medkit}
              cardTitle="Incident Reporting"
              cardContent="Incidents, near misses and injuries" />
            {/* #6 */}
            <ActivityCard
              cardIcon={car}
              cardTitle="Vehicle Management"
              cardContent="Quick vehicle check" />
            {/* #7 */}
            <ActivityCard
              cardIcon={documentText}
              cardTitle="My Documents"
              cardContent="Health & safety reports" />
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;