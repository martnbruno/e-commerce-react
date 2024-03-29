import { useState } from "react";

import Carousel from "../../components/Carousel/Carousel";
import Counter from "../../components/Counter/Counter";
import Badge from "../../components/Badge/Badge";
import Modal from "../../components/Modal/Modal";

import {
  ProductDetailsWrapperStyled,
  ProductDetailsHeader,
  ProductDetailsTitle,
  ProductDetailsDescription,
  ProductDetailsPrice,
  ProductDetailsLastPrice,
  CounterWrapperStyled,
  ProductPricesWrapperStyled,
  ProductDetailsContainerStyled,
} from "./ProductDetails.styled";

import { images } from "./images";
import { ProductType } from "../../customTypes/ProductType";

interface Props {
  itemCount: number;
  setItemCount: React.Dispatch<React.SetStateAction<number>>;
  product: ProductType;
}
const ProductDetails: React.FC<Props> = ({
  itemCount,
  setItemCount,
  product,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <ProductDetailsContainerStyled>
      {openModal ? (
        <Modal openModal={openModal} setOpenModal={setOpenModal} />
      ) : null}
      <Carousel
        images={images}
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
      <ProductDetailsWrapperStyled>
        <ProductDetailsHeader>SNEAKER COMPANY</ProductDetailsHeader>
        <ProductDetailsTitle>Fall Limited Edition Sneakers</ProductDetailsTitle>
        <ProductDetailsDescription>
          {product.description}
        </ProductDetailsDescription>
        <ProductPricesWrapperStyled>
          <ProductDetailsPrice>${product.price}.00</ProductDetailsPrice>
          <Badge text="50%" />
        </ProductPricesWrapperStyled>
        <ProductDetailsLastPrice>$250.00</ProductDetailsLastPrice>
        <CounterWrapperStyled>
          <Counter setItemCount={setItemCount} />
        </CounterWrapperStyled>
      </ProductDetailsWrapperStyled>
    </ProductDetailsContainerStyled>
  );
};

export default ProductDetails;
