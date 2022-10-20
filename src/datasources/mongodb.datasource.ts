import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'DatasourceMongodb',
  connector: 'mongodb',
  url: 'mongodb+srv://ApiRestMongo:apirest@cluster0.lpic8xz.mongodb.net/test',
  host: 'cluster0.lpic8xz.mongodb.net',
  port: 27017,
  user: 'ApiRestMongo',
  password: 'apirest',
  database: 'Cluster0',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DatasourceMongodbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'DatasourceMongodb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.DatasourceMongodb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
