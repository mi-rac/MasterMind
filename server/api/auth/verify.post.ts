import { defineEventHandler, readBody } from 'h3'
import jwt from 'jsonwebtoken'
const { verify } = jwt

export default defineEventHandler(async (event) => {
  const { token } = await readBody(event)
  try {
    const data = verify(token, process.env.JWT_SECRET!)
    return { valid: true, data }
  } catch {
    return { valid: false }
  }
})