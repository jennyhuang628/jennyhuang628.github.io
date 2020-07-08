new Vue({
    el: '#app',
    data:{

    },
    methods: {
        openModal(state, item) {
            switch (state) {
                case 'new':
                    this.tempProduct = {};
                    $('#productModal').modal('show');
                    break;
                case 'edit':
                    this.tempProduct = Object.assign({}, item);
                    $('#productModal').modal('show');
                    break;
                case 'delete':
                    $('#delProductModal').modal('show');
                    this.tempProduct = Object.assign({}, item);
                    break;
                default:
                    break;
            }
        },
        updateProduct() {
            // if (this.tempProduct.id) {
            //     const id = this.tempProduct.id;
            //     this.products.forEach((item, i) => {
            //         if (item.id === id) {
            //             this.products[i] = this.tempProduct;
            //         }
            //     });
            // } else {
            //     // Unix Timestamp
            //     const id = new Date().getTime();
            //     this.tempProduct.id = id;
            //     this.products.push(this.tempProduct);
            // }
            this.tempProduct = {};
            $('#productModal').modal('hide');
        },
    }
})