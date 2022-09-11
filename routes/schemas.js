 /**
   * @swagger
   * /stocks:
   *   get:
   *     description: get all stocks 
   *     tags: [Stocks]
   *     produces:
   *       - application/json
   *     responses:
   *        200:
   *         description: success
   *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                message:
 *                   type: string
 *                status:
 *                   type: string
 *                data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       Risk Score/Tolerence:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       Nigerian Stocks:
 *                         type: number
 *                         description: Nigerian Stocks.
 *                       Foriegn Stocks:
 *                         type: number
 *                       Tech Stocks:
 *                         type: number
 *                       Emerging Stocks:
 *                         type: number
 *                       Nigerian Bonds:
 *                         type: number
 *                       Foriegn Bonds:
 *                         type: number
 *                       Commodities:
 *                         type: number
 *                       Real Estate:
 *                         type: number
 *                       T-Bills:
 *                         type: number
 *                       Alternative:
 *                         type: number
 *                       _id:
 *                         type: string
 * 
 */

 /**
*    @swagger
*    definitions:
*       stockresponse:
*          200:
*            description: success
*            content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                message:
 *                   type: string
 *                status:
 *                   type: string
 *                data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       Risk Score/Tolerence:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       Nigerian Stocks:
 *                         type: string
 *                         description: Nigerian Stocks.
 *                       Foriegn Stocks:
 *                         type: string
 *                       Tech Stocks:
 *                         type: string
 *                       Emerging Stocks:
 *                         type: string
 *                       Nigerian Bonds:
 *                         type: string
 *                       Foriegn Bonds:
 *                         type: string
 *                       Commodities:
 *                         type: string
 *                       Real Estate:
 *                         type: string
 *                       T-Bills:
 *                         type: string
 *                       Alternative:
 *                         type: string
 *                       _id:
 *                         type: string
 * 
*/
 