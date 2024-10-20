const model = require('../models/index.js');
const { status } = require('../constants/index.js');
const asyncHandler = require('express-async-handler');

class UpdateCycleController {
    getCycle = asyncHandler(async (req, res, next) => {
        try {
            const updateCycle = await model.updateCycleModel.findOne();
            return res.status(status.OK).json({
                updateCycle
            });
        } catch (err) {
            next(err);
        }
    });


    updateCycle = asyncHandler(async (req, res, next) => {
        try {
            const { cycle, period } = req.body;
            let updateCycle = await model.updateCycleModel.findOne();
            
            if (!updateCycle) {
                updateCycle = new model.updateCycleModel();
            }

            if (cycle) updateCycle.cycle = parseInt(cycle);
            if (period) updateCycle.period = parseInt(period);
            await updateCycle.save();

            return res.status(status.OK).json({
                updateCycle
            });
        } catch (err) {
            console.log("Error at updateCycle: ", err);
            next(err);
        }
    });
}

module.exports = UpdateCycleController;