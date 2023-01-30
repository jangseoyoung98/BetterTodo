import React from "react";
import { Checkbox, Flex, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function TodoItem(props) {
    const deleteTodo = () => {
        props.setTodoItemList(
            props.todoItemList.filter((item) => item.id !== props.id)
        );
    };

    return (
        <Flex
           px={8}
           py={2}
           _hover={{ bgColor: "blue.50" }} // 마우스를 올렸을 때 태그 효과
           justify="space-between"
        >
            <Checkbox size="lg" defaultChecked={props.isDefaultChecked}>
                {props.text}
            </Checkbox>
            <IconButton icon={<DeleteIcon />} size="sm" ml={2} onClick={deleteTodo} />
        </Flex>
    );

}

export default TodoItem;