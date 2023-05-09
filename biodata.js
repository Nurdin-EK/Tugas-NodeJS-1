//Export sebuah fungsi yang menerima empat parameter: name, birthPlace, birthDate, dan address.

module.exports = function(name, birthPlace, birthDate, address) {
    return {
        name : name,
        birthPlace : birthPlace,
        birthDate : birthDate,
        address : address
    };
};
