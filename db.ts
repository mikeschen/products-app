const connectionString: string = 'mongodb://mikeschen:7556dl393@ds161069.mlab.com:61069/codercampsdb12';

import * as mongodb from 'mongodb';

export default class Database {
  public static db:mongodb.Db;

  public static connect() {
    return mongodb.MongoClient.connect(connectionString).then((db) => {
      this.db = db;
    }).catch((err) => {
      console.error(err);
    });
  }
}
