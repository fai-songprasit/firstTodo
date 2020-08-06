import tasks from '../../../client/reducers/tasks'

test('ADD TASK works as it should', () => {
    //Arrange
    const task1 = { id: 1, name: 'eat' }
    const task2 = { id: 2, name: 'sleep' }
    const expected = [task1, task2]
    const initialState = [task1]
    const action = {
      type: 'ADD_TASK',
      task: task2
    }

    //Act
    const actual = tasks(initialState, action)

    //Assert
    expect(actual).toEqual(expected)
}) 