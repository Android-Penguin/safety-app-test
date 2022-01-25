import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import { closeCircle } from 'ionicons/icons';
import { Dispatch, SetStateAction, useState } from 'react';
import './RiskModal.css';
import './SliderStyles.css'

interface RiskModalProps {modalState:boolean, setModalState:Dispatch<SetStateAction<boolean>>}

const RiskModal: React.FC<RiskModalProps> = ({modalState, setModalState}) => {
    const root = document.querySelector(":root") as HTMLElement;
    var percentageValue = "55%";
    
    function changeValue(slider: any) {
        var value = Math.round(slider.target.value);

        console.log(value);

        switch(value) {
            case 1:
                percentageValue = "10%";
                break;
            case 2:
                percentageValue = "32%";
                break;
            case 3:
                percentageValue = "55%";
                break;
            case 4:
                percentageValue = "76%";
                break;
            case 5:
                percentageValue = "100%";
                break;
        }

        // console.log(percentageValue);
        root.style.setProperty("--sliderPercentage", percentageValue);
    }

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
                        <input className="vertical-slider" onInput={changeValue} type="range" min="1" max="5"></input>
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