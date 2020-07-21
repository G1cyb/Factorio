import axios from 'axios';

async function AddContract(data){
  let dbdata={}
    const {useraddress,contractAddress,fecha_emision,folio,monto_cesion,monto_factura,rut_cedente,rut_cedente_d,
          rut_cesionario,rut_cesionario_d,rut_emisor,rut_emisor_d,rut_receptor,rut_receptor_d,tipo_documento,razon_social_receptor,
          razon_social_cedente,direccion_cedente,email_cedente,rut_autorizado_por_cedente,nombre_autorizado_por_cedente,
          razon_social_cesionario,direccion_cesionario,email,DOBDay,DOBMonth,DOBYear,declaracion_jurada,otras_condiciones,nombre_contacto,
          fono_contacto,email_contacto,email_deudor}=data

    dbdata.rut_emisor=rut_emisor+rut_emisor_d
    dbdata.tipo_documento= tipo_documento
    dbdata.folio=folio
    dbdata.fecha_emision=fecha_emision
    dbdata.rut_receptor=rut_receptor+rut_receptor_d
    dbdata.razon_social_receptor=razon_social_receptor
    dbdata.monto_factura=monto_factura
    dbdata.rut_cedente=rut_cedente+rut_cedente_d
    dbdata.razon_social_cedente=razon_social_cedente
    dbdata.direccion_cedente=direccion_cedente
    dbdata.email_cedente=email_cedente
    dbdata.rut_autorizado_por_cedente=rut_autorizado_por_cedente
    dbdata.nombre_autorizado_por_cedente=nombre_autorizado_por_cedente
    dbdata.rut_cesionario=rut_cesionario+rut_cesionario_d
    dbdata.razon_social_cesionario=razon_social_cesionario
    dbdata.direccion_cesionario=direccion_cesionario
    dbdata.email=email
    dbdata.monto_cesion=monto_cesion
    dbdata.DOBc=DOBDay+DOBMonth+DOBYear
    dbdata.otras_condiciones=otras_condiciones
    dbdata.nombre_contacto=nombre_contacto
    dbdata.fono_contacto=fono_contacto
    dbdata.email_contacto=email_contacto
    dbdata.email_deudor=email_deudor
    dbdata.contractAddress=contractAddress
    dbdata.useraddress=useraddress

    const api = axios.create({
      baseURL: 'http://localhost:8000/api',
    })
    const state=false
    const status="Created"  
    let username = 'u0xwonud84';
    let password = 'EDlGDS1ixSmcV6UyPYCrm5rLrtP2eznaT9MiH-L3CRs';
    let response=await axios({
        method: 'post',
        url: 'https://u0iy5we3jy-u0n48g3es8-connect.us0-aws.kaleido.io/abis/2362c5b9-44d7-4823-4460-1c1242995c08/'+contractAddress+'/addFactoring?kld-from='+useraddress+'&kld-sync=true',
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        auth:{
          username: username,
          password: password,
        },
        data:{
                "_fechaEmision": parseInt(fecha_emision),
                "_folio": parseInt(folio),
                "_montoCesion": parseInt(monto_cesion),
                "_montoFactura": parseInt(monto_factura),
                "_rutCedente": parseInt(rut_cedente+rut_cedente_d),
                "_rutCesionario": parseInt(rut_cesionario+rut_cesionario_d),
                "_rutEmisor": parseInt(rut_emisor+rut_emisor_d),
                "_rutReceptor": parseInt(rut_receptor+rut_receptor_d),
                "_state": state,
                "_status": status
              }
      });
      console.log(dbdata)
      console.log(await axios({
        method: 'post',
        url: 'http://localhost:8000/api/contract',
        data: dbdata}))
    return response.data
}

export {AddContract}