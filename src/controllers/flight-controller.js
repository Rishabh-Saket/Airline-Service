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

const getAll= async (request,response)=>{
    try {
        const flights=await flightService.getAllFlightData(request.query);
        return response.status(200).json({
            data: flights,
            success: true,
            message: 'successfully fetched the flights',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch the flights",
            err: error
        });
    }
}

module.exports={
    create,
    getAll
}