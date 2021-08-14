
const express = require("express");
const Slots = require("../modules/Slots");
const router = express.Router({ mergeParams: true });


router.get("/", function(req, res, next) {
 const conn = require("../connections/mysql").getConnection();
  return Slots.getSlots(conn)
  .then(result => {
    return res.status(200).json({list: result})
  })
  .catch(err=> {
      return res.status(500).json({message: err.message})
  })
});

router.post("/", function(req, res, next) {
  const conn = require("../connections/mysql").getConnection();
   return Slots.addSlot(conn, req.body)
   .then(result => {
     return res.status(200).json({message: "added successfully"})
   })
   .catch(err=> {
       return res.status(500).json({message: err.message})
   })
 });

 router.put("/update/:slot", function(req, res, next) {
  const conn = require("../connections/mysql").getConnection();
   return Slots.updateSlot(conn, req.body, req.params)
   .then(result => {
     return res.status(200).json({message: "updated successfully"})
   })
   .catch(err=> {
       return res.status(500).json({message: err.message})
   })
 });

router.get("/:slot", function(req, res, next) {
  const conn = require("../connections/mysql").getConnection();
   return Slots.getSlotData(conn, req.params)
   .then(result => {
     return res.status(200).json({data: result[0]})
   })
   .catch(err=> {
       return res.status(500).json({message: err.message})
   })
 });



module.exports = router;