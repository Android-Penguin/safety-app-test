import { IonButton, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { alert, calculator, car, chatboxEllipses, checkbox, checkmark, copy, desktop, documentText, expandOutline, image, medkit } from 'ionicons/icons'
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
              cardContent="Record health & safety site meetings"
              href="/stacked-icons" />
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
            {/* #8 */}
            <ActivityCard
              cardIcon={calculator}
              cardTitle="Risk assessment matrix"
              cardContent="Experimental UI for selecting risk levels in a slider/card arrangement"
              cardColor="#FF7052"
              href="/risk-assessment-matrix"/>
            {/* #9 */}
            <ActivityCard
              cardIcon={desktop}
              cardTitle="Splash Screen"
              cardContent="Screen users are greeted with upon opening app"
              cardColor="#5cB85C"
              href="/splash" />
            <ActivityCard
              cardIcon={expandOutline}
              cardTitle="Rotated Slider"
              cardContent="Experimenting with resizing divs"
              cardColor="#FF00FF"
              href="/resizable" />
            <ActivityCard
              cardIcon={copy}
              cardTitle="Stacked icons"
              cardContent="Modified home icon for pages accessed from another activity"
              cardColor="#63C5DA"
              href="/stacked-icons" />
            <ActivityCard
              cardIcon={image}
              cardTitle="Image Viewer"
              cardContent="View images with pinch to zoom touch controls"
              cardColor="#FDD128"
              href="/image-viewer" />
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
