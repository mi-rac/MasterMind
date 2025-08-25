import { defineEventHandler, readBody } from 'h3'
import jwt from 'jsonwebtoken'
const { sign } = jwt

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event)

  if (username === 'admin' && password === 'secret') {
    const token = sign({ user: { name: username } }, process.env.JWT_SECRET!, { expiresIn: '1h' })
    return { token }
  }
  throw createError({ statusCode: 401, statusMessage: 'Invalid credentials' })
})