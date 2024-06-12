$('#name').click(function () {
    //sortTable(0, 'text');
});

$('#number1').click(function () {
    //sortTable(1, 'number');
});

$('#number2').click(function () {
    //sortTable(2, 'number');
});

$('#number3').click(function () {
    //sortTable(3, 'number');
});


function sortTable(column, type) {

    var order = $('table thead tr>th:eq(' + column + ')').data('order');
    order = order === 'ASC' ? 'DESC' : 'ASC';
    $('table thead tr>th:eq(' + column + ')').data('order', order);

    $('table tbody tr').sort(function (a, b) {
        a = $(a).find('td:eq(' + column + ')').text();
        b = $(b).find('td:eq(' + column + ')').text();
        switch (type) {
            case 'text':
                return order === 'ASC' ? a.localeCompare(b) : b.localeCompare(a);
                break;
            case 'number':
                return order === 'ASC' ? a - b : b - a;
                break;
            case 'date':
                var dateFormat = function (dt) {
                    [d, m, y] = dt.split('.');
                    return [y, m - 1, d];
                }
                a = new Date(...dateFormat(a));
                b = new Date(...dateFormat(b));
                return order === 'ASC' ? a.getTime() - b.getTime() : b.getTime() - a.getTime();
                break;
        }

    }).appendTo('table tbody');
}
