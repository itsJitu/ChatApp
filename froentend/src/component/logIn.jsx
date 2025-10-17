import React from 'react'
import { MdAttachEmail } from "react-icons/md";

function logIn() {
  return (
    <div>
        <div>
            <h1>Log In </h1>
            <div>
                <MdAttachEmail />
                <input type="email"
                placeholder='username'
                required
                 />
            </div>
        </div>
    </div>
  )
}

export default logIn