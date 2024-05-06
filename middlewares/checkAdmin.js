export default async (req, res, next) => {
    try {
        if(!req.user) {
        return res.status(404).send({message: 'User mot found'});
    }
    
    
    if(req.user.role !== 'admin' ) {
        return res.status(500).json({
            message: `Access denied`,
        });
    }
    
    next();
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err.message});
    };
    
    };