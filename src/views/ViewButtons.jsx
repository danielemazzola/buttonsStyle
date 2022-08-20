import useClient from '../hooks/useClient'
import {
    ButtonConfirm,
    ButtonAdd,
    ButtonCancel,
    ButtonConfirm1,
    ButtonAdd1,
    ButtonCancel1,
    ButtonConfirm2,
    ButtonAdd2,
    ButtonCancel2,
    ButtonConfirmAdvance,
    ButtonAddAdvance,
    ButtonCancelAdvance,
    ButtonConfirmAdvanceColors,
    ButtonAddAdvanceColors,
    ButtonCancelAdvanceColors,
} from '../components/Button'
import Spinner from '../components/Spinner/Spinner'


const ViewButtons = () => {

    const { 
        loading,
        contentCancel,
        contentConfirm,
        contentAdd,
        contentCancel1,
        contentConfirm1,
        contentAdd1,
        contentCancel2,
        contentConfirm2,
        contentAdd2,
        contentCancelAdvance,
        contentConfirmAdvance,
        contentAddAdvance,
        contentCancelAdvanceColors,
        contentConfirmAdvanceColors,
        contentAddAdvanceColors,
    } = useClient()

    console.log(loading)


  return (
    
    <div className="py-5 mt-5">
      <h1 className="text-center text-4xl capitalize my-5">mis botones personalizados con</h1>
      <div className="flex justify-center">
        <button type="button" className="font-bold text-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white px-4 py-3 rounded-lg ease-in-out delay-100 hover:-translate-1 hover:scale-110 duration-300">TailwindCss</button>
      </div>
      <p className="mt-10 py-4 text-center font-bold text-xl w-full bg-gray-100 ">Simples</p>
      { loading ? <Spinner /> : 
        <div className="flex flex-col justify-center my-16">
            <div className="flex justify-center">
                <div className="mx-2">
                    <ButtonConfirm contentConfirm={contentConfirm} />
                </div>
                <div className="mx-2">
                    <ButtonAdd contentAdd={contentAdd} />
                </div>
                <div className="mx-2">
                    <ButtonCancel contentCancel={contentCancel} />
                </div>
            </div>
            <div className="mt-5">
                <div className="flex justify-center">
                    <div className="mx-2">
                        <ButtonConfirm1 contentConfirm1={contentConfirm1} />
                    </div>
                    <div className="mx-2">
                        <ButtonAdd1 contentAdd1={contentAdd1} />
                    </div>
                    <div className="mx-2">
                        <ButtonCancel1 contentCancel1={contentCancel1} />
                    </div>
                </div>
            </div>
            
            <div className="mt-5">
                <div className="flex w-full justify-center absolute">
                    <div className="mx-2">
                        <ButtonConfirm2 contentConfirm2={contentConfirm2} />
                    </div>
                    <div className="mx-2">
                        <ButtonAdd2 contentAdd2={contentAdd2} />
                    </div>
                    <div className="mx-2">
                        <ButtonCancel2 contentCancel2={contentCancel2} />
                    </div>
                </div>
            </div>
        </div>
      }
      <div className="mt-32">
        <p className="py-4 text-center font-bold text-xl w-full bg-gray-100 ">Simples - avanzados</p>
        { loading ? <Spinner /> : 
            <div className="flex justify-center my-16">
                <div className="mx-2">
                    <ButtonConfirmAdvance contentConfirmAdvance={contentConfirmAdvance} />
                </div>
                <div className="mx-2">
                    <ButtonAddAdvance contentAddAdvance={contentAddAdvance} />
                </div>
                <div className="mx-2">
                    <ButtonCancelAdvance contentCancelAdvance={contentCancelAdvance} />
                </div>
            </div>
        }
      </div>
      <div className="">
        <p className="py-4 text-center font-bold text-xl w-full bg-gray-100 ">Simples - avanzados - colores</p>
        { loading ? <Spinner /> : 
            <div className="flex justify-center my-16">
                <div className="mx-2">
                    <ButtonConfirmAdvanceColors contentConfirmAdvanceColors={contentConfirmAdvanceColors} />
                </div>
                <div className="mx-2">
                    <ButtonAddAdvanceColors contentAddAdvanceColors={contentAddAdvanceColors} />
                </div>
                <div className="mx-2">
                    <ButtonCancelAdvanceColors contentCancelAdvanceColors={contentCancelAdvanceColors} />
                </div>
            </div>
        }
      </div>
    </div>
     
  )
}
export default ViewButtons