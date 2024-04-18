import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signinInput, signupInput } from "@rathoretaruncodes/nexus-common"

export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
    }
  }>();

userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json();

    const { success } = signupInput.safeParse(body);
    if(!success) {
      c.status(411);
      return c.json({
        message: "Inputs are incorrect"
      })
    }

    try {
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
          name: body.name,
        }
      })
      const jwt = await sign({
        id: user.id
      }, c.env.JWT_SECRET);
  
      return c.json({
        jwt
      });
    } catch(error) {
        c.status(411);
        return c.text('Signup failed!')
    }
  })
  
  userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json();

    const { success } = signinInput.safeParse(body);
    if(!success) {
      c.status(411);
      return c.json({
        message: "Inputs are incorrect"
      })
    }

    try {
      const user = await prisma.user.findFirst({
        where: {
          email: body.email,
          password: body.password,
        }
      })
      if(!user) {
        c.status(403);
        return c.text("User with the mentioned credentials does not exist! Try Signing Up")
      } 
      const jwt = await sign({
        id: user.id
      }, c.env.JWT_SECRET)
      return c.json({
        jwt
      })
    } catch(error) {
      c.status(411)
      return c.text('Invalid');
    }
    
  })