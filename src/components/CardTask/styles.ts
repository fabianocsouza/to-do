import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  task: {
    width: '100%',
    backgroundColor: '#262626',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
    padding: 18,
    borderColor: '#808080',
    borderWidth: 0.2,
    height: 75
  },
  nameTask: {
    color: '#F2F2F2',
    flex: 1,
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 20,
    marginRight: 15,
    alignItems: 'center'
  },
  checkbox: {
    borderRadius: 50,
    borderColor: '#4EA8DE'
  },
  button: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  }
})
