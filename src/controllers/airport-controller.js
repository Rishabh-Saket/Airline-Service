const {AirportService}= require('../services/index');
const airportService=new AirportService();
const create= async (req, res)=> {
    try {
        const response=await airportService.create(req.body);
        return res.status(201).json({
            message: 'Successfully created a airport',
            err: {},
            success: true,
            data: response
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: "cannot create a airport"
        });
    }
}

module.exports= {
    create
}