/**
 * Created by Ricardo on 05/04/2016.
 */

$(document).ready(function (){
    // máscara do input de telefone
    $("#form-cd-us-telefone").mask("(999) 9999-9999");
});

/**
 * Editar dados do usuário
 *
 * @param id - Identificador do usuário
 */
function editarUsuario(id) {
    var htmlFomulario =
        '<p>Alterar dados deste usuário.</p><br/>' +
        '<form id="form-alt-us" class="form-horizontal" data-toggle="validator" role="form">' +
        '<div class="form-group">' +
        '<label for="form-alt-us-tipo" class="control-label col-sm-3"> Tipo </label>' +
        '<div class="col-sm-7">' +
        '<select id="form-alt-us-tipo" name="tipo" class="form-control" required="required">' +
        '<option value="1">Caixeiro</option>' +
        '<option selected="selected" value="2">Gestor de Compras</option>' +
        '<option value="3">Gestor de Estoque</option>' +
        '<option value="4">Gerente</option>' +
        '</select>' +
        '<small class="descricao">Selecione o perfil de usuário.</small>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-sm-3" for="form-alt-us-nome"> Nome </label>' +
        '<div class="col-sm-7">' +
        '<input id="form-alt-us-nome" class="form-control" name="nome" data-minlength="3" data-error="Mínimo 3 e máximo 20 caracteres alfanuméricos" maxlength="20" placeholder="Nome de Usuário" required pattern="[A-Za-zÀ-ú, -,Ã,ã,Õ,õ,ç,Ç]{3,20}" title="Mínimo 3 e máximo 20 caracteres alfanuméricos" value="João da Silva"/>' +
        '<span class="help-block with-errors"></span>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-sm-3" for="form-alt-us-email"> E-mail </label>' +
        '<div class="col-sm-7">' +
        '<input id="form-alt-us-email" class="form-control" type="email" name="email" placeholder="Email do usuário" required="required" value="joao.silva@mail.com"/>' +
        '<span class="help-block with-errors"></span>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<label class="control-label col-sm-3" for="form-alt-us-telefone"> Telefone </label>' +
        '<div class="col-sm-7">' +
        '<input id="form-alt-us-telefone" class="form-control" name="telefone" placeholder="Telefone" required="required" value="085986741234"/>' +
        '<span class="help-block with-errors"></span>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<div class="col-sm-3"></div>' +
        '<div class="col-sm-7">' +
        '<div class="checkbox">' +
        '<label>' +
        '<input id="form-cd-us-acesso" checked name="acesso" type="checkbox"> Habilitar acesso ao sistema.' +
        '</label>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="form-group">' +
        '<div class="col-sm-3"></div>' +
        '<div class="col-sm-7">' +
        '<input type="submit" class="form-control btn-default" value="Atualizar"/>' +
        '</div>' +
        '</div>' +
        '</form>';

    bootbox.dialog({
        title: "João Silva <small>(Gestor de Compras)</small>",
        message: htmlFomulario
    });

    // aplicar máscara
    $("#form-alt-us-telefone").mask("(999) 99999-9999");

    delete (htmlFomulario);
}

/**
 * Realizar POST via ajax com dados de usuário que
 * deverá ser excluido.
 *
 * @param id - Identificador do usuário
 */
function excluirUsuario(id) {
    bootbox.confirm("Deseja realmente excluir este usuário?", function(result) {
        if (result) {
            console.log("Usuario { id = "+ id +" } devera ser excluido.")
        } else {
            console.log("Usuario { id = "+ id +" } NAO deve ser excluido.")
        }
    });
}

