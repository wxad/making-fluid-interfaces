import logo from "@/assets/wxad-design.svg";

export interface IHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.RefObject<HTMLDivElement | null>;
}

const Header: React.FC<IHeaderProps> = ({ ref }) => {
  return (
    <div
      ref={ref}
      className="sticky top-0 z-50 border-b border-solid border-neutral-200 bg-white bg-opacity-85 backdrop-blur"
    >
      <div className="mx-auto flex h-16 max-w-[800px] items-center justify-between px-6">
        <div className="flex items-center gap-2 font-semibold">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m8.8 10.95l2.15-2.175l-1.4-1.425l-.4.4q-.275.275-.687.288T7.75 7.75t-.3-.712t.3-.713l.375-.375L7 4.825L4.825 7zm8.2 8.225L19.175 17l-1.125-1.125l-.4.375q-.3.3-.7.3t-.7-.3t-.3-.7t.3-.7l.375-.4l-1.425-1.4l-2.15 2.15zM17.6 5l1.425 1.425zM4 21q-.425 0-.712-.288T3 20v-2.825q0-.2.075-.387t.225-.338l4.075-4.075L3.05 8.05Q2.625 7.625 2.625 7t.425-1.05l2.9-2.9q.425-.425 1.05-.412t1.05.437L12.4 7.4l3.775-3.8q.3-.3.675-.45t.775-.15t.775.15t.675.45L20.4 4.95q.3.3.45.675T21 6.4t-.15.763t-.45.662l-3.775 3.8l4.325 4.325q.425.425.425 1.05t-.425 1.05l-2.9 2.9q-.425.425-1.05.425t-1.05-.425l-4.325-4.325L7.55 20.7q-.15.15-.337.225T6.825 21zm1-2h1.4l9.8-9.775L14.775 7.8L5 17.6zM15.5 8.525l-.725-.725L16.2 9.225z"
            ></path>
          </svg>
          Web 流畅界面建议
        </div>
        <a href="https://wxad.design">
          <img className="block w-24" src={logo} alt="wxad.design" />
        </a>
      </div>
    </div>
  );
};

export default Header;
