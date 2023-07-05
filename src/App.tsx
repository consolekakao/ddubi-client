import { styled } from "styled-components";
import "./App.css";

const Container = styled.div`
  background-color: #fff;
  width: auto;
  height: 80vh;
  margin: 100px 30px;
  border-radius: 60px;
  padding: 32px;
  box-sizing: border-box;
`;

const Sidebar = styled.div`
  background-color: #f6faff;
  border-radius: 20px;
  padding: 20px;
  width: 200px;
  height: 100%;
  box-sizing: border-box;
`;

function App() {
  return (
    <Container>
      <Sidebar>aaa</Sidebar>
    </Container>
  );
}

export default App;
