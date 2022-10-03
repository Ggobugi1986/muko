const express = require('express');
const eventRouter = require('./routers/eventRouter');

const app = express();

app.use('/api/event', eventRouter);

app.listen(4000, () =>
  console.log('🚀 뮤코 서버가 http://localhost:4000에서 대기 중입니다. 😀')
);
