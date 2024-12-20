import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CustomerController } from "./controllers/CustomerController";

export async function routes(fastify:FastifyInstance, options:FastifyPluginOptions) {
    
    fastify.get('/teste', async (request:FastifyRequest, response: FastifyReply)=>{
        return { ok: true }
    })

    fastify.get("/customer", async(request:FastifyRequest, response: FastifyReply)=>{
        return new CustomerController().list(request, response);
    })

    fastify.post("/customer", async(request:FastifyRequest, response: FastifyReply)=>{
        return new CustomerController().create(request, response);
    })

    fastify.delete("/customer/:id", async(request:FastifyRequest, response: FastifyReply)=>{
        return new CustomerController().delete(request, response);
    })
}