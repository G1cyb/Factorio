import axios from 'axios';

async function CreateContract(data){
    const {useraddress}=data    
    let username = 'u0xwonud84';
    let password = 'EDlGDS1ixSmcV6UyPYCrm5rLrtP2eznaT9MiH-L3CRs';
    let response=await axios({
        method: 'post',
        url: 'https://u0iy5we3jy-u0n48g3es8-connect.us0-aws.kaleido.io/abis/2362c5b9-44d7-4823-4460-1c1242995c08/?kld-from='+useraddress+'&kld-sync=true',
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        auth:{
          username: username,
          password: password,
        }
      });
    return response.data
}

export {CreateContract}