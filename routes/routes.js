var appRouter = function (app) {
    app.get("/api", function(req, res) {
      res.status(200).send("Welcome to Litmus Callback Server");
    });

    app.post("/api/echo", function(req, res) {
      res.status(200).send({
        success: 'true',
        message: req.body});
        // console.log(req.body);
    });
  }
  
  module.exports = appRouter;