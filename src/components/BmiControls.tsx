import React from "react";
import { IonButton, IonCol, IonIcon, IonRow } from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";

const BmiControls: React.FC<{onCalculate: () => void, onReset: () => void}> = (props) => {
    return(
        <IonRow className="ion-margin-top">
          <IonCol className="ion-text-center" size="12" size-md="6">
            <IonButton expand="block" onClick={props.onCalculate}>
              <IonIcon slot="start" icon={calculatorOutline} />
              Calculate
            </IonButton>
          </IonCol>
          <IonCol className="ion-text-center" size="12" size-md="6">
            <IonButton expand="block" fill="clear" onClick={props.onReset}>
              <IonIcon slot="start" icon={refreshOutline} />
              Reset
            </IonButton>
          </IonCol>
        </IonRow>
    );
};

export default BmiControls;