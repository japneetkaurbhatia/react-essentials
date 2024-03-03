import { useRouter } from "next/router";
import React from "react";
import ListOfComponents from "../components/ListOfComponents";
import StyledButton from "../components/StyledButton";

const OwnReact = () => {
  const router = useRouter();
  return (
    <div>
      <ListOfComponents>
        <StyledButton onClick={() => router.push("/own-react/createElement")}>
         createElement
        </StyledButton>
      </ListOfComponents>
    </div>
  );
};

export default OwnReact;
