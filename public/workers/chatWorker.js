
// chatWorker.js
self.onmessage = function(event) {
    const { selectedSocial, messagesArray } = event.data;

    // Inicijalizujte ChatAnalysis
    let analysis = new ChatAnalysis(selectedSocial);

    // Obrađujte svaku grupu poruka
    messagesArray.forEach((messages) => {
        analysis.analyzeChat(messages);

        // Poslati rezultate nazad glavnom thread-u
        self.postMessage({
            status: 'progress',
            results: analysis.results
        });
    });

    // Kada su svi chatFiles obrađeni, pošaljite završne rezultate
    self.postMessage({
        status: 'complete',
        results: analysis.results
    });
};
