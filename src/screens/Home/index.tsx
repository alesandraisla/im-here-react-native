import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {

  const participants = ['Alesandra', 'Zoe', 'Snoopy', 'Suzy', 'Floquinho', 'Belinha', 'Mimi', '']

    function handleParticipantAdd(name: string) {
      if(participants.includes('Alesandra')) {
        return Alert.alert('Participante Existe', 'Já existe um participante na lista com esse nome')
      }
    }

    function handleParticipantRemove(name: string) {
      Alert.alert('Remover', `Remover o participante ${name}`, [
        {
          text: 'Sim',
          onPress: () => Alert.alert('Deletado!')
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ])
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
            <TouchableOpacity style={styles.button} onPress={() => handleParticipantAdd("Alesandra")}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
       
        <FlatList 
          data={participants}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Participant 
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
           />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Ninguém chegou no evento ainda ? Adicione participantes a sua lista de presença 
            </Text>
          )}
        />
    </View>
  );
}


// .color1 {color: #f8b4ed;}
// .color2 {color: #f8bbca;}
// .color3 {color: #1755a4;}
// .color4 {color: #1a94b5;}
// .color5 {color: #20dacb;}