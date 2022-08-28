import { View, Text, TextInput, TouchableOpacity, FlatList, Image, ImageBackground, Alert } from "react-native"
import { Ionicons } from '@expo/vector-icons';

import Logo from '../../../assets/Logo.svg'
import { styles } from './styles';
import { CardTask } from "../../components/CardTask";
import { useState } from "react";

import SemTask from "../../../assets/Clipboard.svg"

export function Home() {

  const [task, setTask] = useState<string[]>([])
  const [taskName, setTaskName] = useState('')


  const handleTaskAdd = () => {

    if (task.includes(taskName)) {
      return Alert.alert("Atenção", "Tarefa existente")
    }

    setTask(prevTask => [...task, taskName])
    setTaskName('')
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo width={160} height={80} />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"#808080"}
          onChangeText={setTaskName}
          value={taskName}

        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleTaskAdd}
        >
          <Ionicons name="add-circle-outline" size={30} color="#F2F2F2" />
        </TouchableOpacity>
      </View>
      <View style={styles.countTasks}>
        <View style={styles.create}>
          <Text
            style={styles.textCreate}
          >Criadas</Text>
          <View style={styles.result}>
            <Text style={styles.textResult}>0</Text>
          </View>
        </View>
        <View style={styles.completed}>
          <Text
            style={styles.textCompleted}
          >Concluídas</Text>
          <View style={styles.result}>
            <Text
              style={styles.textResult}
            >0</Text>
          </View>
        </View>
      </View>
      <View style={styles.listTasks}>

        <FlatList
          data={task}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <CardTask key={item} nameTask={item} />
          )}

          ListEmptyComponent={() => (
            <View style={styles.semTask}>
              <SemTask width={80} height={80} style={styles.iconTask} />
              <Text style={styles.semTaskName}>Você ainda não tem tarefas cadastradas</Text>
              <Text style={styles.semTaskName2}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          )}

        />

      </View>

    </View >
  )
}
