import {FastifyRequest, FastifyReply} from "fastify";
import { CustomerService } from "../services/CustomerService";


export class CustomerController{
    async create(request: FastifyRequest, response: FastifyReply){

        const {name, email} = request.body as {name: string, email: string};

        const customerService = new CustomerService();
        const customer = await customerService.create({name, email});

        response.send(customer);
    }

    async list(request: FastifyRequest, response: FastifyReply){
        const customerService = new CustomerService();
        const customers = await customerService.list();
        response.send(customers);
    }

    async delete(request: FastifyRequest, response: FastifyReply){
        
        const { id } = request.params as {id: string}

        const customerService = new CustomerService();
        const customer = await customerService.delete({id});
        response.send(customer);
    }
}