/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    version: function (req, res) {
        return res.json({
          version: '0.1'
        });
      }
};

