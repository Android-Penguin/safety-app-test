import { IonContent, IonHeader, IonPage } from "@ionic/react"
import ImageViewer from "../components/ImageViewer";
import NavBar from "../components/NavBar";
import './ImagePage.css'

interface ImagePageProps {}

const ImagePage: React.FC<ImagePageProps> = () => {
    return (
        <IonPage>
            <IonHeader>
                <NavBar />
            </IonHeader>
            <IonContent>
                <div id="test-grid">
                    <h1>&lt; Image.jpeg</h1>
                    <ImageViewer src="./assets/site_plan.png" />
                    {/* <ImageViewer src="./assets/aspect_ratios_test_landscape.jpg" /> */}
                    {/* <ImageViewer src="./assets/aspect_ratios_test_portrait.jpg" /> */}
                </div>
            </IonContent>
        </IonPage>
    )
}

export default ImagePage;