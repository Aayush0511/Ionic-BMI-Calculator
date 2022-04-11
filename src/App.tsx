import React, { useRef, useState } from "react";
import {
  IonAlert,
  IonApp,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import BmiControls from './components/BmiControls';
import BmiResult from "./components/BmiResult";
import InputControl from "./components/InputControl";

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
import "./theme/variables.css";

const App: React.FC = () => {

  const [calculatedBmi, setCalculatedBmi] = useState<number>();
  const [error, setError] = useState<string>();
  const [calcUnits, setCalcUnits] = useState<'mkg'|'ftlbs'>('mkg');
  
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);

  const calculateBMI = () => {
    const enteredHeight = +heightInputRef.current!.value!;
    const enteredWeight = +weightInputRef.current!.value!;

    if(!enteredHeight || !enteredWeight || enteredHeight <= 0 || enteredWeight <= 0) {
      setError('Please enter a valid/non-zero input');
      return;
    }

    const heightConversionFactor = (calcUnits === 'ftlbs' ? 3.28 : 1);
    const weightConversionFactor = (calcUnits === 'ftlbs' ? 2.2 : 1);

    const height = enteredHeight / heightConversionFactor;
    const weight = enteredWeight / weightConversionFactor;

    const bmi = weight / (height * height);
    setCalculatedBmi(bmi);
  };
  
  const resetInputs = () => {
    heightInputRef.current!.value = "";
    weightInputRef.current!.value = "";
    setCalculatedBmi(undefined);
  };

  const resetError = () => {
    setError('');
  };

  const selectCalcUnitHandler = (selectedValue: 'mkg' | 'ftlbs') => {
    setCalcUnits(selectedValue);
  };

  return(
    <>
      <IonAlert isOpen={!!error} message={error} buttons={[{text: 'Okay', handler: resetError}]}></IonAlert>
      <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol className="ion-no-padding" size-sm="8" offset-sm="2" size-md="6" offset-md="3">
              <IonCard className="ion-no-margin">
                <IonCardContent>
                  <IonGrid className="ion-no-padding">
                    <IonRow>
                      <IonCol>
                        <InputControl selectedValue={calcUnits} onSelectvalue={selectCalcUnitHandler} />
                      </IonCol>
                    </IonRow>
                    <IonRow className="ion-margin-top">
                      <IonCol>
                        <IonItem className="ion-margin-top">
                          <IonLabel position="floating">Your height (in {calcUnits === 'mkg' ? 'metres' : 'feets'})</IonLabel>
                          <IonInput type="number" ref={heightInputRef}></IonInput>
                        </IonItem>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <IonItem className="ion-margin-top">
                          <IonLabel position="floating">Your weight (in {calcUnits === 'mkg' ? 'kg' : 'lbs'})</IonLabel>
                          <IonInput type="number" ref={weightInputRef}></IonInput>
                        </IonItem>
                      </IonCol>
                    </IonRow>
                    <BmiControls onCalculate={calculateBMI} onReset={resetInputs} />
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {calculatedBmi ? 
              <BmiResult result={calculatedBmi} />
              : null}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  </>
  );
};

export default App;
