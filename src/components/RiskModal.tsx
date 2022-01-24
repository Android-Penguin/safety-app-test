import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import { closeCircle } from 'ionicons/icons';
import { Dispatch, SetStateAction, useState } from 'react';
import './RiskModal.css';

interface RiskModalProps {modalState:boolean, setModalState:Dispatch<SetStateAction<boolean>>}

const RiskModal: React.FC<RiskModalProps> = ({modalState, setModalState}) => {

    return (
        <IonModal isOpen={modalState} class="risk-modal" onDidDismiss={()=>setModalState(false)}>
            {/* Modal header */}
            <IonHeader>
                <IonToolbar class="modal-toolbar">
                    <IonTitle>Consequence</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={() => setModalState(false)}>
                            <IonIcon icon={closeCircle} slot="icon-only"></IonIcon>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            {/* Main modal content */}
            <IonContent>
                <div className="risk-question">What is the consequence if something goes wrong?</div>
                <div className="selection-ui-container">
                    <div>
                        <input className="vertical-slider" type="range" min="1" max="5"></input>
                    </div>
                    <div>

                    </div>
                </div>
            </IonContent>

            {/* Modal footer (controls) */}
            <IonFooter>
                <IonToolbar class="footer-toolbar">
                    <div className="center-content">
                        <IonButtons class="footer-buttons">
                            <IonButton mode="md">Previous</IonButton>
                            <IonButton mode="md">Next</IonButton>
                        </IonButtons>
                    </div>
                </IonToolbar>
            </IonFooter>
        </IonModal>
    );
}

export default RiskModal;