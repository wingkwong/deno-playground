import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getPeople,
  getPerson,
  addPerson,
  updatePerson,
  deletePerson,
} from "./controller.ts";

const router = new Router();
router.get("/people", getPeople)
  .get("/people/:id", getPerson)
  .post("/people", addPerson)
  .put("/people/:id", updatePerson)
  .delete("/people/:id", deletePerson);

export default router;
