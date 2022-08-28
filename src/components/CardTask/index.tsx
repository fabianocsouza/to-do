import { TouchableOpacity, View, Text, TouchableHighlight } from "react-native"
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';

import IconDeleteFalse from '../../../assets/false.svg'
import IconDeleteTrue from '../../../assets/true.svg'

import { styles } from './styles'

interface TaskProps {
  nameTask: string;
}


export function CardTask({ nameTask }: TaskProps) {
  const [isChecked, setChecked] = useState(false);
  const [icon, setIcon] = useState(false);

  const IconButton = () => {
    return icon ? <IconDeleteFalse width={18} height={20} />
      : <IconDeleteTrue width={18} height={20} />
  }
  return (
    <View style={styles.task}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? '#5E60CE' : undefined}

      />
      <Text
        style={styles.nameTask}
      >
        {nameTask}
      </Text>
      <TouchableHighlight
        onPress={() => setIcon(icon ? false : true)}
        style={styles.button}
        underlayColor='#333333'

      >
        {IconButton()}
      </TouchableHighlight>
    </View >
  )
}
