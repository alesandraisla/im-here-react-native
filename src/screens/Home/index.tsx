import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
    function handleParticipantAdd() {

    }


  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
      </Text>

        <View style={styles.form}>
            <TextInput 
            style={styles.input} 
            placeholder='Nome do participante'
            placeholderTextColor='#fff'
            />

            {/* Região clicável */}
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>

        <Participant />
    </View>
  );
}


// .color1 {color: #f8b4ed;}
// .color2 {color: #f8bbca;}
// .color3 {color: #1755a4;}
// .color4 {color: #1a94b5;}
// .color5 {color: #20dacb;}