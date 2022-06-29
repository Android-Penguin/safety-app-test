import { IonButton, IonButtons, IonContent, IonIcon, IonItem, IonList, IonListHeader, IonPopover, IonToolbar } from '@ionic/react';
import { ellipsisHorizontal, home } from 'ionicons/icons';
import './NavBar.css';

interface NavProps {
    stackedIcon?: string
    href?: string
}

const NavBar: React.FC<NavProps> = ({ stackedIcon, href }) => {
    return(
        <div>
        <IonToolbar id="nav-bar">
            <div id="title-container">
                <a href={ href || "/home" }>
                    <div id="icon-grid">
                        { stackedIcon ?
                            <>
                            <img className="lower-icon" src="./assets/ui_images/oss_cone.svg" />
                            <div className="upper-icon">
                                <img src={`./assets/ui_images/${stackedIcon}`}></img>
                            </div>
                            </>
                            :
                            <>
                            <img className="full-icon" src="./assets/ui_images/oss_cone.svg" />
                            </>
                        }
                    </div>
                </a>
                <img id="oss-title-text" src="./assets/ui_images/oss_title_black.svg" />
            </div>

            {/* Nav buttons */}
            <IonButtons slot="end">
                {/* <IonButton href="/home" style={{"marginRight":"15px"}}>
                    <IonIcon icon={home} slot="icon-only"></IonIcon>
                </IonButton> */}
                <IonButton id="menu-button">
                    <div id="lines-container">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    {/* <IonIcon icon={ellipsisHorizontal} slot="icon-only"></IonIcon> */}
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