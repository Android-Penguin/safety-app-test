import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonIcon } from '@ionic/react';
import './ActivityCard.css'

interface  ActivityCardProps {cardIcon:string, cardTitle:string, cardContent:string}

const ActivityCard: React.FC<ActivityCardProps> = ({cardIcon, cardTitle, cardContent}) => {
    return (
        <IonCol class="card-column" sizeXl="3" sizeLg="3" sizeMd="4" sizeSm="6" size="6">
            <IonCard class="activity-card ion-text-center" button={true}>
                <IonCardHeader>
                    <div className="icon-circle">
                        <IonIcon icon={cardIcon}></IonIcon>
                    </div>
                    <IonCardTitle>{cardTitle}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{cardContent}</IonCardContent>
            </IonCard>
        </IonCol>
    );
}

export default ActivityCard;