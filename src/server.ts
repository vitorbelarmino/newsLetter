import 'dotenv/config'
import { app, } from './app'

const PORT = 3001;
app.listen(PORT, () => console.log(`Api rodando na porta ${PORT}`))
