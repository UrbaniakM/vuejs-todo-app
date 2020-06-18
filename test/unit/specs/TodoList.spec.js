import TodoList from '@/components/TodoList';
import { mount } from '@vue/test-utils';


describe('TodoList.vue', () => {
  it('should render empty todos correctly', async () => {
    const wrapper = mount(TodoList, {
      propsData: { todos: [] },
    });

    expect(wrapper.exists()).toBeTruthy();

    const todoList = wrapper.findComponent(TodoList);
    expect(todoList.exists()).toBeTruthy();
    expect(todoList.html().includes('Nothing left in the list.')).toBeTruthy();

    const ulElement = todoList.find('ul');
    expect(ulElement.exists()).toBeFalsy();
  });

  it('should render non-empty todos correctly', async () => {
    const todos = [
      {
        text: 'Todo 1',
      },
      {
        text: 'Todo 2',
      },
    ];

    const wrapper = mount(TodoList, {
      propsData: { todos },
    });

    expect(wrapper.exists()).toBeTruthy();

    const todoList = wrapper.findComponent(TodoList);
    expect(todoList.exists()).toBeTruthy();
    expect(todoList.html().includes('Nothing left in the list.')).toBeFalsy();

    const ulElement = todoList.find('ul');
    expect(ulElement.exists()).toBeTruthy();
  });
});
