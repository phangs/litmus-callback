var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to Litmus Callback Server");
    });
  }
  
  module.exports = appRouter;