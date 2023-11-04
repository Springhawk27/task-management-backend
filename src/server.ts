import mongoose from 'mongoose';
import app from './app';
import config from './config/index';

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    // loggerInfo.info(`Database Connected Successfully`);
    console.log(`Database Connected Successfully`);

    app.listen(config.port, () => {
      // loggerInfo.info(`Application listening on port ${config.port}`);
      console.log(`Application listening on port ${config.port}`);
    });
  } catch (err) {
    // loggerError.error(`Database Connection Failed`, err);
    console.log(`Database Connection Failed`, err);
  }
}

bootstrap();
