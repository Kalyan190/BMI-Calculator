import React, { useMemo, useState } from 'react'

function App() {

  const [weight, setweight] = useState(70);
  const [height, setheight] = useState(180);

  const onWeightChange = (event) => {
    setweight(event.target.value)
  }
  const onHeightChange = (event) => {
    setheight(event.target.value)
  }
  const BmiOutput = useMemo(() => {
    const calculateHeight = height / 100;
    return (weight / (calculateHeight * calculateHeight)).toFixed(1)
  }, [weight, height])


  return (
    <>
      <main className='w-full min-h-screen p-3 flex justify-center text-xl'>
        <div className='min-w-72 h-full p-4 flex flex-col justify-center items-center text-left bg-slate-400 text-xl mt-20 rounded-md shadow-xl hover:text-white sm:w-96 md:bg-orange-500 md:w-2/5'>

          <h1 className='font-bold mb-3'>BMI Calculator</h1>
          <div className='mt-4'>
            <p className='text-xl'>
              Weight: {weight} Kg
            </p>
            <input type='range' step={1} min={40} max={200} onChange={onWeightChange} className='w-48 cursor-pointer'></input>

            <p className='text-xl '>
              Height: {height} cm
            </p>
            <input type='range' step={1} min={140} max={220} onChange={onHeightChange} className='w-48 cursor-pointer'></input>
          </div>
          <div className='mt-4 flex flex-col items-center'>
            <p className='font-medium'>Your BMI</p>
            <p className='max-w-full bg-slate-500 text-white px-4 rounded-md mt-2'>{BmiOutput}</p>
          </div>
        </div>

      </main>

    </>
  )
}

export default App
