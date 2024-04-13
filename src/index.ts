import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  }
}>();

app.post('/api/v1/user/signup', async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();

  try {
    await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      }
    });
    return c.text("Signed Up!");
  } catch(error) {
      c.status(411);
      return c.text('Username already exists!')

  }

  return c.text('Hello Hono!')
})

app.post('/api/v1/user/signin', (c) => {
  return c.text('Hello Hono!')
})

app.post('api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.put('api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('Hello Hono!')
})

export default app

// Prisma accelerate url: 