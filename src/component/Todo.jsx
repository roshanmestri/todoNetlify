import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Col } from "react-bootstrap";
import styled from "styled-components";
const Todo = () => {
  const { id } = useParams();
  const [TodoDetails, SetTodoDetails] = useState({});

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {
      const responseTodo = res.data;
      SetTodoDetails(responseTodo);
    });
  }, []);

  console.log(TodoDetails, "hellooo ");
  const { userId, title, completed } = TodoDetails?.todoss
    ? TodoDetails?.todoss
    : TodoDetails;
  console.log(title);
    return (
        <Col xl={12}>
            <StyledCard className="mt-5">
                <div >
                  <img  style={{width:"10rem", height:"10rem"}} src="https://media.istockphoto.com/id/1219481917/photo/good-job-youre-the-man-well-done-way-to-go-write-on-a-sticky-note-isolated-on-office-desk.jpg?s=612x612&w=0&k=20&c=yBjUbyf72Z81fJYyQzl-2863aLCMxuUKlbi5eUu_Umg=" alt="" />
                    <div className="ml-4 mt-3">
                        <h4 style={{ fontSize: "21px", fontWeight: "600" }}>Title: {title}</h4>
                        <div >
                                <p>{`Is todo completed : ${completed}`}</p>
                        </div>
                    </div>
                </div>
                <ButtonContainer>
                    <Button className="text-center" style={{ cursor: 'pointer' }}>Todo Completed</Button>
                </ButtonContainer>
            </StyledCard>
        </Col>
    )
}
const StyledCard = styled.div`
    border-radius: 40px;
    background: #FFFFFF;
    width: 44%;
    margin-left:25%;
    margin-top:10%;
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
export default Todo
