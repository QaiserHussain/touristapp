import {createUser} from '../../../utils/controllers/users';
const handler = async (req, res) => {
  const {method} = req
  switch (method) {
    case 'GET':
        getUsers(req,res)
      break;
      case 'POST':
        createUser(req,res)
      break;
    default:
      res.setHeader('Allow',['GET','POST','PUT','DELETE'])
      res.status(405).send(`Method ${method} Not Allowed`)
      break;
  }
  
}

export default handler;