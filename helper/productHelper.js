function formatDate(date){
    return date.toLocaleString();
    
}

function formatStatus(status){
    if(status === -1){
        return "Đang xử lý";
    }
    if(status === 0){
        return "Đang giao";
    }
    if(status === 1){
        return "Đã giao"
    }
}

function formatCurrency(value){
    return value.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}

module.exports = {
    formatDate,
    formatStatus,
    formatCurrency
};


