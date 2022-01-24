import { IonButton, IonButtons, IonContent, IonIcon, IonItem, IonList, IonListHeader, IonPopover, IonToolbar } from '@ionic/react';
import { ellipsisHorizontal, home } from 'ionicons/icons';
import './NavBar.css';

interface NavProps {}

const NavBar: React.FC<NavProps> = () => {
    return(
        <div>
        <IonToolbar id="nav-bar">
            <div id="title-container">
                <picture>
                    <source media="(min-width:992px)" srcSet="./assets/ui_images/Builda_Price_Logo_Full.png"></source>
                    <source media="(min-width:576px)" srcSet="./assets/ui_images/Builda_Price_Logo_Icon.png"></source>
                    <img src="./assets/ui_images/Builda_Price_Logo_Icon.png"></img>
                </picture>
                <h1>Onsite Safety</h1>
            </div>

            {/* Nav buttons */}
            <IonButtons slot="end">
                <IonButton href="/home">
                    <IonIcon icon={home} slot="icon-only"></IonIcon>
                </IonButton>
                <IonButton id="menu-button">
                    <IonIcon icon={ellipsisHorizontal} slot="icon-only"></IonIcon>
                </IonButton>
            </IonButtons>

            {/* Popup menu */}
            <IonPopover id="popup-menu" trigger="menu-button" mode="ios" arrow={true} dismissOnSelect={true}>
                <IonContent>
                    <IonList id="popup-menu-list">
                        <IonListHeader>Menu</IonListHeader>
                        <IonItem button detail={false}>Profile</IonItem>
                        <IonItem button detail={false}>Notification History</IonItem>
                        <IonItem button detail={false}>Settings</IonItem>
                    </IonList>
                </IonContent>
            </IonPopover>
        </IonToolbar>
        <div id="tape-div">

        </div>
        </div>
    );
}

export default NavBar;