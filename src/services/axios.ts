import axios from "axios";
import { ReactNode, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Dados {
  id_car?: string;
  name_car?: string;
  brand?: string;
  year_of_manufacture?: number;
  description?: string;
  name?: string;
  email?: string;
  phone?: string;
}

/* 
export const api = axios.create({
  baseURL: "https://sheet.best/api/sheets/1a2e579f-7add-4dce-862b-f23e5f0921e5",
});
 */
export const save = (data: Dados) => {
  const config = {
    method: "POST",
    url: "https://sheet.best/api/sheets/1a2e579f-7add-4dce-862b-f23e5f0921e5", //minha

    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };
  axios(config)
    .then((r) => {
      console.log("dados da planilha", r);
    })

    .catch((error) => {
      // Errors are reported there
      console.log(error);
    });
};


//id_car: string, data:Dados
export async function update(id_car: string,data: Dados) {
/*  let resr: any = []
    await fetch("https://sheet.best/api/sheets/2fa96ecf-7ae2-47d2-b54c-dea06e847bc7")
    .then((response) => response.json())
    .then((data) => {
      console.log("aquiii",data);
    resr = data.json();
    console.log("dado do estado" , resr); 


    
    })
    .catch((error) => {
      console.error(error);
    });
 */
    //aqui
  /*   return true
 
   const carIndex = dados.findIndex((car) => car.id_car === id_car);

  if (carIndex < 0) {
    return false;
  }

  dados[carIndex] = data;
  console.log("aquiii fora" , data); 
  */
  const config = {
    method: "PUT",
    url:`https://sheet.best/api/sheets/2fa96ecf-7ae2-47d2-b54c-dea06e847bc7/id_car/${id_car}`,
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
   data,
  };
  console.log("dentro da fet" , data); 
  
  axios(config)
  .then((r) => {
    console.log("dados da planilha", r);
  })

  .catch((error) => {
    // Errors are reported there
    console.log(error);
  }); 
  return true
}

/* export async function deleteCar(id_car: string) {
  try {
    const response = await api.delete(`deleteCar/${id_car}`);
    return true;
  } catch (err) {
    throw console.log(err);
  }
} */
