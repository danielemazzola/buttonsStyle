import { createContext, useEffect, useState } from 'react'

const ClientContext = createContext()

const ClientProvider = ({children}) => {
  const [loading, setLoading] = useState(true)
  const [contentCancel, setContentCance] = useState({})
  const [contentConfirm, setContentConfirm] = useState({})
  const [contentAdd, setContentAdd] = useState({})
  const [contentCancel2, setContentCance2] = useState({})
  const [contentConfirm2, setContentConfirm2] = useState({})
  const [contentAdd2, setContentAdd2] = useState({})
  const [contentCancelAdvance, setContentCanceAdvance] = useState({})
  const [contentConfirmAdvance, setContentConfirmAdvance] = useState({})
  const [contentAddAdvance, setContentAddAdvance] = useState({})
  const [contentCancelAdvanceColors, setContentCanceAdvanceColors] = useState({})
  const [contentConfirmAdvanceColors, setContentConfirmAdvanceColors] = useState({})
  const [contentAddAdvanceColors, setContentAddAdvanceColors] = useState({})
  
  
  useEffect(() => {
    setLoading(true)
    setInterval(() => {
      const functionButtons = () => {
        // SIMPLES
      setContentCance({
        'value': 'cancelar',
        'className': 'cursor-pointer bg-rose-500 text-center shadow-lg shadow-rose-100 px-4 py-3 text-white rounded-lg font-bold capitalize hover:shadow-none hover:bg-rose-600 transition-colors'
      })
      setContentConfirm({
        'value': 'Confirmar',
        'className': 'cursor-pointer bg-sky-500 text-center shadow-lg shadow-sky-100 px-4 py-3 text-white rounded-lg font-bold capitalize hover:shadow-none hover:bg-sky-600 transition-colors'
      })
      setContentAdd({
        'value': 'Agregar',
        'className': 'cursor-pointer bg-lime-500 text-center shadow-lg shadow-lime-100 px-4 py-3 text-white rounded-lg font-bold capitalize hover:shadow-none hover:bg-lime-600 transition-colors'
      })
  
      setContentCance2({
        'value': 'cancelar',
        'className': 'cursor-pointer border-t-8 bg-rose-500 text-center px-4 py-3 text-white rounded-lg rounded-t-none border-gray-300 font-bold capitalize hover:shadow-none hover:bg-rose-600 hover:py-6 transition-all'
      })
      setContentConfirm2({
        'value': 'Confirmar',
        'className': 'cursor-pointer border-t-8 bg-sky-500 text-center px-4 py-3 text-white rounded-lg rounded-t-none border-gray-300 font-bold capitalize hover:shadow-none hover:bg-sky-600 hover:py-6 transition-all'
      })
      setContentAdd2({
        'value': 'Agregar',
        'className': 'cursor-pointer border-t-8 bg-lime-500 text-center px-4 py-3 text-white rounded-lg rounded-t-none border-gray-300 font-bold capitalize hover:shadow-none hover:bg-lime-600 hover:py-6 transition-all'
      })
      // FIN SIMPLES
  
      // SIMPLES-ADVANCES
      setContentCanceAdvance({
        'value': 'cancelar',
        'className': 'cursor-pointer bg-rose-500 text-center px-4 py-3 text-white rounded-lg font-bold capitalize hover:bg-rose-600 transition-colors transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
      })
      setContentConfirmAdvance({
        'value': 'Confirmar',
        'className': 'cursor-pointer bg-sky-500 text-center px-4 py-3 text-white rounded-lg font-bold capitalize hover:bg-sky-600 transition-colors transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
      })
      setContentAddAdvance({
        'value': 'Agregar',
        'className': 'cursor-pointer bg-lime-500 text-center px-4 py-3 text-white rounded-lg font-bold capitalize hover:bg-lime-600 transition-colors transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
      })
      // FINSIMPLES-ADVANCES
  
      // SIMPLES-ADVANCES-COLORS
      setContentCanceAdvanceColors({
        'value': 'cancelar',
        'className': 'cursor-pointer bg-rose-500 text-center px-4 py-3 text-white rounded-lg font-bold capitalize hover:bg-amber-500 transition-colors transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300'
      })
      setContentConfirmAdvanceColors({
        'value': 'Confirmar',
        'className': 'cursor-pointer bg-sky-500 text-center px-4 py-3 text-white rounded-lg font-bold capitalize hover:bg-purple-500 transition-colors transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300'
      })
      setContentAddAdvanceColors({
        'value': 'Agregar',
        'className': 'cursor-pointer bg-lime-500 text-center px-4 py-3 text-white rounded-lg font-bold capitalize hover:bg-teal-400 transition-colors transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300'
      })
      // FINSIMPLES-ADVANCES-COLORS
    }
    functionButtons()
    
    setLoading(false)
    
    },2000)
      
    
  }, [])


return (
  <ClientContext.Provider
    value={{
      loading,
      contentCancel,
      contentConfirm,
      contentAdd,
      contentCancel2,
      contentConfirm2,
      contentAdd2,
      contentCancelAdvance,
      contentConfirmAdvance,
      contentAddAdvance,
      contentCancelAdvanceColors,
      contentConfirmAdvanceColors,
      contentAddAdvanceColors,

    }}
  >
    {children}
  </ClientContext.Provider>
)
}

export { ClientProvider }
export default ClientContext