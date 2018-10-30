import React from 'react';
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'
import NotFoundPage from '../../src/components/NotFoundPage'

test('should render NotFoundPage Correctly', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot()
})