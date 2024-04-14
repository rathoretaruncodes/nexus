import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createPostInput, updatePostInput } from "@rathoretaruncodes/nexus-common";
import { Hono } from "hono";
import { verify } from "hono/jwt";


export const postRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
    },
    Variables: {
      userId: string;
    }
  }>();

  //Middleware for auth
  //Here id is extracted from jwt and passed on to the route handlers' authorId
  postRouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("authorization") || "";
    
    try {
      const user = await verify(authHeader, c.env.JWT_SECRET);
        if (user) {
          c.set("userId", user.id);
          await next();
        } else {
          c.status(403);
          return c.json({
            message: "You are not logged in."
          })
        }
    } catch(error) {
      c.status(403);
      return c.json({
        message: "You are not logged in."
      })
    }
  })

  postRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();

    const { success } = createPostInput.safeParse(body);
    if(!success) {
      c.status(411);
      return c.json({
        message: "Inputs are incorrect"
      })
    }

    const authorId = c.get("userId");
    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: authorId,
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

    const body = await c.req.json();

    const { success } = updatePostInput.safeParse(body);
    if(!success) {
      c.status(411);
      return c.json({
        message: "Inputs are incorrect"
      })
    }

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

  postRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();

    const posts = await prisma.post.findMany();
    return c.json({
      posts
    })
  })
  
  postRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    //shoudn't use body in get requests, use params/queryparams.
    const id = await c.req.param("id");

    try {
      const post = await prisma.post.findFirst({
        where: {
          id: id
        },
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
