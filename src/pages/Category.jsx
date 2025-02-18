import { Link } from 'react-router-dom';
import Card from '../components/fragments/Card';
import SectionTitle from '../components/fragments/SectionTitle';

const dummyx = [
  {
    id: 1,
    name: 'Teknologi',
  },
  {
    id: 2,
    name: 'Kedokteran',
  },
  {
    id: 3,
    name: 'Filsafat',
  },
];

function Category() {
  return (
    <SectionTitle>
      <div>
        <h2>Category</h2>
        <div className="flex space-x-5">
          {dummyx.map((item) => (
            <Card key={item.id}>
              <Link>{item.name}</Link>
            </Card>
          ))}
        </div>
      </div>
    </SectionTitle>
  );
}

export default Category;
