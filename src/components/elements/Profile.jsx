import toast from 'react-hot-toast';
import Card from '../fragments/Card';

function Profile() {
  const { result } = JSON.parse(localStorage.getItem('sessionuser'));
  const { username, position } = result?.user || {};

  const notify = () => toast.success(`Hello, ${username}`);

  const randomId = Math.floor(Math.random() * 1) + 1;

  return (
    <Card className="flex items-center gap-2 cursor-pointer" onClick={notify}>
      <Card.Image
        src={`https://randomuser.me/api/portraits/men/${randomId}.jpg`}
        className="w-10 h-10 rounded-full object-cover"
      />
      <Card.Header className="flex flex-col">
        <h5 className="text-sm text-white">{username}</h5>
        <p className="text-xs text-gray-400 font-medium">{position}</p>
      </Card.Header>
    </Card>
  );
}

export default Profile;
