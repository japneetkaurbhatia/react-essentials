import { useRouter } from 'next/router';
import React from 'react'
import ListOfComponents from '../components/ListOfComponents';
import StyledButton from '../components/StyledButton';

const hooks = () => {
    const router = useRouter();
    return (
      <div>
        <ListOfComponents>
          <StyledButton onClick={() => router.push("/hooks/useStateHooks")}> useState </StyledButton>
          <StyledButton onClick={() => router.push("/hooks/useEffectHooks")}> useEffect </StyledButton>
          <StyledButton onClick={() => router.push("/hooks/useContextHooks")}> useContext </StyledButton>
          <StyledButton onClick={() => router.push("/hooks/useReducerHooks")}> useReducer </StyledButton>
          <StyledButton onClick={() => router.push("/hooks/useReducerWithUseContext")}> useReducerWithUseContext </StyledButton>
          <StyledButton onClick={() => router.push("/hooks/useMemoHooks")}> useMemo </StyledButton>
          <StyledButton onClick={() => router.push("/hooks/useCallbackHooks")}> useCallback </StyledButton>
          <StyledButton onClick={() => router.push("/hooks/useRefHooks")}> useRef </StyledButton>
        </ListOfComponents>
      </div>
    );
}

export default hooks