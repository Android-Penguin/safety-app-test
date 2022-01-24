import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonIcon } from '@ionic/react';
import './ActivityCard.css'

interface  ActivityCardProps {cardIcon:string, cardTitle:string, cardContent:string, cardColor?:string, href?:string}

const ActivityCard: React.FC<ActivityCardProps> = ({cardIcon, cardTitle, cardContent, cardColor, href}) => {
    if(cardColor) {
        console.log(cardColor);
    }
    return (
        <IonCol class="card-column" sizeXl="3" sizeLg="3" sizeMd="4" sizeSm="6" size="6">
            <IonCard class="activity-card ion-text-center" button={true} href={href} style={{"backgroundColor":cardColor}}>
                <IonCardHeader>
                    <div className="icon-circle">
                        <IonIcon icon={cardIcon} style={{"color":cardColor}}></IonIcon>
                    </div>
                    <IonCardTitle>{cardTitle}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{cardContent}</IonCardContent>
            </IonCard>
        </IonCol>
    );
}

export default ActivityCard;