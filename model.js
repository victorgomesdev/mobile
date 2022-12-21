const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize("patens61_patense-online", "patens61_adm", "CT-W9q^wQMSX", {
    host: "216.172.172.194",
    dialect: 'mysql',
})

async function conexao() {
    await sequelize.authenticate().
        then(console.log('CONECTADO AO BANCO DE DADOS.')).
        catch('ERRO NA CONEXAO')
}
conexao()

const Ocorrencia = sequelize.define('ocorrencias', {

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rua: {
        type: DataTypes.STRING,
        allowNull: false
    },
    num: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt:{
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt:{
        type: DataTypes.DATE,
        allowNull: false
    },
    id_status:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'ocorrencias',
})

/*async function sincronizacao() { 
    await Ocorrencia.sync({alter: true}).
        then(console.log('SINCRONIZADO')).
        catch(error => console.log(error.message))
}
sincronizacao()
*/
module.exports = Ocorrencia