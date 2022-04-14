import  NextAuth from 'next-auth'



export default NextAuth ({
    database: process.env.DB_URL,
    session:{
        jwt:true,        
    },
    jwt:{
        secret:'alskndlasnd',
    },
})