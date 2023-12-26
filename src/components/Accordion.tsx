import Image from 'next/image';
import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const downArrow = "public/assests/down-arrow.svg";
const upArrow = "public/assests/up-arrow.svg";

const AccordionWrapper = styled.div`
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  width: 70vw;
  max-width: 100%;
  margin-top: 5px;
`;

const AccordionHeader = styled.div`
  background-color: #f2f2f2;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccordionContent = styled.div`
`;

const Accordion = ({ title = "title", children = "children"}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
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
        <Image src={isExpanded ? upArrow : downArrow} alt="arrow" width="20" height="20"></Image>
      </AccordionHeader>
      <AccordionContent
        aria-hidden={!isExpanded}
        style={{
            height: !isExpanded ? "0px" : "auto",
            padding: !isExpanded ? "0px" : "10px",
        }}
      >
        {children}
      </AccordionContent>
    </AccordionWrapper>
  );
};

export default Accordion;
