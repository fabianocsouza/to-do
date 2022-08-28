import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A'
  },
  header: {
    height: 200,
    backgroundColor: '#0D0D0D',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    position: 'absolute',
    padding: 24,
    marginTop: 145,
    flexDirection: 'row'
  },
  input: {
    height: 60,
    width: 308,
    backgroundColor: '#262626',
    padding: 16,
    fontSize: 18,
    fontWeight: '500',
    borderRadius: 5,
    color: '#F2F2F2',
    borderWidth: 0.5
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 5,
    backgroundColor: '#1E5F9F',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10
  },
  countTasks: {
    flexDirection: 'row',
    marginTop: 55,
    justifyContent: 'space-between',
    padding: 24
  },
  create: { flexDirection: 'row' },
  completed: { flexDirection: 'row' },
  result: {
    width: 30,
    height: 24,
    backgroundColor: '#333333',
    marginLeft: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  textResult: {
    color: '#D9D9D9',
    fontSize: 16
  },
  textCreate: {
    color: '#4EA8DE',
    fontSize: 16,
    fontWeight: 'bold'
  },
  textCompleted: {
    color: '#8284FA',
    fontSize: 16,
    fontWeight: 'bold'
  },
  listTasks: {
    padding: 24
  },
  semTask: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 0.2,
    borderColor: '#808080'
  },
  iconTask: {
    marginTop: 48
  },
  semTaskName: {
    marginTop: 30,
    fontSize: 18,
    color: '#808080',
    fontWeight: 'bold'
  },
  semTaskName2: {
    marginTop: 0,
    fontSize: 18,
    color: '#808080'
  }
})
