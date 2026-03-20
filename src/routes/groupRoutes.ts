import { Router } from "express";
import { getAllGroups, getGroup, createGroup, updateGroup, removeGroup } from "../controllers/groupControllers";
const groupRouter = Router()

groupRouter.get('/groups', getAllGroups)
groupRouter.get(`/groups/:id`, getGroup)
groupRouter.post('/groups', createGroup)
groupRouter.put(`/groups/:id`, updateGroup)
groupRouter.delete(`/groups/:id`, removeGroup);

export default groupRouter