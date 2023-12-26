import React from 'react'
import Accordion from '../components/Accordion';

const accordian = () => {
  const accordionSections = [
    ['Section 1 Heading', 'Section 1 Content Section 1 Content Section 1 Content Section 1 Content'],
    ['Section 2 Heading', 'Section 2 Content'],
    ['Section 3 Heading', 'Section 3 Content'],
  ];

  return <div>
    {accordionSections.map(([title, children]) => (
      <Accordion key={title} title={title}>
        {children}
      </Accordion>
    ))}
  </div>
}

export default accordian