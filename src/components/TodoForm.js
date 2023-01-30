import React, { useState } from "react";
import { Button, FormControl, Input } from "@chakra-ui/react";

function TodoForm({ todoItemList, setTodoItemList }) {
    
    const [todoInputText, setTodoInputText] = useState(" ");

    const handleTodoInputTextChange = (e) => {
        setTodoInputText(e.target.value);
    };

    const addTodoItem = () => {
        if (todoInputText === ""){
            return;
        }
        setTodoItemList([
            ...todoItemList, // ...가 없으면 객체의 주소값을 넘겨 받게 됨. -> 객체의 '값'을 가져오기 위해 사용
            {
                id: new Date().getTime() + Math.random(),
                text: todoInputText,
                isDefaultChecked: false,
            },
        ]);
        setTodoInputText("");
    };

    return (
        <FormControl w="full" p={4} display="flex">
            <Input
                placeholder="할 일을 추가해 보세요"
                mr={4}
                value={todoInputText}
                onChange={handleTodoInputTextChange}
            />
            <Button colorScheme={"blue"} onClick={addTodoItem}>
                추가
            </Button>
        </FormControl>
    );
}


export default TodoForm;