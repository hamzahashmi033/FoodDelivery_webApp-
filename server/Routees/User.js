import express from 'express'
import passport from 'passport'
import { getAdminStats, getAdminUsers, logOut, myProfile } from '../Controllers/userController.js'
import { authoriseAdmin, isAuthenticated } from '../Middleeware/auth.js'

const router = express.Router()


router.get("/googlelogin",passport.authenticate('google',{
    scope:["profile"]
}
))
router.get(
    "/login",
    passport.authenticate("google", {
      successRedirect: "http://localhost:3000",
    }
  ));
router.get("/me",isAuthenticated,myProfile)
router.get("/logout",logOut)
// admin routes
router.get('/admin/users',isAuthenticated,authoriseAdmin,getAdminUsers)
router.get("/admin/stats",isAuthenticated,authoriseAdmin,getAdminStats)
export default router;
