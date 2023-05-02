$(".quantity").on("click", function () {
  var productId = $(this).attr("data-product-id");
  var action = $(this).attr("data-action");
  var changeTotalPrice = $(this).innerHTML = "$" + totalPrice + ".00"
  updateCart(productId, action,);
});

$("#remove").on("click", function () {
  var productId = $(this).attr("data-product-id");
  updateCart(productId, "remove");
});

function updateCart(productId, action) {
  var url = "./JSON/order.json";
  var formData = new FormData();
  formData.append("product_id", productId);
  formData.append("action", action);

  $.ajax({
    url: url,
    method: "POST",
    data: formData,
    success: function (data) {
      console.log("data:", data);
      // Cập nhật giỏ hàng trên trang web của bạn
    },
    error: function (error) {
      console.log("error:", error);
    },
  });
}
