import React from 'react';
import styled from 'styled-components';
import {Text} from 'react-native';

const ToDoList = ({task}) => {
  return <TextContent>{task}</TextContent>;
};
export default ToDoList;

const TextContent = styled.Text`
  margin-top: 10px;
  color: #000;
  font-size: 24px;
  display: flex;
`;
