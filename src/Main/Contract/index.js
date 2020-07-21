import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import {CreateContract} from '../../Helpers/CreateContract.js'
import SiiForm from '../Forms/SiiForm/'

function Contract() {
    const [useraddress]=useState('')
    const [show,setShow]=useState(false)
    const [contractData,setContractData]=useState([])

    const { register, handleSubmit, errors } = useForm();
    
    function create(data){
      let contractResponse= CreateContract(data)
      contractResponse.then(function(result) {
        result.useraddress=data.useraddress
        setContractData(result)
        setShow(true)
     })
    }
    const onSubmit = data => create(data);

return (
    <div className="App">
      <p>Direccion de usuario: {useraddress}</p>
    {show?<SiiForm data={contractData}/>:
    (<form onSubmit={handleSubmit(onSubmit)}>
    <input name="useraddress" defaultValue="0x56ef56BD189754C28BB94d7B66Ee0027A42357e5" ref={register({ required: true })} />
    {errors.useraddress && <span>This field is required</span>}
    <input type="submit" />
  </form>)}
    </div>
  );
}


export default Contract;


