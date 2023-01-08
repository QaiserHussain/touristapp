import {createHouse,getAllHouse} from '../../../utils/controllers/houses';

const handler = async (req, res) => {
  const {method} = req;
  const {detailId} = req.query;
  switch (method) {
    case 'GET':
        getAllHouse(req,res)
      break;
      case 'POST':
        createHouse(req,res)
      break;
    default:
      res.setHeader('Allow',['GET','POST','PUT','DELETE'])
      res.status(405).send(`Method ${method} Not Allowed`)
      break;
  }
  
}

export default handler;
