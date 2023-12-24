import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const AccordionWrapper = styled.div`
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  width: 300px;
  max-width: 100%;
`;

const AccordionHeader = styled.div`
  background-color: #f2f2f2;
  padding: 10px;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccordionContent = styled.div`
  padding: 10px;
`;

const Icon = styled.span`
  font-size: 18px;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.isExpanded ? 'rotate(90deg)' : 'rotate(0)')};
`;

interface AccordionProps {
    isExpanded?: boolean,
    tabIndex?: string,
    contentRef?: () => {},
    title?: string,
    children?: string
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef();

    const toggleAccordion = () => {
        setIsExpanded((prev) => !prev);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            toggleAccordion();
        }
    };

    return (
        <AccordionWrapper>
            <AccordionHeader
                role="button"
                aria-expanded={isExpanded}
                onClick={toggleAccordion}
                onKeyPress={handleKeyPress}
            >
                {title}
                {/* <Icon isExpanded={isExpanded}>▶</Icon> */}
            </AccordionHeader>
            <AccordionContent
                ref={contentRef}
                aria-hidden={!isExpanded}
                // style={{ maxHeight: isExpanded ? contentRef.current.scrollHeight + 'px' : '0' }}
            >
                {children}
            </AccordionContent>
        </AccordionWrapper>
    );
};

export default Accordion;
