// --- DNS - Direcciones api de los servidores

const DNS = {
    local: "192.168.1.12"
};

const DATABASE = {
    daba : "AnimePelis"
}

// --- PORT - Puertos de las api
const PORT = {
    config: "categorias.php"
}

/**
 * Construcción de rutas de la API
 */

export const ROUTES = {
    CONFIG : `http://${DNS.local}/${DATABASE.daba}/${PORT.config}`
    
}