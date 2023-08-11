import server from "./server";
import { PORT } from "./constants/serverSettingsConstants";

server.listen(PORT, () => {
  console.log(`Server Is Listening On Port: http://localhost:${PORT}`);
});
