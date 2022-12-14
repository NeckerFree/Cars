import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import AllCars from '../components/car/AllCars';

const Container = () => {
  <BrowserRouter>
    <AllCars />
  </BrowserRouter>;
};

it('renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
