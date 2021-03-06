/**
 * From Site http://bootsnipp.com
 *
 * "JS Table Filter simple insensitive"
 * Created by http://bootsnipp.com/Cyruxx
 *
 * http://bootsnipp.com/snippets/featured/js-table-filter-simple-insensitive
 */

$(document).ready(function () {

    // funcionalidade de busca nos paineis
    $('.input-system-search').keyup(function () {
        // especificar qual a tabela que deve ser utilizada no contexto da função
        var tableTargetSearch = $(this).attr("data-tb-target");
        var that = this;
        // affect all table rows on in systems table
        var tableBody = $('#' + tableTargetSearch + ' tbody');
        var tableRowsClass = $('#' + tableTargetSearch + ' tbody tr');
        $('.search-sf').remove();
        tableRowsClass.each(function (i, val) {

            //Lower text for case insensitive
            var rowText = $(val).text().toLowerCase();
            var inputText = $(that).val().toLowerCase();
            if (inputText != '') {
                $('.search-query-sf').remove();
                tableBody.prepend('<tr class="search-query-sf"><td colspan="6"><strong>Pesquisar por: "'
                    + $(that).val()
                    + '"</strong></td></tr>');
            }
            else {
                $('.search-query-sf').remove();
            }

            if (rowText.indexOf(inputText) == -1) {
                //hide rows
                tableRowsClass.eq(i).hide();

            } else {
                $('.search-sf').remove();
                tableRowsClass.eq(i).show();
            }
        });
        //all tr elements are hidden
        if (tableRowsClass.children(':visible').length == 0) {
            tableBody.append('<tr class="search-sf"><td class="text-muted" colspan="6">Nada encontrado.</td></tr>');
        }

    });
});
