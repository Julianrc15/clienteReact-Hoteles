import React from 'react'

const FormReserva = () => {
  return (
    
   

        <div className="row">

            <div className='col-12 col-md-5'>

                <form className='text-white'>
                    <h3>Reservas</h3>
                    <div className='row'>
                       <div className="col-6">
                            <input type="date" class="form-control" placeholder="Entrada"/>   
                        </div> 
                       <div className="col-6">
                            <input type="date" class="form-control" placeholder="Salida"/>   
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div className="col-6">
                                <input type="number" class="form-control" placeholder="Adultos"/>   
                            </div> 
                        <div className="col-6">
                                <input type="number" class="form-control" placeholder="Niños"/>   
                            </div>
                     </div>

                     <div className='row mt-3'>
                        <div className='mb-3'>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Abrir para seleccionar habitación</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                     </div>

                     <div className='row mt-3'>
                        <div className='mb-3'>
                            <button type="button" className="btn btn-danger">Reservar</button>
                        </div>
                     </div>



                    
                </form>


            </div>




        </div>
    
    
    
    
    
    





  )
}

export default FormReserva