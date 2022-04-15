import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonPage, IonRow, IonTextarea } from '@ionic/react';
import { useState } from 'react';
import NavBar from '../components/NavBar';
import './Resize.css';

interface ResizeProps {}

const Resize: React.FC<ResizeProps> = () => {

    return (
        <IonPage>
            <IonHeader>
                <NavBar />
            </IonHeader>
            <IonContent fullscreen>
                {/* <div id="flex-parent">
                    <div id="set-height">
                        <h1>Text title</h1>
                        <p>a lot of nonsensical text that is very long and somehow takes up lot's of lines with variable length so that the box will grow and shrink according to what is inside it.</p>
                    </div>
                    <div id="varying-height">
                        
                    </div>
                </div> */}
                <div id="grid-parent">
                    <div id="title-block">
                        <h1>Title</h1>
                        <p>a lot of nonsensical text that is very long and somehow takes up lot's of lines with variable length so that the box will grow and shrink according to what is inside it.</p>
                    </div>
                    <div id="lower-grid">
                        <div id="rotated-container">
                            <div id="slider-container">
                                <input type="range" min="1" max="5"></input>
                            </div>
                            <div id="slider-buttons">
                                <div>Really long text in a pretty shape that needs to go long enough such that it takes up many lines and is a general annoyance to deal with.</div>
                                <div>Really long text in a pretty shape that needs to go long enough such that it takes up many lines and is a general annoyance to deal with.</div>
                                <div>Really long text in a pretty shape that needs to go long enough such that it takes up many lines and is a general annoyance to deal with.</div>
                                <div>Really long text in a pretty shape that needs to go long enough such that it takes up many lines and is a general annoyance to deal with.</div>
                                <div>Really long text in a pretty shape that needs to go long enough such that it takes up many lines and is a general annoyance to deal with.</div>
                            </div>
                        </div>
                    </div>
                </div>

            </IonContent>
        </IonPage>
    );
}

export default Resize;