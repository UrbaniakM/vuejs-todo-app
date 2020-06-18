import TodoListItem from "@/components/TodoListItem";
import { mount } from "@vue/test-utils";

describe("TodoListItem.vue", () => {
  it("should render correct contents", async () => {
    const todo = {
      text: "Todo text A"
    };

    const wrapper = mount(TodoListItem, {
      propsData: { todo }
    });

    expect(wrapper.exists()).toBeTruthy();

    const todoListItem = wrapper.findComponent(TodoListItem);
    expect(todoListItem.exists()).toBeTruthy();
    expect(todoListItem.html()).toContain(todo.text);
  });
});
