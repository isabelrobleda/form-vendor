import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';


function FormVendor() {
  const [state, handleSubmit] = useForm("xleqwbbq");
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages(selectedFiles);
  };

  if (state.succeeded) {
    return <p>Muchas gracias</p>;
}


 

  return (
    <div className="flex flex-col items-center">
      <form className="ml-12 " onSubmit={handleSubmit} action="https://formspree.io/f/xleqwbbq" method="POST" encType="multipart/form-data">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Usuario
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-300 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-200 sm:text-sm">
                      casadetodos.com/
                    </span>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="juanaperez"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="select"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Selecciona el Producto
                </label>
                <div className="mt-2">
                  <select
                    id="product"
                    name="product"
                    autoComplete="product"
                    className="block w-full rounded-md border-0 py-1.5 text-grey-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Sillón</option>
                    <option>Mesa</option>
                    <option>Cama</option>
                  </select>
                </div>
                <br />

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    ¿En qué estado está?
                  </label>
                  <div className="mt-2">
                    <select
                      id="state"
                      name="state"
                      autoComplete="state-product"
                      className="block w-full rounded-md border-0 py-1.5 text-grey-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>
                        Perfecto, nadie sabría que ya tuvo una vida feliz
                      </option>
                      <option>
                        Golpeadón, tiene algunos raspones o marcas de uso
                      </option>
                      <option>
                        Ya vivió mucho y se le nota. Solo necesito sacarlo de mi
                        casa.{" "}
                      </option>
                    </select>
                    <br />
                    <p className="mt-1 text-sm leading-6 text-white">
                      Describe los detalles del estado del producto
                    </p>
                    <textarea
                      id="details-state"
                      name="details-state"
                      rows={3}
                      className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="brand"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Marca
                </label>
                <div className="mt-2">
                  <select
                    id="brand"
                    name="brand"
                    autoComplete="brand"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Ikea</option>
                    <option>Gaia</option>
                    <option>Sin marca</option>
                    <option>Otra</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="usage"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Uso
                </label>
                <div className="mt-2">
                  <select
                    id="usage"
                    name="usage"
                    autoComplete="usage"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Nuevo, no lo he usado</option>
                    <option>1 año</option>
                    <option>2 años</option>
                    <option>3 a 5 años</option>
                    <option>5 a 10 años</option>
                    <option>10 a 20 años</option>
                    <option>Vintage/Segunda Mano</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="brand"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Medidas
                </label>
                <div className="mt-2 ">
                  <p className="mt-1 text-sm leading-6 text-white">Alto</p>
                  <input
                    type="text"
                    id="height"
                    name="height"
                    placeholder="50cm"
                    className="block w-1/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                  />

                  <p className="mt-1 text-sm leading-6 text-white">Ancho</p>
                  <input
                    type="text"
                    id="long"
                    name="long"
                    placeholder="100cm"
                    className="block w-1/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                  />

                  <p className="mt-1 text-sm leading-6 text-white mx-2">
                    Fondo
                  </p>
                  <input
                    type="text"
                    id="width"
                    name="width"
                    placeholder="80cm"
                    className="block w-1/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="brand"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Material
                </label>
                <div className="mt-2">
                  <select
                    id="material"
                    name="material"
                    autoComplete="material"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Tela</option>
                    <option>Madera</option>
                    <option>Marmol</option>
                    <option>Concreto</option>
                    <option>Otro</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Fotos
                </label>
                <div className="mt-2 flex rounded-lg border border-dashed border-gray-200 px-6 py-5">
                  <div className="">
                    <div className=" flex text-sm leading-6 text-white">
                      <label
                        htmlFor="file-upload"
                      >
                        <h3 className="block text-sm font-medium leading-6 text-white">Sube tus fotos</h3>
                        <input type="file" accept="image/*" multiple onChange={handleImageChange} id="images" name="images"/>
                        <br />
                      
                      </label>
                    </div>
                    <p className="text-xs leading-5 text-white">
                      PNG y JPG hasta 10MB. 
                    </p>
                    <p className="text-xs leading-5 text-white">
                      Selecciona todas las fotos a la vez y da click en "abrir"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pb-12">
            <h2 className="text-base font-semibold leading-7 text-white">
              Información para recoger el producto
            </h2>
            <p className="mt-1 text-sm leading-6 text-white">
              Dannos tu dirección lo más exacta posible para que el servicio de
              mensajería.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Estado
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>CDMX</option>
                    <option>Estado de México</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Calle
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Alcaldía/Municipio
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Colonia
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  C.P. Código Postal
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-white">
                  ¿Se tiene que volar?
                </legend>

                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="special-pickup"
                      name="special-pickup"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-orange-300"
                    />
                    <label
                      htmlFor="special-pickup"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Sí
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="special-pickup-no"
                      name="special-pickup-no"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-orange-300"
                    />
                    <label
                      htmlFor="special-pickup"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      No
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>

          <div className="border-b border-gray-300 pb-12">
            <div className="mt-10 space-y-10">
              <div className="border-b border-gray-300 pb-12">
                <h2 className="text-base font-semibold leading-7 text-white">
                  Información de Pago
                </h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    
                    <div className="mt-2">
                        <label
                            htmlFor="payment"
                            className="block text-sm font-medium leading-6 text-white"> Quiero cubrir el envío como incentivo para el comprador</label>
                      <select
                        id="payment"
                        name="payment"
                        autoComplete="payment-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option>100%</option>
                        <option>50%</option>
                        <option>0%</option>
                      </select>
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="bank-details"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Cuenta de Banco (CLABE)
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="bank-details"
                    id="bank-details"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                  />
                </div>
            </div>

            <div className="sm:col-span-2">
                <label
                  htmlFor="signature"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Firma para aceptar Comisiones
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="signature"
                    id="signature"
                    autoComplete="postal-code"
                    placeholder="Firma/Nombre"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                  />
                </div>
            </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6 mb-10">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-white"
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            id="save-button"
          >
            Guardar y Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormVendor;
