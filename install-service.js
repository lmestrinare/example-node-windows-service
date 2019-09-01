var Service = require('node-windows').Service;
// Criando um novo objeto do Serviço
var svc = new Service({
    //Nome do servico
    name:'Teste-Node-Windows',
    //Descricao que vai aparecer no Gerenciamento de serviço do Windows
    description: 'Serviço de teste Node-Windows',
    //caminho absoluto do seu script
    script: 'D:\\FLYSYSTEC\\Projetos\\Testes\\example-node-windows-service\\app.js'
});
svc.on('install',function(){
    svc.start();
    console.log('Install complete. Service started.');
});
// instalando o servico
svc.install();
