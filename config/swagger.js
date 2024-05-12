import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Task Manager API',
            definition: 'Task Manager application',
            version: '1.0.0'
        },
        components: {
            securitySchemes: {
                basicAuth: {
                    type: 'http',
                    schema: 'basic'
                }
            }
        }
    },
    apis: ['../routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;