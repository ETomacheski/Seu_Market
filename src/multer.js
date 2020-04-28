const multer = require('multer');

module.exports = (multer({
  
    storage: multer.diskStorage({
      
        destination: (req, file, cb) => {
         
            // Setamos o destino como segundo paramêtro do callback
            cb(null, './src/public/uploads');
        },
        
        filename: (req, file, cb) => {
          
            // Setamos o nome do arquivo que vai ser salvado no segundo paramêtro
            cb(null, Date.now().toString() + '-' + file.originalname);

        }
    }),

    fileFilter: (req, file, cb) => {
     
            // Procurando o formato do arquivo em um array com formatos aceitos
      	    // A função vai testar se algum dos formatos aceitos do ARRAY é igual ao formato do arquivo.
            const isAccepted = ['image/png', 'image/jpg', 'image/jpeg', undefined].find( formatoAceito => formatoAceito == file.mimetype );

            if(isAccepted) {
                // Executamos o callback com o segundo argumento true (validação aceita)
                return cb(null, true);
            }
            
            // Se o arquivo não bateu com nenhum aceito, executamos o callback com o segundo valor false (validação falhou)
            else {
                // O primeiro parametro diz o que irá fazer após o erro.
                return cb(null, false);
            }
    }
}));