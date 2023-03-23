import React from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { UseTodo } from "../contexts/TodosContext";
import { Col } from "react-bootstrap";
import styled from "styled-components";

const TodoCard = (props) => {
  const { todo } = props;
  let { getTodosData } = UseTodo(); //has value =todos

  const { id, title, completed } = todo;

  const navigate = useNavigate();

  const deleteTodo = (e, id) => {
    e.preventDefault();
    // 192.168.1.54:8000 IP
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        console.log("deleted", res);
        getTodosData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
            <Col xl={4} onClick={() => navigate(`/todos/${id}`)} >
            <StyledCard className="mt-5">
                <div className="d-flex">
                  <img  style={{width:"10rem", height:"10rem"}} src="https://media.istockphoto.com/id/1219481917/photo/good-job-youre-the-man-well-done-way-to-go-write-on-a-sticky-note-isolated-on-office-desk.jpg?s=612x612&w=0&k=20&c=yBjUbyf72Z81fJYyQzl-2863aLCMxuUKlbi5eUu_Umg=" alt="" />
                    <div className="ml-4 mt-3">
                        <h4 style={{ fontSize: "21px", fontWeight: "600" }}>{`Is todo completed : ${completed}`}{completed}</h4>
                        <div >
                                <p> {title}</p>
                        </div>
                    </div>
                </div>
                <ButtonContainer>
                    <Button className="text-center" style={{ cursor: 'pointer' }}>Delete</Button>
                </ButtonContainer>
            </StyledCard>
        </Col>
        </>
    )
}
const StyledCard = styled.div`
    border-radius: 40px;
    background: #FFFFFF;
    width: auto;
    height: auto;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    p{
        font-size: 15px;
        b{
            color:#d61b1b ;
            color: ${({ theme }) => theme.Tab?.color || '#D61B1B'}
        }
    }
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 1rem;
`
const Button = styled.div`
    border: 1px ;
    width: 125px;
    background: #eef6a596;
    background: ${({ theme }) => theme.Tab?.color + '82'};
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    border-top-left-radius: 37px;
    border-bottom-right-radius: 22  px;
`
export default TodoCard
