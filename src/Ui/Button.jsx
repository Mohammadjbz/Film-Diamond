function Button({
  children,
  bgColor = "bg-transparent",
  borderColor,
  border = "",
  txtColor = "text-black",
  hoverStyle = "",
}) {
  return (
    <button
      className={`flex items-center cursor-pointer py-[14px] px-[32px] gap-[12px] rounded-[8px] text-[18px] ${border} ${borderColor} ${txtColor} ${bgColor} ${hoverStyle}`}
    >
      {children}
    </button>
  );
}

export default Button;
