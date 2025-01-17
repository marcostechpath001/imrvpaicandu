document.addEventListener('DOMContentLoaded', () => {
    // Função para obter o IP e detalhes do visitante
    async function getVisitorInfo() {
        try {
            // Chamada a uma API pública para obter o IP e informações geográficas
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();

            const visitorData = {
                ip: data.ip,
                country: data.country_name,
                region: data.region,
                city: data.city,
                operatingSystem: getOperatingSystem(),
                userAgent: navigator.userAgent,
                timestamp: new Date().toISOString(),
            };

            console.log('Dados do visitante:', visitorData);

            // Enviar os dados ao servidor
            fetch('https://seuservidor.com/proteger-site', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(visitorData)
            }).then(response => {
                console.log('Informações enviadas com sucesso:', response.status);
            }).catch(error => {
                console.error('Erro ao enviar os dados:', error);
            });
        } catch (error) {
            console.error('Erro ao obter informações do visitante:', error);
        }
    }

    // Função para detectar o sistema operacional
    function getOperatingSystem() {
        const userAgent = navigator.userAgent;
        if (userAgent.includes('Windows')) return 'Windows';
        if (userAgent.includes('Macintosh')) return 'Mac';
        if (userAgent.includes('Linux')) return 'Linux';
        return 'Desconhecido';
    }

    getVisitorInfo();
});