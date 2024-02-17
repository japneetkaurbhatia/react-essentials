import { useRouter } from 'next/router';
import React from 'react'
import ListOfComponents from '../components/ListOfComponents';
import StyledButton from '../components/StyledButton';
import LifecycleA from './react-lifecycle/LifecycleA';

const ReactLifecycle = () => {
    const router = useRouter();
    return (
      <div>
        <LifecycleA />
      </div>
    );
}

export default ReactLifecycle