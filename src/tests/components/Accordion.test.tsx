import React from 'react';
import { render } from '@testing-library/react';
import Accordion from '../../components/Accordion';
describe('Counter component', () => {
    it("should render accordian option properly", () => {
      const { getByText } = render(<Accordion title='title of accordian option' children='content of accordian option'/>)
      expect(getByText("title of accordian option")).toBeInTheDocument();
      expect(getByText("content of accordian option")).toBeInTheDocument();
    })
});