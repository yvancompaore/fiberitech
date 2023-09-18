"use client";
import React from "react";

import NavBarLight from "@/components/common/NavBarLight";
import ProductImageSlider from "@/components/common/ProductImageSlider";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { products, productsEs } from "@/utils/constants";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Button from "@/components/common/Button";
import DotIndicator from "@/components/common/DotIndicator";
import FAQ from "@/components/home/FAQ";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductReviewCard from "@/components/product/ProductReviewCard";
import ProductReviews from "@/components/product/ProductReviews";
import RelatedProducts from "@/components/product/RelatedProducts";
import ProductOverview from "@/components/product/ProductOverview";

import { getLocale } from "@/utils/constants";
import { usePathname, useSearchParams } from "next/navigation";

import { useTranslations } from "next-intl";

const ProductPage = ({ params }) => {
  const t = useTranslations("Footer");
  const pathname = usePathname();
  const locale = getLocale(pathname);
  var rigthProducts;
  console.log("locale search", locale);

  if (locale == "es") {
    rigthProducts = productsEs;
  } else {
    rigthProducts = products;
  }

  const product = rigthProducts.find((product) => product.slug === params.slug);

  return (
    <main className=" w-full l">
      <NavBarLight />

      {/* Product Overview */}

      <ProductOverview product={product} />
      {/* Description */}
      <div className={"px-2 lg:px-40 flex flex-col gap-y-3 lg:py-16"}>
        <h1 className={"text-4xl uppercase font-bold"}>Description</h1>
        <p>{product.description}</p>
      </div>

      {/* Features */}

      <ProductFeatures product={product} />

      {/* Reviews */}

      {/*<ProductReviews product={product}/>*/}

      {/* Related Products */}

      <RelatedProducts />
    </main>
  );
};

export default ProductPage;
