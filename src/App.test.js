import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('update time according to date select', () => {
  render(<BookingForm />);

  const updatedTimeOptions = screen.getByTestId("updateTime");
    fireEvent.change(updateTime, { target: { value: '20:00' }});
    expect(updatedTimeOptions).toHaveValue('20:00')
})
