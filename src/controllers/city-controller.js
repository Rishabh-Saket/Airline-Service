const {CityService}=require('../services/index');
const cityService=new CityService();

//POST--> city/
const create=async (request,response)=>{
    try {
        const city=await cityService.createCity(request.body);
        return response.status(201).json({
            data: city,
            success: true,
            message: "Successfully created a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a city",
            err: error
        });
    }
}

//DELETE --> city/:id
const destroy= async (request,response)=>{
    try {
        const isDeleted=await cityService.deleteCity(request.params.id);
        return response.status(200).json({
            data: isDeleted,
            success: true,
            message: "successfully deleted a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            data: {},
            success: false,
            message: "not able to delete a city",
            err: error
        });
    }
}

//GET-->/city/:id
const get=async (request,response)=>{
    try {
        const city=await cityService.getCity(request.params.id);
        return response.status(200).json({
            data: city,
            success: true,
            message: "successfully got a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            data: {},
            success: false,
            message: "not able to get a city",
            err: error
        });
    }
}

//PATCH--> /city/:id-> req.body
const update= async (request,response)=>{
    try {
        const city=await cityService.updateCity(request.params.id,request.body);
        return response.status(200).json({
            data: city,
            success: true,
            message: "successfully updated a city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            data: {},
            success: false,
            message: "not able to update a city",
            err: error
        });
    }
}

module.exports={
    create,
    destroy,
    update,
    get
}