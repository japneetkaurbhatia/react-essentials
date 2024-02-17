import { useRouter } from "next/router";
import React from "react";
import ListOfComponents from "../components/ListOfComponents";
import StyledButton from "../components/StyledButton";

const stateManagement = () => {
  const router = useRouter();
  return (
    <div>
      <ListOfComponents>
        <StyledButton
          onClick={() => router.push("/state-management/stateVsProps")}
        >
          {" "}
          state vs props{" "}
        </StyledButton>
      </ListOfComponents>
    </div>
  );
};

export default stateManagement;
