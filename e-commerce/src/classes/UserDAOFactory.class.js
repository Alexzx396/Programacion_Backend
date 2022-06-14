import config from "../utils/config.js";
import UserDAOFile from "../service/users/UserDAO.file.js";
import UserDAOMem from "../service/users/UserDAO.mem.js";
import UserDAOMongo from "../service/users/UserDAO.mongo.js";

class UserDAOFactory {
  static get() {
    switch (config.srv.PERSISTENCE) {
      case "MEM":
        return new UserDAOMem();
      case "FILE":
        return new UserDAOFile();
      case "MONGOATLAS":
        return new UserDAOMongo();

      default:
        return;
    }
  }
}

export default UserDAOFactory;