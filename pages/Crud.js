import { useEffect, useState } from 'react'
import Api from '../service/Api'


const Crud = () => {

  const initialState = {
    user: []
  }

  const [data, setData] = useState(initialState.user)


  useEffect(() => {
    const fetchData = async () => {
      const result = await

        Api
          .get(
            '/user',
          );


      setData(result.data);

    };

    fetchData();
  }, []);

  function clear() {
    setUser({ user: initialState.user })

  }


  function rendeRows() {
    // return console.log(data.user)
    return data.map(i => (
      <li>
        {
          <a>{i.name}</a>
        }


      </li> 
             ))
  }


  return (
    <div>
      {rendeRows()}
    </div>
  )

}

export default Crud