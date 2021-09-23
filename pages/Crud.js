import { useEffect, useState } from 'react'
import Api from '../service/Api'


const Crud = ()=>{
    
    const initialState = {
        user: { name: 'Fa', email: 'Fa' , telefone: '', tipo: ''},
    }

    const [state, setUser] = useState(initialState)
    const [data, setData] = useState()


    useEffect(() => {
        const fetchData = async () => {
        const result = await 
        
        Api 
          .get(
            '/contatos',
          );
     
          setData(result.data);
          console.log()
        };
     
        fetchData();
      }, []);

    function clear() {
        setUser({user: initialState.user })
        
    }   



    return(
      <div>
          {state.user.name}
      </div>
    )

}

export default Crud