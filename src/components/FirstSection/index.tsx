/* eslint-disable react/jsx-props-no-spreading */
import ContentRow from './ContentRow';
import './styles.scss';
import { firstContentRow, secondContentRow } from './content';
import ImagesRow from './ImagesRow';

export default function FirstSection() {
  return (
    <main>
      <ContentRow {...firstContentRow} />
      <ContentRow {...secondContentRow} rowReverse />
      <ImagesRow />
    </main>
  );
}
