import { ButtonProps } from '../../types/button';
import './styles.scss';

export default function Button({ bgColor }: ButtonProps) {
  return (
    <button
      type="button"
      id="contact_button"
      className={bgColor === 'white' ? bgColor : 'yellow'}
    >
      Contact
    </button>
  );
}
