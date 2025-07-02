import {sequelize, Usuario, Filme} from './models/Index.js';

(async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Conexão com o banco de dados estabelecida com sucesso.');

        await sequelize.sync({ alter: true }); // Isso agora criará TODAS as tabelas com base em todos os modelos importados e relacionados
        console.log('✅ Tabelas sincronizadas com sucesso.');

        // Exemplo de uso:
        const novoUsuario = await Usuario.create({
        login: 'miguel3.andrade',
        nome: 'Miguel3 Andrade',
        });

        const usuarios = await Usuario.findAll();
        console.log(`Total de usuários: ${usuarios.length}`);
    } catch(error){
        console.error('❌ Erro ao conectar ou sincronizar o banco de dados:', error);
    } finally { 
        await sequelize.close();
    }
})();
