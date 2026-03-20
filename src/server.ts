import express from 'express'
import cors from 'cors'
import userRouter from './routes/userRoutes';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use(userRouter)

app.listen(PORT, () => {
  console.log(`\n✅ Servidor Online!`);
});
