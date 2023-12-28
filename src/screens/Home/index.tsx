import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {

  const participants = ['Alesandra', 'Zoe', 'Snoopy', 'Suzy', 'Floquinho', 'Belinha', 'Mimi', '']

    function handleParticipantAdd(name: string) {
      console.log(`Você clicou em remover o ${name}`)
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
            <TouchableOpacity style={styles.button} onPress={() => handleParticipantAdd("Alesandra")}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
        {/* Nao precisa fazer map, pois ela mesma lida com a lista sozinha  
          pode incluir um componente caso a lista aparece vazia usando o ListEmptyComponent
        */}
        <FlatList 
          data={participants}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Participant 
            key={item}
            name={item}
            onRemove={() => handleParticipantAdd("Alesandra")}
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