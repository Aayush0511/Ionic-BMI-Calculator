import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import React from "react";

const InputControl: React.FC<{ selectedValue: 'mkg'|'ftlbs', onSelectvalue: (value: 'mkg'|'ftlbs') => void }> = (props) => {

    const inputChangeHandler = (event: CustomEvent) => {
        props.onSelectvalue(event.detail.value);
    };

    return(
        <IonSegment value={props.selectedValue} onIonChange={inputChangeHandler}>
            <IonSegmentButton value="mkg">
                <IonLabel className="ion-text-lowercase">m/kg</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="ftlbs">
                <IonLabel className="ion-text-lowercase">ft/lbs</IonLabel>
            </IonSegmentButton>
        </IonSegment>
    );
};

export default InputControl;