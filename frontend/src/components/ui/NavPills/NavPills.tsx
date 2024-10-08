import { IconType } from 'react-icons';
import BidButton from '../Buttons/BidButton/BidButton';
import './navpills.css';

type NavPills = {
  text: string;
  icon?: IconType;
};

type Props = {
  navpills: NavPills[];
};

const NavPills = ({ navpills }: Props) => {
  return (
    <ul className='nav nav-pills'>
      {navpills.map((navpill, index) => (
        <li className='nav-item' key={index}>
          <BidButton
            type='button'
            text={navpill.text}
            variant='active'
            size='lg'
          />
        </li>
      ))}
    </ul>
  );
};

export default NavPills;
