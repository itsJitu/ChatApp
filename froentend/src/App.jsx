import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LogIn from "./component/logIn";
import SiginPage from './component/siginPage';
import ChatPage from './component/chatPage';
import First from './component/First';


const router = createBrowserRouter([
  {
    path:'/',
    element: <First />,
    children: [
      {
        index: true,
        element: <LogIn />
      },
      {
        index: "/siginPage",
        element: <SiginPage />
      },
      {
        index: "./chatPage",
        element: <ChatPage /> 
      }
      
    ]
  }
])
function App(){

   
return <RouterProvider router={router} />

}


export default App
