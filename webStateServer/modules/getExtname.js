exports.getExtnams = (extname)=>{
    switch(extname) {
        case '.html' :
            return 'text/html';
        case '.css' :
            return 'text/css';
        case '.js' :
            return 'text/html'; 
        default:
            return 'text/html';       
}    


}