import { IonButton, IonContent, IonIcon, IonPage } from '@ionic/react';
import { home } from 'ionicons/icons';
import './Splash.css';

const Splash: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen id="splash-content">
                <div id="splash-container">
                    {/* Cone logo */}
                    <img src="./assets/ui_images/oss_cone.svg"></img>
                    <div id="tape-title">
                        {/* Tape divider */}
                        <div></div>
                        {/* OSS text */}
                        <img src="./assets/ui_images/oss_title_white.svg"></img>
                    </div>
                    {/* Buildaprice logo */}
                    <div id="bp-logo-grid">
                        <span>Brought to you by</span>
                        <img src="./assets/ui_images/Builda_Price_Logo_Icon.png"></img>
                        <img src="./assets/ui_images/Builda_Price_Logo_Text.png"></img>
                    </div>
                </div>





                {/* Temp button for test site purposes */}
                <IonButton id="temp-home" href="/home">
                    <IonIcon slot="icon-only" icon={home} />
                </IonButton>

            </IonContent>
        </IonPage>
    );
}

export default Splash;