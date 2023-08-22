import Footer from "@/app/components/Footer";
import SucursalEstudios from "@/app/components/SucursalEstudios";

async function getSucursal(id) {
   const url = 'http://localhost:5008/sucursal/obtenerSucursal ';
   var jsonsucursal = {};
   jsonsucursal.sucursal = id;
   const jsonData = JSON.stringify(jsonsucursal);
   
   const sendData = await fetch(url, {
    cache: 'no-store',
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: jsonData,
   }).then((response) => response.json());
 
   return sendData;
} 

async function page({params}) {
  const data = await getSucursal(params.id)
  
  return (
    <div className='titulo-pagina'>
        <h1 className='titulo-page'>Sucursal {params.id}</h1>
        <SucursalEstudios Sucursalestudios={data}/>
    </div>
  )
}

export default page