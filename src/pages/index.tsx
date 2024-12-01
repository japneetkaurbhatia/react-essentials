import React from "react";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";
import StyledButton from "../components/StyledButton";
import ListOfComponents from "../components/ListOfComponents";
import store from "./redux/store";

store.subscribe(() => {
  console.log(store.getState());
})

const HomePage = () => {
  const router = useRouter();
  return (
    <div>
      <Helmet>
        <title>React Essentials</title>
      </Helmet>
      <ListOfComponents>
        <StyledButton onClick={() => router.push("/accordian")}>
          {" "}
          Accordian
        </StyledButton>
        <StyledButton onClick={() => router.push("/hooks")}>Hooks</StyledButton>
        <StyledButton onClick={() => router.push("/hocs")}>
          {" "}
          Higher Order Components
        </StyledButton>
        <StyledButton onClick={() => router.push("/react-lifecycle")}>
          React Lifecycle Methods of Components
        </StyledButton>
        <StyledButton onClick={() => router.push("/state-management")}>
          {" "}
          State Management{" "}
        </StyledButton>
        <StyledButton onClick={() => router.push("/lazy-loading")}>
          Lazy Loading and Code Splitting
        </StyledButton>
        <StyledButton onClick={() => router.push("/redux")}>
          Redux
        </StyledButton>
        <StyledButton onClick={() => router.push("/own-react")}>
          Build Your Own React
        </StyledButton>
        <StyledButton onClick={() => router.push("/carousel")}>
          React responsive carousel
        </StyledButton>
        
      </ListOfComponents>
    </div>
  );
};

export default HomePage;
