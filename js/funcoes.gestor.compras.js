/**
 * Created by Ricardo on 07/04/2016.
 */

$(document).ready(function (){

    // máscara de input "CNPJ"
    $("#form-cd-fn-cnpj").mask("99.999.999/9999-99");

    // máscara do input de CEP
    $("#form-cd-fn-cep").mask("99999-999");

    // máscara do input de telefone
    $("#form-cd-fn-telefone").mask("(999) 9999-9999");

    // máscara do input de versao
    $("#form-cd-pd-versao").mask("9.9");

    // máscara do input de versao
    $("#form-gc-pd-versao").mask("9.9");

    // máscara do input de ano fabricacao
    $("#form-cd-pd-fabricacao").mask("9999");

    // máscara do input de ano fabricacao
    $("#form-gc-pd-fabricacao").mask("9999");

});

/**
 * Editar dados do Fornecedor
 *
 * @param id - Identificador
 */
function editarFornecedor(id) {
    var htmlFomulario =
        '<form id="form-'+ id +'-cd-fn" class="form-horizontal" data-toggle="validator" role="form">' +
        '<div class="form-group">' +
        '<label class="control-label col-sm-3" for="form-'+ id +'-cd-fn-cnpj"> CNPJ </label>' +
        '<div class="col-sm-7">' +
        '<input id="form-'+ id +'-cd-fn-cnpj" class="form-control" name="cnpj" data-minlength="18" maxlength="18" placeholder="Número de cnpj" required value="12.123.267/6773-27" />' +
        '<span class="help-block with-errors"></span>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-sm-3" for="form-'+ id +'-cd-fn-razao-social"> Razão Social </label>' +
        '<div class="col-sm-7">' +
        '<input id="form-'+ id +'-cd-fn-razao-social" class="form-control" name="razao_social" data-minlength="5" data-error="Mínimo 5 e máximo 100 caracteres alfanuméricos incluindo _ e -." maxlength="100" placeholder="Razão Social" required pattern="[\w-\s]{5,100}" title="Mínimo 5 e máximo 100 caracteres alfanuméricos incluindo _ e -." value="CNH New Holland" />' +
        '<span class="help-block with-errors"></span>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-sm-3" for="form-'+ id +'-cd-fn-endereco"> Endereço </label>' +
        '<div class="col-sm-7">' +
        '<input id="form-'+ id +'-cd-fn-endereco" class="form-control" name="endereco" data-minlength="4" maxlength="100" placeholder="Endereço" required title="Mínimo 4 e máximo 100 caracteres." value="Rua X, N° 1278" />' +
        '<span class="help-block with-errors"></span>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-sm-3" for="form-'+ id +'-cd-fn-complemento"> Complemento </label>' +
        '<div class="col-sm-7">' +
        '<textarea id="form-'+ id +'-cd-fn-complemento" class="form-control" name="complemento" maxlength="100" title="Máximo 100 caracteres."></textarea>' +
        '<span class="help-block with-errors"></span>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-sm-3" for="form-'+ id +'-cd-fn-cep"> CEP </label>' +
        '<div class="col-sm-3">' +
        '<input id="form-'+ id +'-cd-fn-cep" class="form-control" name="cep" data-minlength="9" maxlength="9" placeholder="Número do CEP" required value="21331-311" />' +
        '<span class="help-block with-errors"></span>' +
        '</div>' +
        '<label class="control-label col-sm-1" for="form-'+ id +'-cd-fn-telefone"> Fone </label>' +
        '<div class="col-sm-3">' +
        '<input id="form-'+ id +'-cd-fn-telefone" class="form-control" name="telefone" placeholder="Telefone" required value="(085) 3371-1234" />' +
        '<span class="help-block with-errors"></span>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-sm-3" for="form-'+ id +'-cd-fn-cidade"> Cidade </label>' +
        '<div class="col-sm-7">' +
        '<input id="form-'+ id +'-cd-fn-cidade" class="form-control" name="cidade" maxlength="100" placeholder="Cidade" required value="Fortaleza" />' +
        '<span class="help-block with-errors"></span>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-sm-3" for="form-'+ id +'-cd-fn-bairro"> Bairro </label>' +
        '<div class="col-sm-7">' +
        '<input id="form-'+ id +'-cd-fn-bairro" class="form-control" name="bairro" maxlength="100" placeholder="Bairro" required value="Parangaba XYZ" />' +
        '<span class="help-block with-errors"></span>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<div class="col-sm-3"></div>' +
        '<div class="col-sm-7">' +
        '<input type="submit" class="form-control btn-default" value="Cadastrar"/>' +
        '</div>' +
        '</div>' +
        '</form>';

    bootbox.dialog({
        title: "CNH New Holland <small>LTDA</small>",
        message: htmlFomulario
    });

    // máscara de input "CNPJ"
    $("#form-"+id+"-cd-fn-cnpj").mask("99.999.999/9999-99");
    // máscara do input de CEP
    $("#form-"+id+"-cd-fn-cep").mask("99999-999");
    // máscara do input de telefone
    $("#form-"+id+"-cd-fn-telefone").mask("(999) 9999-9999");

    delete (htmlFomulario);
}

/**
 * Realizar POST via ajax com dados do fornecedor que
 * deverá ser excluido.
 *
 * @param id - Identificador
 */
function excluirFornecedor(id) {
    bootbox.confirm("Deseja realmente excluir o registro deste Fornecedor?", function(result) {
        if (result) {
            console.log("Fornecedor { id = "+ id +" } devera ser excluido.")
        } else {
            console.log("Fornecedor { id = "+ id +" } NAO deve ser excluido.")
        }
    });
}

/**
 * Realizar  exclusao do item
 *
 * @param id - Identificador do produto
 */
function gc_excluirItemPedido(id) {
    bootbox.confirm("Deseja realmente excluir este item do pedido?", function(result) {
        if (result) {
            console.log("Produto { id = "+ id +" } devera ser excluido.")
        } else {
            console.log("Produto { id = "+ id +" } NAO deve ser excluido.")
        }
    });
}
