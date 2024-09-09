import { TextInput, View, Text, TouchableOpacity, Vibration } from "react-native"
import { ResultImc } from "./ResultImc"
import { useState } from "react"
import styles from "./style"

export const Form = () => {

    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [imc, setImc] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)
    

    const imcCalculator = () => {
        return setImc(
            (peso / (altura * altura)).toFixed(2)
        )
    }

    const verificationImc = () => {
        if (imc == null){
            Vibration.vibrate()
            setErrorMessage("Campo obrigatório *")
        } ;
    }

    const validationImc = () => {
        if (peso != null && altura != null) {
            imcCalculator()
            setAltura(null)
            setPeso(null)
            setMessageImc(`Seu IMC é igual:`)
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
            return
        }
        verificationImc()
        setImc(null)
        setMessageImc("Preencha o peso e altura")
        setTextButton("Calcular")

    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.input} onChangeText={setAltura} value={altura} placeholder="Ex. 1.75" keyboardType="numeric" />

                <Text style={styles.formLabel}>Peso</Text>ds
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.input} onChangeText={setPeso} value={peso} placeholder="Ex. 75.15" keyboardType="numeric" />

                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => validationImc()}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    )
}