function PlaceHolderImage({ type }) {
  const imageSize = type === "cast" ? "66" : "165x248";

  return (
    <img
      src={`https://placehold.co/${imageSize}?text=No+Image&font=opensans`}
      className={
        type === "slider"
          ? "w-full rounded-[0.4rem]"
          : "w-[66px] h-[66px] object-cover"
      }
    />
  );
}

export default PlaceHolderImage;
