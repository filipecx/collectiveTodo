import "dotenv/config"
import express from 'express'
import cors from 'cors'
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from "./generated/prisma/client";
import userRouter from './routes/userRoutes';
import todoRouter from './routes/todoRoutes';
import groupRouter from './routes/groupRoutes';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma }

app.use(userRouter)
app.use(todoRouter)
app.use(groupRouter)

app.listen(PORT, () => {
  console.log(`\n✅ Servidor Online!`);
});
