const {FlightRepository,AirplaneRepository}=require('../repository/index');
const {compareTime}=require('../utils/helper');

/**
 * INCOMING DATA--->
 * flightNumber,
 * airplaneId
 * departureAirportId
 * arrivalAirportId
 * arrivalTime
 * departureTime
 * price
 * boardingGate
 * totalSeats--> we are going to fetch from airplane repository
 */
class FlightService{

    constructor(){
        this.airplaneRepository=new AirplaneRepository();
        this.flightRepository=new FlightRepository();
    }

    async createFlights(data){
        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw {err:"arrival time can't be less than departure time"};
            }
            const airplane=await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight=await this.flightRepository.createFlight({
                ...data,totalSeats:airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};   
        }
    }
}

module.exports=FlightService;