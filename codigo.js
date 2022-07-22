$(document).ready(function(){     
  $("#myTable").dynamicTable({
        //definimos las columnas iniciales    
        columns: [{
              text: "Nombre",
              key: "name"
          },
          {
              text: "Nota 1",
              key: "age"
          },

          {
              text: "Nota 2",
              key: "pais"
          },          
          {
              text: "Nivel",
              key: "level"
          },        
        ],

        //definición de botones
        buttons: {
            addButton: '<input type="button" value="Nuevo" class="btn btn-success" />',
            cancelButton: '<input type="button" value="Cancelar" class="btn btn-primary" />',
            deleteButton: '<input type="button" value="Borrar" class="btn btn-danger" />',
            editButton: '<input type="button" value="Editar" class="btn btn-primary" />',
            saveButton: '<input type="button" value="Guardar" class="btn btn-success" />',
        },
        showActionColumn: true,
        //condicionales
        getControl: function (columnKey) {
            if (columnKey == "age") {
              return '<input type="number" class="form-control" />';
            }

            if (columnKey == "level") {
              return '<select class="form-control"><option value="I">Inicial</option><option value="P">Primaria</option><option value="S">Secundaria</option></select>';
            }

            return '<input type="text" class="form-control" />';
        }

    });	    
});    