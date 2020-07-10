new Vue({
    el: '#app',
    data:{
        products: [
            {
                id: 12345,
                unit: '個',
                category: '蛋糕',
                title: '巧克力蛋糕',
                origin_price: 2000,
                price: 1950,
                description: '巧克力內餡非常濃郁，搭上微苦的黑巧克力口感，讓每一口都充滿驚喜。',
                content: '可可醬、鮮奶油',
                is_enabled: 1,
                imageUrl: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=947&q=80',
            },
            {
                id: 67890,
                unit: '片',
                category: '蛋糕',
                title: '抹茶方塊蛋糕',
                origin_price: 180,
                price: 150,
                description: '抹茶香氣醇厚，甜中透露些許苦澀，卻又餘韻回甘。',
                content: '抹茶粉、鮮奶油',
                is_enabled: 0,
                imageUrl: 'https://images.unsplash.com/photo-1492683654773-a3b0476056c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1475&q=80',
            },
        ],
        tempProduct: {},//暫存物件，不修改原始資料
    },
    methods: {
        openModal(action, item) {
            switch (action) {
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
        editProduct() {//編輯資料
            if (this.tempProduct.id) {
                console.log('this.tempProduct.id', this.tempProduct.id)
                const id = this.tempProduct.id;
                this.products.forEach((item, i) => {
                    if (item.id === id) {
                        this.products[i] = this.tempProduct;
                    }
                });
            } else {
                this.tempProduct.id = new Date().getTime();
                this.products.push(this.tempProduct)
            }
            this.tempProduct = {};
            $('#productModal').modal('hide');
        },
        deleteModal() {//刪除資料
            this.products.forEach((item,i) => {
                if (item.id == this.tempProduct.id){
                    this.products.splice(i,1)
                }
            });
            this.tempProduct={};
            $('#delProductModal').modal('hide');
        },
    }
})