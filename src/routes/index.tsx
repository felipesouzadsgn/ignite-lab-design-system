import { Route, Routes } from "react-router-dom"

import { Home } from "../pages/Home"
import { Signin } from "../pages/Signin"
import { Signup } from "../pages/Signup"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  )
}
