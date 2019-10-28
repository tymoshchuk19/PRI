const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    if(req.method === 'GET') { 
        if(req.url === '/pr' | req.url === '/'){
            fs.readFile('PR/pr.html', (erro,dados) => {
                if(!erro){
                    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'})
                    res.write(dados);
                    res.end();
                }
                else{
                    console.log(`Erro de leitura no ficheiro ${url[2]}`);
                    res.end();
                }
            } );
        }
        if(req.url === '/index'){
            fs.readFile('index.html', (erro,dados) => {
                if(!erro){
                    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'})
                    res.write(dados);
                    res.end();
                }
                else{
                    console.log(`Erro de leitura no ficheiro ${url[2]}`);
                    res.end();
                }
            } );
        }
        const url = req.url.split('/');
        if(req.url.startsWith('/musica/')){
            if(url[2] === 'doc2html.xsl'){
                fs.readFile('data/doc2html.xsl', (erro,dados) => {
                    if(!erro){
                        res.writeHead(200, { 'Content-Type': 'text/xsl; charset=utf-8'})
                        res.write(dados);
                        res.end();
                    }
                    else{
                        console.log(`Erro de leitura no ficheiro ${url[2]}`);
                        res.end();
                    }
                } );
            }
            else {
                fs.readFile(`data/doc${url[2]}.xml`, (erro,dados) => {
                    if(!erro){
                        res.writeHead(200, { 'Content-Type': 'text/xml; charset=utf-8'})
                        res.write(dados);
                        res.end();
                    }
                    else{
                        console.log(`Erro de leitura no ficheiro doc${url[2]}.xml`);
                        res.end();
                    }
                } );
            }
        }
    }
});

server.listen(3001);
console.log('Servidor à escuta na porta 3001...');