const PRODUCTS = 'products';
const CATEGORY = 'categories';
const BRANDS = 'brands';
const USERS = 'users';
const TRANSACTIONS = 'orders';

function formatDate(date) {
    return date.toLocaleString();

}

function formatStatus(status) {
    if (status === -1) {
        return "Đang xử lý";
    }
    if (status === 0) {
        return "Đang giao";
    }
    if (status === 1) {
        return "Đã giao"
    }
    if (status === -2) {
      return "Hủy"
  }
}

function formatCurrency(value) {
    return value.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}

function products(id, name, categoryName, brandName, price) {
    let html = `<tr>
    <th scope="col">${id}</th>
    <td>${name}</td>
    <td>${categoryName}</td>
    <td>${brandName}</td>
    <td>${price}</td>
    <td>
      <div class="btn-group">
        <a href="/products/edit" class="btn btn-primary"><span class="glyphicon glyphicon-pencil"></span>
          Edit</a>
        <a href="#" class="btn btn-danger"><span class="glyphicon glyphicon-remove"></span> Delete</a>
      </div>
    </td>
  </tr>`;

    return html;
}

function transactions(id, idUser, address, listProducts, total, status) {
    let html = ` <tr>
    <th scope="col">${id}</th>
    <td>${idUser}</td>
    <td>${address}</td>
    <td>`
    listProducts.forEach(elm => {
        let price = formatCurrency(elm.price);
        html += `<div style="border-top: 1px solid gray">
        <p>Mã sản phẩm: ${elm.idProduct}</p>
        <p>Tên sản phẩm: ${elm.nameProduct}</p>
        <p>Số lượng: ${elm.quantity}</p>
        <p>Đơn giá: ${price}</p>
      </div>`
    })
    let totalF = formatCurrency(total);
    let statusF = formatStatus(status);
    html += `</td>
      <td>${totalF}</td>
      <td>${statusF}</td>
      <td>
        <div class="btn-group">
          <a href="/orders/edit/${id}" class="btn btn-primary"><span class="glyphicon glyphicon-pencil"></span>
            Edit</a>
        </div>
      </td>
    </tr>`;

    return html;
}

function categories(id, name) {
    let html = `<tr>
    <th scope="col">${id}</th>
    <td>${name}</td>
    <td>
      <div class="btn-group">
        <a href="/categories/edit" class="btn btn-primary"><span class="glyphicon glyphicon-pencil"></span> Edit</a> 
        <a href="#" class="btn btn-danger"><span class="glyphicon glyphicon-remove"></span> Delete</a>
      </div>
    </td>
  </tr>`

    return html;
}

function brands(id, name) {
    let html = `<tr>
    <th scope="col">${id}</th>
    <td>${name}</td>
    <td>
      <div class="btn-group">
        <a href="/brands/edit" class="btn btn-primary"><span class="glyphicon glyphicon-pencil"></span> Edit</a> 
        <a href="#" class="btn btn-danger"><span class="glyphicon glyphicon-remove"></span> Delete</a>
      </div>
    </td>
  </tr>`

    return html;
}

function users(id, email, name, address, cmnd, phone) {
    let html = `<tr>
    <th scope="col">${id}</th>
    <td>${email}</td>
    <td>${name}</td>
    <td>${address}</td>
    <td>${cmnd}</td>
    <td>${phone}</td>
    <td>
      <div class="btn-group">
        <a href="/users/edit" class="btn btn-primary"><span class="glyphicon glyphicon-pencil"></span>
          Edit</a>
        <a href="#" class="btn btn-danger"><span class="glyphicon glyphicon-remove"></span> Delete</a>
      </div>
    </td>
  </tr>`;
    return html
}
// pagination product
$(document).ready(function () {
    let type = window.location.pathname.split('/')[1];
    if (type !== PRODUCTS && type !== CATEGORY && type !== BRANDS && type !== USERS && type !== TRANSACTIONS) {
        return;
    }

    $(`#pagination-${type}`).pagination({
        dataSource: `http://localhost:3000/api/pagination?type=${type}`,
        locator: `${type}`,
        totalNumberLocator: function (response) {
            return response.total;
        },
        pageSize: 3,
        ajax: {
            beforeSend: function () {
                $(`#${type}`).html('Loading data ...');
            }
        },
        callback: function (data, pagination) {
            let pageContent = data;
            let html = "";
            if (type === PRODUCTS) {
                pageContent.forEach(elm => {
                    let price = formatCurrency(elm.price);
                    html += products(elm._id, elm.name, elm.categoryCode.name, elm.brandCode.name, price);
                })
            }
            else if (type === CATEGORY) {
                pageContent.forEach(elm => {
                    html += categories(elm._id, elm.name);
                })

            }
            else if (type === USERS) {
                pageContent.forEach(elm => {
                    html += users(elm._id, elm.email, elm.name, elm.address, elm.cmnd, elm.phone);
                })

            }
            else if (type === TRANSACTIONS) {
                pageContent.forEach(elm => {
                    html += transactions(elm._id, elm.idUser, elm.address, elm.listProducts, elm.total, elm.status);
                })

            }
            else if (type === BRANDS) {
                pageContent.forEach(elm => {
                    html += brands(elm._id, elm.name);
                })

            }
            
            $(`#${type}`).html(html);
        }
    });

});