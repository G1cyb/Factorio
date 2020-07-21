import React from 'react';
import { useForm } from "react-hook-form";
import {AddContract} from '../../../Helpers/AddContract.js'

function SiiForm(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => AddContract(data);
  const {useraddress,contractAddress}=props.data
  

return (

  <div >
  
  <form onSubmit={handleSubmit(onSubmit)}>
    <input type="hidden" name="contractAddress" defaultValue={contractAddress} ref={register}/>
    <input type="hidden" name="useraddress" defaultValue={useraddress} ref={register}/>
    <label >Rut Emisor :                                </label>
    <input type="text" id="rut_emisor" name="rut_emisor" ref={register} />-<input type="text" id="rut_emisor_d" name="rut_emisor_d" ref={register} /><br/>
    
    <label>Tipo Documento :                       </label>
    <label>Factura Electrónica</label><br/>
    <input type="hidden" name="tipo_documento" defaultValue="Factura electrónica" ref={register}/>
    
    <label >Folio :                                         </label>
    <input type="text" id="folio" name="folio" ref={register} /><br/>
    
    <label >Fecha Emision :                         </label>
    <input type="text" id="fecha_emision" name="fecha_emision" ref={register}/><br/>
    
    <label >Rut Receptor :                             </label>
    <input type="text" id="rut_receptor" name="rut_receptor"  ref={register}/>-<input type="text" id="rut_receptor_d" name="rut_receptor_d"  ref={register}/>   <br/>  
    
    <label >Razón Social Receptor :             </label>
    <input type="text" id="razon_social_receptor" name="razon_social_receptor" ref={register} /><br/>
    
    <label >Monto Factura :                          </label>
    <input type="text" id="monto_factura" name="monto_factura" ref={register} /><br/>
    
    <h4>Identificacion del Cedente</h4>
    
    <label >Rut Cedente :                                </label>
    <input type="text" id="rut_cedente" name="rut_cedente" ref={register} />-<input type="text" id="rut_cedente_d" name="rut_cedente_d"  ref={register}/><br/>
    
    <label >Razón Social Cedente :                </label>
    <input type="text" id="razon_social_cedente" name="razon_social_cedente"  ref={register}/><br/>
    
    <label >Dirección Cedente :                     </label>
    <input type="text" id="direccion_cedente" name="direccion_cedente"  ref={register}/><br/>
    
    <label >eMail Cedente :                            </label>
    <input type="text" id="email_cedente" name="email_cedente"  ref={register}/><br/>
    
    <label >Rut Autorizado por Cedente :       </label>
    <input type="text" id="rut_autorizado_por_cedente" name="rut_autorizado_por_cedente"  ref={register}/><br/>
  
    <label >Nombre Autorizado por Cedente :</label>
    <input type="text" id="nombre_autorizado_por_cedente" name="nombre_autorizado_por_cedente" ref={register} /><br/>
    
    <h4>Identificacion de la Cesion</h4>
    
    <label >Rut Cesionario :                              </label>
    <input type="text" id="rut_cesionario" name="rut_cesionario" ref={register} />-<input type="text" id="rut_cesionario_d" name="rut_cesionario_d"  ref={register}/><br/>
    
    <label >Razón Social Cesionario :             </label>
    <input type="text" id="razon_social_cesionario" name="razon_social_cesionario" ref={register} /><br/>
    
    <label >Dirección Cesionario :                   </label>
    <input type="text" id="direccion_cesionario" name="direccion_cesionario" ref={register} /><br/>
    
    <label >eMail :                                            </label>
    <input type="text" id="email" name="email" ref={register} /><br/>
    
    <label >Monto Cesion :                               </label>
    <input type="text" id="monto_cesion" name="monto_cesion" ref={register} /><br/>
    
    <label>Fecha ultimo Vencimiento :</label>           
  
    <select name="DOBDay" ref={register}>
    <option>28</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13">13</option>
    <option value="14">14</option>
    <option value="15">15</option>
    <option value="16">16</option>
    <option value="17">17</option>
    <option value="18">18</option>
    <option value="19">19</option>
    <option value="20">20</option>
    <option value="21">21</option>
    <option value="22">22</option>
    <option value="23">23</option>
    <option value="24">24</option>
    <option value="25">25</option>
    <option value="26">26</option>
    <option value="27">27</option>
    <option value="28">28</option>
    <option value="29">29</option>
    <option value="30">30</option>
    <option value="31">31</option>
    </select> / <select name="DOBMonth" ref={register}>
    <option>Octubre</option>
    <option value="Enero">Enero</option>
    <option value="Febrero">Febrero</option>
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
    <option value="Junio">Junio</option>
    <option value="Julio">Julio</option>
    <option value="Agosto">Agosto</option>
    <option value="Septiembre">Septiembre</option>
    <option value="Octubre">Octubre</option>
    <option value="Noviembre">Noviembre</option>
    <option value="Diciembre">Diciembre</option>
    </select> / <select name="DOBYear" ref={register}>
    <option>2016</option>
    <option value="2025">2025</option>
    <option value="2024">2024</option>
    <option value="2023">2023</option>
    <option value="2022">2022</option>
    <option value="2021">2021</option>
    <option value="2020">2020</option>
    <option value="2019">2019</option>
    <option value="2018">2018</option>
    <option value="2017">2017</option>
    <option value="2016">2016</option>
    <option value="2015">2015</option>
    <option value="2014">2014</option>
    <option value="2013">2013</option>
    <option value="2012">2012</option>
    <option value="2011">2011</option>
    <option value="2010">2010</option>
    <option value="2009">2009</option>
    <option value="2008">2008</option>
    <option value="2007">2007</option>
    <option value="2006">2006</option>
    <option value="2005">2005</option>
    <option value="2004">2004</option>
    <option value="2003">2003</option>
    <option value="2002">2002</option>
    <option value="2001">2001</option>
    <option value="2000">2000</option>
    <option value="1999">1999</option>
    <option value="1998">1998</option>
    <option value="1997">1997</option>
    <option value="1996">1996</option>
    <option value="1995">1995</option>
    <option value="1994">1994</option>
    <option value="1993">1993</option>
    <option value="1992">1992</option>
    <option value="1991">1991</option>
    <option value="1990">1990</option>
    <option value="1989">1989</option>
    <option value="1988">1988</option>
    <option value="1987">1987</option>
    <option value="1986">1986</option>
    <option value="1985">1985</option>
    <option value="1984">1984</option>
    <option value="1983">1983</option>
    <option value="1982">1982</option>
    <option value="1981">1981</option>
    <option value="1980">1980</option>
    <option value="1979">1979</option>
    <option value="1978">1978</option>
    <option value="1977">1977</option>
    <option value="1976">1976</option>
    <option value="1975">1975</option>
    <option value="1974">1974</option>
    <option value="1973">1973</option>
    <option value="1972">1972</option>
    <option value="1971">1971</option>
    <option value="1970">1970</option>
    <option value="1969">1969</option>
    <option value="1968">1968</option>
    <option value="1967">1967</option>
    <option value="1966">1966</option>
    <option value="1965">1965</option>
    <option value="1964">1964</option>
    <option value="1963">1963</option>
    <option value="1962">1962</option>
    <option value="1961">1961</option>
    <option value="1960">1960</option>
    <option value="1959">1959</option>
    <option value="1958">1958</option>
    <option value="1957">1957</option>
    <option value="1956">1956</option>
    <option value="1955">1955</option>
    <option value="1954">1954</option>
    <option value="1953">1953</option>
    <option value="1952">1952</option>
    <option value="1951">1951</option>
    <option value="1950">1950</option>
    <option value="1949">1949</option>
    <option value="1948">1948</option>
    <option value="1947">1947</option>
    <option value="1946">1946</option>
    <option value="1945">1945</option>
    <option value="1944">1944</option>
    <option value="1943">1943</option>
    <option value="1942">1942</option>
    <option value="1941">1941</option>
    <option value="1940">1940</option>
    <option value="1939">1939</option>
    <option value="1938">1938</option>
    <option value="1937">1937</option>
    <option value="1936">1936</option>
    <option value="1935">1935</option>
    <option value="1934">1934</option>
    <option value="1933">1933</option>
    <option value="1932">1932</option>
    <option value="1931">1931</option>
    <option value="1930">1930</option>
    </select>
    <br/>
    
    <label>Declaración Jurada :                       </label>
    <label>Si/No</label> <input type="checkbox" id="checkbox" name="declaracio_jurada" ref={register}/>  <input type="button" name="recibo" value="Carga Acuse de Recibo PDF (Opcional)"/> <br/>
    
    <label >Otras Condiciones :                        </label>
    <input type="text" id="otras_condiciones" name="otras_condiciones" ref={register} /><br/>
    
    <label >Nombre Contacto :                         </label>
    <input type="text" id="nombre_contacto" name="nombre_contacto"  ref={register}/><br/>
   
    <label >Fono Contacto :                              </label>
    <input type="text" id="fono_contacto" name="fono_contacto"  ref={register}/><br/>
    
    <label >eMail Contacto :                             </label>
    <input type="text" id="email_contacto" name="email_contacto" ref={register}/><br/>
  
    <label >eMail Deudor :                                </label>
    <input type="text" id="email_deudor" name="email_deudor"  ref={register}/><br/><br/>
  
   <input type="submit" value="Generar Archivo Electrónico de Cesión" ref={register}/> 
  
  </form>
  
  </div>
  );
}

export default SiiForm;

