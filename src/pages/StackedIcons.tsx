import { IonButton, IonContent, IonHeader, IonModal, IonPage } from "@ionic/react";
import NavBar from "../components/NavBar";
import './StackedIcons.css'

interface StackedIconProps {

}

const StackedIcons: React.FC<StackedIconProps> = () => {
    return (
        <IonPage>
            <IonHeader>
                <NavBar />
            </IonHeader>
            <IonContent>
                <div style={{"margin":"10px"}}>
                    <h1>Toolbox talk</h1>
                    <IonButton href="/nested-ta">Go to task analysis</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default StackedIcons;