export default {
    getAll: function(successCallback){
        fetch('api/tutoriales')
        .then(jsonSerialize => jsonSerialize.json())
        .then(data => {
            if(successCallback !== undefined){
                successCallback(data);
            }
        });
    },
    getByTitle: function name(title, successCallback) {
        fetch(`api/tutoriales/${title}`)
        .then(jsonSerialize => jsonSerialize.json())
        .then(data => {
            if(successCallback !== undefined){
                successCallback(data);
            }
        });
    }
};