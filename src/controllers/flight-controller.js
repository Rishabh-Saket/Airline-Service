const {FlightService}=require('../services/index');

const flightService=new FlightService();


const create= async (request,response)=>{
    try {
        const flight=await flightService.createFlights(request.body);
        return response.status(201).json({
            data: flight,
            success: true,
            message: 'successfully created a flight',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a flight",
            err: error
        });
    }
}

module.exports={
    create
}