const {FlightService}=require('../services/index');

const flightService=new FlightService();


const create= async (request,response)=>{
    try {
        let flightRequestData={
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const flight=await flightService.createFlights(flightRequestData);
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