import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";


export const postRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
    }
  }>();

  //Middleware for auth
  //Here id is extracted from jwt and passed on to the route handlers' authorId
  postRouter.use("/*", (c, next) => {
    next();
  })

  postRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();

    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: '1',
        }
    })

    return c.json({
      id: post.id
    })
  })
  
  postRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = c.req.json();

    const post = await prisma.post.update({
      where: {
        id: body.id
      },
      data: {
        title: body.title,
        content: body.content,
      }
    })
    return c.json({
      id: post.id
    })
  })
  
  postRouter.get('/', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
      const post = await prisma.post.findFirst({
        where: {
          id: body.id
        }
      })
      return c.json({
        post
      })
    } catch(error) {
      c.status(411);
      return c.json({
        message: 'Error while fetching the post'
      });
    }
  })
  // Todo: Add Pagination
  postRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const posts = await prisma.post.findMany();
    return c.json({
      posts
    })
  })