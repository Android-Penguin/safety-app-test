import { IonContent, IonHeader, IonPage } from "@ionic/react"
import NavBar from "../components/NavBar";
import './StackedIcons.css'

interface NestedTAProps {

}

const NestedTA: React.FC<NestedTAProps> = () => {
    return (
        <IonPage>
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
        </IonPage>
    )
}

export default NestedTA;