import prismaClient from "../prisma";

interface CreateCustomerProps{
    name: string;
    email: string;
}

interface DeleteCustomerProps{
    id: string
}

export class CustomerService{
    async create({name, email}:CreateCustomerProps){

        if(!name || !email){
            throw new Error("Preencha todos os dados.")
        }

        const customer = await prismaClient.customer.create({
            data:{
                name,
                email,
                status: true
            }
        })

        return customer;
    };

    async list(){
        const customers = await prismaClient.customer.findMany()
        return customers;
    }

    async delete({id}:DeleteCustomerProps){
        if(!id){
            throw new Error("Solicitação Invalida.")
        }
        const findCustomer = await prismaClient.customer.findFirst({
            where:{
                id: id
            }
        })

        
        if(!findCustomer){
            throw new Error("Cliente nao existe!")
        }        

        await prismaClient.customer.delete({
            where:{
                id: findCustomer.id
            }
        })

        return { message: "Deletado com sucesso!"}
    }
}