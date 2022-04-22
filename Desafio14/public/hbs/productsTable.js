{{#if products.length}}
  <h2 style="color:rgb(244, 0, 122);">Tabla de productos</h2>
  <div class="table-responsive">
    <table class="table table-dark align-middle table-striped">
      <tr style="color: yellow;">
        <th scope="col">Nombre del producto</th>
        <th scope="col">Precio</th>
        <th scope="col">Foto</th>
      </tr>
      {{#each products}}
        <tr>
          <td>{{this.name}} </td>
          <td>$ {{this.price}} </td>
          <td><img
              src="{{this.thumbnail}} "
              alt="{{this.name}} "
              style="width: 50px; height: 50px;"
            /></td>
        </tr>
      {{/each}}
    </table>
  </div>
{{/if}}