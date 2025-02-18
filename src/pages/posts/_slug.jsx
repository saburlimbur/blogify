import { useParams } from 'react-router-dom';
import SectionTitle from '../../components/fragments/SectionTitle';

function DetailPostArticle() {
  const { slug } = useParams();
  return (
    <SectionTitle>
      <div>
        <h2>{slug}</h2>
      </div>
    </SectionTitle>
  );
}

export default DetailPostArticle;
