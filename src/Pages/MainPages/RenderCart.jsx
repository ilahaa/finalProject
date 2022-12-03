import React from "react";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const Cart = () => {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);
  const { totalItems } = useCart();
  const { isEmpty, items, removeItem, updateItemQuantity, cartTotal } =
    useCart();
  return (
    <>
      <div className="renderCart">
        <div className="cartTotal">Cart ({totalItems})</div>
        {isEmpty ? (
          <div className="empty-txt d-flex justify-content-center">
            <h3 className="text-center">{t('cart.1')}</h3>
          </div>
        ) : (
          <div className="myCart cart">
            <div className="cart-main">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12 ">
                    <table>
                      <tbody>
                        {items.map((item, index) => {
                          return (
                            <>
                              <tr key={item.id}>
                                <td className="">
                                  <img src={item.img} alt="" width="60px" />
                                </td>
                                <td>
                                  <p className="title ms-2">{item.title}</p>
                                </td>
                                <td>
                                  <p className="price ms-5">{item.price}$</p>
                                </td>
                                <td>
                                  <div className="all-main2">
                                    <span
                                      className="addRemoveBtn btn btn-secondary ms-3"
                                      onClick={() => {
                                        updateItemQuantity(
                                          item.id,
                                          item.quantity - 1
                                        );
                                        toast.info("Deleted");
                                      }}
                                    >
                                      -
                                    </span>
                                    <span
                                      className="addRemoveBtn btn btn-secondary ms-2"
                                      onClick={() => {
                                        updateItemQuantity(
                                          item.id,
                                          item.quantity + 1
                                        );
                                        toast.success("New Product");
                                      }}
                                    >
                                      +
                                    </span>
                                  
                                  
                                   <i onClick={() => removeItem(item.id)} class="trash fa-solid fa-trash ms-4"></i>
                              
                                  </div>
                                </td>
                                <td>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="total">
          <hr />
          <p className=""> {t('cart.2')} : <span>{cartTotal}$</span></p> <hr /></div>
      </div>
    </>
  );
};

export default Cart;
