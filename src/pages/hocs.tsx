import { useRouter } from "next/router";
import React from "react";
import ListOfComponents from "../components/ListOfComponents";
import StyledButton from "../components/StyledButton";

const hoc = () => {
  const router = useRouter();
  return (
    <div>
      <ListOfComponents>
        <StyledButton onClick={() => router.push("/hoc/counter")}>
          {" "}
          counter{" "}
        </StyledButton>
      </ListOfComponents>
    </div>
  );
};

export default hoc;
