import { Link } from 'react-router-dom';
// import AD1 from '../../images/AD1.jpeg';
import AD1 from '../../images/tiredocto.gif';
import AD2 from '../../images/hansung.jpg';
import AD3 from '../../images/AD3.jpeg';

export default function SidebarRight() {
  return (
    <div className="flex-col px-3 py-6 text-right text-xxs">
      <a href="/">
        <img src={AD3} alt="AD3" />
        <span className="text-xxs text-buttonPrimary">Report this ad</span>
      
      </a>
      <a href="/">
        <img src={AD1} alt="AD1" />
        </a>
    </div>
  );
}