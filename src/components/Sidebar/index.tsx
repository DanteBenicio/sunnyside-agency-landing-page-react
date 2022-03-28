import Button from '../Button';
import './styles.scss';

export default function Sidebar() {
  return (
    <aside className="sidebar_container">
      <ul className="sidebar_list">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <Button bgColor="yellow" />
    </aside>
  );
}
