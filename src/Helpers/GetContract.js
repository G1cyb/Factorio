import axios from 'axios';

async function GetContract(){
    const useraddress = "0x56ef56BD189754C28BB94d7B66Ee0027A42357e5"
    let username = 'u0xwonud84';
    let contractAddress = '0x287bb2c201a345a2b9a910c9ac867f67fef007d7'
    let password = 'EDlGDS1ixSmcV6UyPYCrm5rLrtP2eznaT9MiH-L3CRs';
    let response=await axios({
        method: 'post',
        url: 'https://u0iy5we3jy-u0n48g3es8-connect.us0-aws.kaleido.io/abis/2362c5b9-44d7-4823-4460-1c1242995c08/'+contractAddress+'/getFactoring?kld-from='+useraddress+'&kld-sync=true',
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        auth:{
          username: username,
          password: password,
        }
      });
    console.log(response)
    return response.data
}

export {GetContract} 