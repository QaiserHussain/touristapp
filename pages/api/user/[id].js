import {getUser,deleteUser,updateUser} from '../../../utils/controllers/users';
const handler = async (req, res) => {
  const {method} = req
  console.log(req);
  switch (method) {
    case 'GET':
        getUser(req,res)
      break;
      case 'DELETE':
        deleteUser(req,res)
      break;
      case 'PUT':
        updateUser(req,res)
      break;
    default:
      res.setHeader('Allow',['GET','POST','PUT','DELETE'])
      res.status(405).send(`Method ${method} Not Allowed`)
      break;
  }
}

export const config = {
  api: {
      bodyParser: {
          sizeLimit: '8mb'
      }
  }
}
export default handler;