import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonPage, IonRow, IonTextarea } from '@ionic/react';
import { useState } from 'react';
import NavBar from '../components/NavBar';
import RiskModal from '../components/RiskModal';
import './Matrix.css';

interface MatrixProps {}

const Matrix: React.FC<MatrixProps> = () => {
    const[modal1State, setModal1State] = useState<boolean>(false);
    const[modal2State, setModal2State] = useState<boolean>(false);

    return (
        <IonPage>
            <IonHeader>
                <NavBar />
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid id="task-step-details-grid" fixed={true}>
                    <IonRow>
                        <IonCol size="12">
                            <h1>Task Analysis</h1>
                            <h4>Task step details:</h4>
                            <div id="description-container">
                                <h4>Task Description:</h4>
                                <IonTextarea placeholder="Enter task description" autoGrow={true}></IonTextarea>
                                <h4>Hazards Present:</h4>
                                <IonTextarea placeholder="Enter hazards present" autoGrow={true}></IonTextarea>
                                <div className="horizontal-container">
                                    <h4>Risk score initial:</h4>
                                    <IonButton onClick={() => setModal1State(true)}>Click to enter</IonButton>
                                </div>
                                <RiskModal modalState={modal1State} setModalState={setModal1State}/>
                                <h4>Control:</h4>
                                <IonTextarea placeholder="Enter controls" autoGrow={true}></IonTextarea>
                                <div className="horizontal-container">
                                    <h4>Risk score after:</h4>
                                    <IonButton onClick={() => setModal2State(true)}>Click to enter</IonButton>
                                </div>
                                <RiskModal modalState={modal2State} setModalState={setModal2State}/>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}

export default Matrix;