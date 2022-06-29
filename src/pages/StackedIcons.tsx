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
                    <IonButton id="open-modal">Go to task analysis</IonButton>
                </div>
                <IonModal id="stacked-modal" trigger="open-modal">
                    <div>
                        <IonHeader>
                            <NavBar href="/stacked-icons" stackedIcon="speech_bubble.svg" />
                        </IonHeader>
                        <IonHeader id="return-header">
                            <a href="/stacked-icons">&lt; Return to Toolbox Talk</a>
                        </IonHeader>
                        <IonContent>
                            <div style={{"margin":"10px"}}>
                                <h1>Task analysis</h1>
                            </div>
                        </IonContent>
                    </div>
                </IonModal>
            </IonContent>
        </IonPage>
    );
}

export default StackedIcons;