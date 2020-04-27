const { Router } = require('express');
const asyncHandler = require('express-async-handler')

const {
    createTool,
    updateTool,
    deleteTool,
    getToolById,
    getTools
} = require('../controllers/tools-controller');

const router = Router();

router.post('/tool',createTool);
router.put('/tool/:id', updateTool);
router.delete('/tool/:id', deleteTool);
router.get('/tool/:id', asyncHandler(async(req, res) => {
    const tool = await getToolById(req.params.id);
    res.json(tool);
}));
router.get('/tools', asyncHandler(async(req, res) => {
    const role = req.body.role;
    const name = req.body.name;
    const tools = await getTools();
    res.json({tools, role, name});
}));

module.exports = router;