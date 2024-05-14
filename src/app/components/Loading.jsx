import { ring2 } from 'ldrs'

export const Loading = () => {

  ring2.register()

  return (
    <div className='container-loader'>
      <l-ring-2
        size="40"
        stroke="5"
        stroke-length="0.25"
        bg-opacity="0.1"
        speed="0.8" 
        color="black" 
      ></l-ring-2>
    </div>

  )
}
