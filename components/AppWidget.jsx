import React from 'react'

const AppWidget = () => {
  return (
    <div className="flex h-28 w-28 container hover:cursor-pointer">
      <div className>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEUBHjYxqP8ZXY8uofM0sf8AAw8VW48AAAAzrv8AABUAFCYfeboAFy0BHTQeb6sUQV8AEygyq/8voe8hebUJN1oCIz0cYpYAGi8rmOcjf8Q0s/8XXI0edbMcbqYIKkU3uP8JN1kADR8HMFAunukSRm8pktgaZZ4TUYAACxsQQ2snjNcniMsHGCMJHi4PN1Qtne4ABx4LJjoMLUbm3scfAAAC/0lEQVR4nO3c63KaQBiAYQwiq4JlrSeiMcUajKaNTe//4mqcxgOsGUmB7W7e568zn/vOopkwi44DAAAAAAAAAAAAAAAAAAAAAAAAADBCqKB7TaUKx5YnjofTWVb3bh7oXld5vGm/KbLub9q611Ue78Zt5DTtL2xRaBAKzUeh+Sg0H4Xmo9B8FJqPQvNRaL7aC8Oo7b+KKnuHjDILgygjyN6VjHzfGazS3qzbG9R1O6/EwmAxOPNtsEhOE0PPX7S6m+/93TtKeefUdFO2vMJk+dDP2KYnu+glq7jvSin3byG+Do0rfFxOZGaObCzersXAX2/kyesmFkaDh2xhQ3Q7+47QG3fl2asmFgbzp1yhnPx47QjaK1dk2g0sDIdPIjdJ/Nx1dF5mIhu/KxyXX6NSYmEY5/aw0ZwHYfS8uc2nm7iHwUwxadWJltv83hpZ6EQ9RcjIb7n5rTWzMExUhemyoQo0stBRFcp4qww08pvGaaeqFHWgmXvYThWjLjFyD70RhZ+t0LzPIXv4yQqbdl6l8kC4o9xNnIrUVrjLct3NbDT4tb/V5nulp1xaVi2FsiG3m976NSyq6eN3XFYNhXKXly58P9Fy5LGGQrmNV5367gDnllV5oXyYdjyNB1YrL5Txwtd6ILfqQrl5TEpfdLFlVVwoZn7pay64rKoLuxRWjcIioyjUg8IioyjUg8IioyjUg8IioyjUg8IioyjUg8IioyjUg8IioyjUg8IioyjU40Khp/xRl/d/BcWsQj+4VnR4bsKkQhH3rrd420aTCotort820dZCMbC8ULpDy6/Sv09U7EfZWSieEtsL08MxEksLm9PA8j1srI38i3896c5tL5y8HE7i2Vko4tD2wt7xvws7C2Xr5EFfKwtPvkrtLJTb5+O5UTsLN7+Ph5r/38ILT5ddQ8TDs6s0P0p/YbKc3H6cGJ3cqOmsVaPS2g7lXxA6z1/+weljIepRdT04clkYdD7u/NEC5SjtgQAAAAAAAAAAAAAAAAAAAAAAAAAAvOMPwh9ih25/1Z8AAAAASUVORK5CYII="
          className="object-cover shadow-lg rounded-xl border-black-500"
        />
      </div>
    </div>
  )
}

export default AppWidget