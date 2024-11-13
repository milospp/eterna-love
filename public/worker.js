self.onmessage = function(event) {
    const data = event.data;
    // Izvrši težak algoritam ili proces
    console.log(data);
    
    
    // const result = complexAlgorithm(data);
    self.postMessage(data); // Vraća rezultat glavnom thread-u
}

function complexAlgorithm(chat) {

    // Tvoj kompleksan kod ovde
    return chat.chat_title + ' 123'; // Samo primer
}