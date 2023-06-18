import React from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import 'animate.css'
import { number } from 'prop-types'

/* 
  Shows a popup that explains why we need the information that is being collected.
  Should be a container that shades the background up and highlights the middle and has text. If person 
  clicks outside, it returns to the main form site.
*/
// const popupExplanation = () => {

// }

const onboarding = () => {
  // For all the form inputs that we need to collect. This will be stored as part of the user onboarding data.
  const [form, setForm] = useState({
    plan: '',
    workType: [''],
    computerCost: -1,
    upgradeFrequency: -1
  });

  // For the user warnings when the form is submitted
  const [warning, setWarning] = useState('')

  // Updates the form data everytime the user changes the fields
  const onChange = (event: any) => {
    const { value, name, type, checked } = event.target;

    if (type == 'checkbox' && name == 'workType') {
      checked ? form.workType.push(value) : form.workType.splice(form.workType.indexOf(value), 1)
    }

    setForm((state) => ({
      ...state,
      [name]: type === 'checkbox' ? state.workType : value
    }))
  }

  function verifyForm() {

    if (form.plan == '') {
      return 2;
    }
    else if (form.workType.length < 1) {
      return 1;
    }
    else if (form.computerCost < 0) {
      return 3;
    }
    else if (form.upgradeFrequency < 0) {
      return 4;
    }
    else return 0;
  }

  function notifyUser(message: string) {
    setWarning('*' + message + '*')
  }

  // Handles the submission logic
  const handleSubmit = (event: any) => {
    event.preventDefault();

    // removes the initial empty string to initialize the array
    form.workType.splice(form.workType.indexOf(''), 1)

    // verify the form to make sure all the inputs are correct. If they are not, the submission will
    // be halted and the input areas that are incorrect will be highlighted, notifying the user
    // about what went wrong.
    const formVerification = verifyForm()

    switch (formVerification) {
      case 0:
        // Form is good, submit the user data to database and redirect user to the dashboard
        window.location.assign('/dashboard')
        break
      case 1:
        notifyUser('Please choose type(s) of work you plan to do with Solis')
        break
      case 2:
        notifyUser('Please select how you plan to use Solis')
        break
      case 3:
        notifyUser('Please enter a valid value (> $0) for the computer cost')
        break
      case 4:
        notifyUser('Please enter a value valye (> 0 years) for the upgrade frequency')
        break
    }

    console.log("Form: ", form)
  }

  return (
    <section className='h-screen bg-[#252325] justify-center'>
      <div className='flex flex-col h-screen justify-center items-center mx-auto my-auto'>
        <div className='animate__animated animate__fadeIn text-white text-3xl flex flex-row mb-8 max-w-2xl justify-center text-center font-serif'>
          Before we start, we need some information to configure your experience...
          {/* <span 
          className='flex flex-col justify-center hover:cursor-pointer hover:brightness-110 transition ease-in-out'
          onClick={popupExplanation}
        >
          <svg className="h-10 w-10" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm2-13c0 .28-.21.8-.42 1L10 9.58c-.57.58-1 1.6-1 2.42v1h2v-1c0-.29.21-.8.42-1L13 9.42c.57-.58 1-1.6 1-2.42a4 4 0 1 0-8 0h2a2 2 0 1 1 4 0zm-3 8v2h2v-2H9z" fill="#f5911e" ></path></svg>
        </span> */}
        </div>
        <div className='animate__animated animate__fadeInUp animate__delay-1s bg-white shadow shadow-white px-14 py-8 rounded-lg'>
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <h1 className='text-xl'> What do you plan on using Solis for?</h1>
              <ul className='flex flex-row space-x-4 text-lg'>
                <li>
                  <label>
                    <input onChange={onChange} type='radio' value='Personal' name='plan' checked={form.plan === 'Personal'} />
                    Personal
                  </label>
                </li>
                <li>
                  <label>
                    <input onChange={onChange} type='radio' value='School' name='plan' checked={form.plan === 'School'} />
                    School
                  </label>
                </li>
                <li>
                  <label>
                    <input onChange={onChange} type='radio' value='Freelance' name='plan' checked={form.plan === 'Freelance'} />
                    Freelance
                  </label>
                </li>
                <li>
                  <label>
                    <input onChange={onChange} type='radio' value='Enterprise' name='plan' checked={form.plan === 'Enterprise'} />
                    Enterprise
                  </label>
                </li>
              </ul>
            </div>

            <div className='mb-8'>
              <h1 className='text-xl mb-2'> What kind of work do you want to do on Solis? </h1>
              <ul className='text-lg gap-y-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                <li>
                  <label>
                    <input onChange={onChange} type='checkbox' value='photo editing' name='workType' />
                    Photo Editing
                  </label>
                </li>
                <li>
                  <label>
                    <input onChange={onChange} type='checkbox' value='video editing' name='workType' />
                    Video Editing
                  </label>
                </li>
                <li>
                  <label>
                    <input onChange={onChange} type='checkbox' value='engineering' name='workType' />
                    Engineering/3D Rendering
                  </label>
                </li>
                <li>
                  <label>
                    <input onChange={onChange} type='checkbox' value='animation' name='workType' />
                    Animation
                  </label>
                </li>
                <li>
                  <label>
                    <input onChange={onChange} type='checkbox' value='machine learning' name='workType' />
                    Machine Learning
                  </label>
                </li>
                <li>
                  <label>
                    <input onChange={onChange} type='checkbox' value='other' name='workType' />
                    Other
                  </label>
                </li>
              </ul>
            </div>

            <div className='mb-8'>
              <h1 className='text-xl'>
                How much did you spend on your current computer?
                <div className='text-lg'>
                  $
                  <input onChange={onChange} type='number' name='computerCost' className='border ml-2 rounded text-lg px-2' />
                </div>
              </h1>

            </div>

            <div className='mb-8'>
              <h1 className='text-xl'>
                How often do you upgrade your computer (years)?
              </h1>
              <input onChange={onChange} type='number' name='upgradeFrequency' className='border rounded text-lg px-2' />
            </div>
          </form>
          <label className='text-red-400 text-md mx-auto flex flex-row justify-center'> {warning} </label>
          <button
            className='flex px-4 py-2 hover:shadow-lg transition ease-in-out bg-orange-500 text-lg text-gray-100 mx-auto font-semibold rounded-md'
            onClick={handleSubmit}
          >
            Enjoy the free demo
          </button>
        </div>
      </div>
    </section>
  )
}

export default onboarding