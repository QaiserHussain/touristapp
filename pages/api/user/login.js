import {loginUser} from '../../../utils/controllers/users';
const handler = async (req, res) => {
  const {method} = req
  switch (method) {
      case 'POST':
        loginUser(req,res)
      break;
    default:
      res.setHeader('Allow',['GET','POST','PUT','DELETE'])
      res.status(405).send(`Method ${method} Not Allowed`)
      break;
  }
}

// export const config = {
//   api: {
//       bodyParser: {
//           sizeLimit: '8mb'
//       }
//   }
// }
export default handler;