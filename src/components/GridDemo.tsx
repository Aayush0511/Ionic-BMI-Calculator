import React from "react";
import { IonApp, IonCol, IonContent, IonGrid, IonRow } from "@ionic/react";
import './GridDemo.css';

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "../theme/variables.css";

const GridDemo: React.FC = () => {
    return(
        <IonApp>
            <IonContent>
                <IonGrid fixed id="demo-grid">
                    <IonRow className="ion-align-items-stretch">
                        <IonCol className="ion-text-center ion-align-self-center" size="6">1</IonCol>
                        <IonCol>2</IonCol>
                        <IonCol>3</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="6" offset="6">
                            4
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonApp>
    );
};

export default GridDemo;