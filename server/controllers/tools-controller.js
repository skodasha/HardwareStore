const Tool = require('../models/tool');

exports.createTool = function(req, res){
    if(req.body.role !== 'admin'){
        return res.status(400).json({
            success: false,
            error: 'You don`t have rights.',
        })
    }

    if(!req.body){
        return res.status(400).json({
            success: false,
            error: 'You must provide a tool.',
        })
    }
    
    if(req.files === null){
        return res.status(400).json({msg: 'No file uploaded'})
    }

    const file = req.files.file;
    const tool = new Tool(req.body);

    tool.file = file.name;

    file.mv(`../client/public/uploads/${file.name}`), err => {
        if(err){
            console.log(err);
            return res.status(500).send(err);
        }
        res.json({ filename: file.name, filePath: `/${file.name}`});
    }

    if(!tool){
        return res.status(400).json({ success: false, error: err })
    }

    tool.save().then(() => {
        return res.status(201).json({
            success: true,
            id: tool._id,
            message: 'Tool created.',
        })
    }).catch(err => {
        return res.status(400).json({
            error,
            message: 'Tool not created.',
        })
    })

}

exports.updateTool = async function(req, res){
    
    if(req.body.role !== 'admin'){
        return res.status(400).json({
            success: false,
            error: 'You don`t have rights.',
        })
    }

    if (!req.body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update.',
        })
    }

    Tool.findOne({ _id: req.params.id }, (err, tool) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Tool not found.',
            })
        }
        tool.title = req.body.title
        tool.description = req.body.description
        tool.price = req.body.price
        tool.brand = req.body.brand
        tool.save().then(() => {
            return res.status(200).json({
                success: true,
                id: tool._id,
                message: 'Tool updated.',
            })
        }).catch(error => {
            return res.status(404).json({
                error,
                message: 'Tool not updated.',
            })
        })
    })
}

exports.deleteTool = async function(req, res){
    if(req.body.role !== 'admin'){
        return res.status(400).json({
            success: false,
            error: 'You don`t have rights.',
        })
    }
    await Tool.findOneAndDelete({ _id: req.params.id }, (err, tool) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!tool) {
            return res.status(404).json({ success: false, error: 'Tool not found.' })
        }

        return res.status(200).json({ success: true, data: tool })
    }).catch(err => console.log(err))
}

exports.getToolById = async function(id){
    return await Tool.findOne({ _id: id})
}

exports.getTools = async function(req, res){
    return await Tool.find({ _deletedAt: null })
}
